export default function Loading() {
    return (
        <div className="min-h-screen bg-stone-50 dark:bg-[#0c0a09]">
            {/* Hero Section Skeleton */}
            <section className="bg-stone-900 dark:bg-stone-950 text-white py-10 lg:py-14 border-b border-stone-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 mb-5">
                        <div className="h-4 w-16 bg-stone-800 rounded animate-pulse" />
                        <div className="h-4 w-4 bg-stone-800 rounded animate-pulse" />
                        <div className="h-4 w-20 bg-stone-800 rounded animate-pulse" />
                        <div className="h-4 w-4 bg-stone-800 rounded animate-pulse" />
                        <div className="h-4 w-32 bg-stone-800 rounded animate-pulse" />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-2">
                            <div className="h-6 w-24 bg-stone-800 rounded animate-pulse mb-4" />
                            <div className="h-10 w-3/4 bg-stone-800 rounded animate-pulse mb-3" />
                            <div className="h-6 w-1/2 bg-stone-800 rounded animate-pulse mb-2" />
                            <div className="h-5 w-32 bg-stone-800 rounded animate-pulse" />

                            <div className="flex gap-2 mt-5">
                                <div className="h-8 w-24 bg-stone-800 rounded animate-pulse" />
                                <div className="h-8 w-24 bg-stone-800 rounded animate-pulse" />
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <div className="bg-stone-800/50 rounded-xl p-5 border border-stone-700/50 w-40 h-40 flex flex-col items-center justify-center">
                                <div className="h-4 w-24 bg-stone-700 rounded animate-pulse mb-4" />
                                <div className="h-20 w-20 rounded-full border-4 border-stone-700 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Skeleton */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        {/* Expert Note Skeleton */}
                        <div className="p-5 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 h-32 animate-pulse" />

                        {/* Issues Skeleton */}
                        <div className="space-y-4">
                            <div className="h-8 w-48 bg-stone-200 dark:bg-stone-800 rounded animate-pulse" />
                            <div className="h-6 w-32 bg-stone-200 dark:bg-stone-800 rounded animate-pulse" />

                            {[1, 2, 3].map((i) => (
                                <div key={i} className="p-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 h-24 animate-pulse flex flex-col justify-center gap-2">
                                    <div className="h-5 w-1/3 bg-stone-200 dark:bg-stone-800 rounded" />
                                    <div className="h-4 w-3/4 bg-stone-200 dark:bg-stone-800 rounded" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Skeleton */}
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5 h-48 animate-pulse">
                                <div className="h-6 w-1/2 bg-stone-200 dark:bg-stone-800 rounded mb-4" />
                                <div className="space-y-2">
                                    <div className="h-4 w-full bg-stone-200 dark:bg-stone-800 rounded" />
                                    <div className="h-4 w-full bg-stone-200 dark:bg-stone-800 rounded" />
                                    <div className="h-4 w-2/3 bg-stone-200 dark:bg-stone-800 rounded" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
