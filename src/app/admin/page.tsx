import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";

async function getAdminStats() {
    const [
        totalUsers,
        totalExperiences,
        totalComments,
        totalBlogPosts,
        recentUsers,
        recentExperiences,
        recentComments,
    ] = await Promise.all([
        prisma.user.count(),
        prisma.experience.count(),
        prisma.comment.count(),
        prisma.blogPost.count(),
        prisma.user.findMany({
            take: 10,
            orderBy: { id: 'desc' },
            select: { id: true, name: true, email: true, role: true, carBrand: true, image: true }
        }),
        prisma.experience.findMany({
            take: 10,
            orderBy: { createdAt: 'desc' },
            include: { user: { select: { name: true } } }
        }),
        prisma.comment.findMany({
            take: 10,
            orderBy: { createdAt: 'desc' },
            include: { user: { select: { name: true } } }
        }),
    ]);

    return {
        totalUsers,
        totalExperiences,
        totalComments,
        totalBlogPosts,
        recentUsers,
        recentExperiences,
        recentComments,
    };
}

export default async function AdminPage() {
    const session = await auth();

    if (!session?.user?.id) {
        redirect('/giris');
    }

    // Check if user is admin
    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { role: true }
    });

    if (user?.role !== 'ADMIN' && user?.role !== 'OWNER') {
        notFound();
    }

    const stats = await getAdminStats();

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-900 to-orange-900 border-b border-red-800">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold flex items-center gap-3">
                                🛡️ Admin Paneli
                            </h1>
                            <p className="text-red-200 mt-1">Site yönetimi ve moderasyon</p>
                        </div>
                        <Link
                            href="/"
                            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
                        >
                            ← Siteye Dön
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6">
                        <div className="text-4xl font-bold">{stats.totalUsers}</div>
                        <div className="text-blue-200">Toplam Kullanıcı</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-6">
                        <div className="text-4xl font-bold">{stats.totalExperiences}</div>
                        <div className="text-green-200">Deneyim</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6">
                        <div className="text-4xl font-bold">{stats.totalComments}</div>
                        <div className="text-purple-200">Yorum</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-6">
                        <div className="text-4xl font-bold">{stats.totalBlogPosts}</div>
                        <div className="text-orange-200">Blog Yazısı</div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <Link
                        href="/admin/kullanicilar"
                        className="bg-stone-900 border border-stone-800 rounded-xl p-6 hover:border-blue-500 transition-colors group"
                    >
                        <div className="text-2xl mb-2">👥</div>
                        <div className="font-bold text-lg group-hover:text-blue-400">Kullanıcı Yönetimi</div>
                        <div className="text-gray-500 text-sm">Rol atama, ban, silme</div>
                    </Link>
                    <Link
                        href="/admin/deneyimler"
                        className="bg-stone-900 border border-stone-800 rounded-xl p-6 hover:border-green-500 transition-colors group"
                    >
                        <div className="text-2xl mb-2">📝</div>
                        <div className="font-bold text-lg group-hover:text-green-400">Deneyim Moderasyonu</div>
                        <div className="text-gray-500 text-sm">Onaylama, silme, düzenleme</div>
                    </Link>
                    <Link
                        href="/admin/yorumlar"
                        className="bg-stone-900 border border-stone-800 rounded-xl p-6 hover:border-purple-500 transition-colors group"
                    >
                        <div className="text-2xl mb-2">💬</div>
                        <div className="font-bold text-lg group-hover:text-purple-400">Yorum Moderasyonu</div>
                        <div className="text-gray-500 text-sm">Spam temizleme, silme</div>
                    </Link>
                </div>

                {/* Recent Activity */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Recent Users */}
                    <div className="bg-stone-900 border border-stone-800 rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            👥 Son Kayıt Olan Kullanıcılar
                        </h3>
                        <div className="space-y-3">
                            {stats.recentUsers.map((user: any) => (
                                <div key={user.id} className="flex items-center justify-between p-3 bg-stone-800/50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={user.image || `https://ui-avatars.com/api/?name=${user.name}`}
                                            alt={user.name || 'User'}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div>
                                            <div className="font-medium">{user.name || 'İsimsiz'}</div>
                                            <div className="text-sm text-gray-500">{user.email}</div>
                                        </div>
                                    </div>
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${user.role === 'OWNER' ? 'bg-red-500/20 text-red-400' :
                                        user.role === 'ADMIN' ? 'bg-orange-500/20 text-orange-400' :
                                            'bg-stone-700 text-gray-400'
                                        }`}>
                                        {user.role}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Experiences */}
                    <div className="bg-stone-900 border border-stone-800 rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            📝 Son Eklenen Deneyimler
                        </h3>
                        <div className="space-y-3">
                            {stats.recentExperiences.map((exp: any) => (
                                <div key={exp.id} className="p-3 bg-stone-800/50 rounded-lg">
                                    <div className="font-medium truncate">{exp.title}</div>
                                    <div className="flex items-center justify-between mt-1">
                                        <span className="text-sm text-gray-500">
                                            {exp.carBrand} {exp.carModel}
                                        </span>
                                        <span className="text-sm text-orange-400">
                                            {exp.user.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Comments */}
                <div className="mt-6 bg-stone-900 border border-stone-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        💬 Son Yorumlar
                    </h3>
                    <div className="space-y-3">
                        {stats.recentComments.map((comment: any) => (
                            <div key={comment.id} className="flex items-start justify-between p-3 bg-stone-800/50 rounded-lg">
                                <div className="flex-1">
                                    <div className="text-sm text-gray-300 line-clamp-2">{comment.text}</div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        {comment.user.name} • {comment.carSlug}
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500 ml-4">
                                    {new Date(comment.createdAt).toLocaleDateString('tr-TR')}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
