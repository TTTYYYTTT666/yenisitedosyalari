/**
 * Simple in-memory rate limiter.
 * For production with multiple instances, replace with Redis (e.g. Upstash Ratelimit).
 */

interface RateLimitEntry {
    count: number
    resetTime: number
}

const store = new Map<string, RateLimitEntry>()

// Clean up expired entries every 5 minutes
setInterval(() => {
    const now = Date.now()
    for (const [key, entry] of store) {
        if (now > entry.resetTime) {
            store.delete(key)
        }
    }
}, 5 * 60 * 1000)

interface RateLimitConfig {
    /** Maximum number of requests allowed in the window */
    maxRequests: number
    /** Time window in seconds */
    windowSeconds: number
}

/**
 * Check if a request should be rate limited.
 * @returns { success: boolean, remaining: number, resetIn: number }
 */
export function rateLimit(
    identifier: string,
    config: RateLimitConfig
): { success: boolean; remaining: number; resetIn: number } {
    const now = Date.now()
    const key = identifier
    const entry = store.get(key)

    if (!entry || now > entry.resetTime) {
        // New window
        store.set(key, {
            count: 1,
            resetTime: now + config.windowSeconds * 1000,
        })
        return {
            success: true,
            remaining: config.maxRequests - 1,
            resetIn: config.windowSeconds,
        }
    }

    if (entry.count >= config.maxRequests) {
        return {
            success: false,
            remaining: 0,
            resetIn: Math.ceil((entry.resetTime - now) / 1000),
        }
    }

    entry.count++
    return {
        success: true,
        remaining: config.maxRequests - entry.count,
        resetIn: Math.ceil((entry.resetTime - now) / 1000),
    }
}

/**
 * Get client IP from request headers (works with proxies/Vercel).
 */
export function getClientIp(headers: Headers): string {
    return (
        headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        headers.get("x-real-ip") ||
        "unknown"
    )
}
