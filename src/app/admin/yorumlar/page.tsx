
import { prisma } from "@/lib/db";

export default async function AdminCommentsPage() {
    const comments = await prisma.comment.findMany({
        include: { user: true },
        orderBy: { createdAt: 'desc' },
        take: 50
    });

    return (
        <div>
            <h1 className="text-2xl font-bold text-stone-900 dark:text-white mb-6">Yorumlar</h1>
            <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-stone-50 dark:bg-stone-800/50">
                        <tr>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Kullanıcı</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Araç Slug</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400 w-1/2">Yorum</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Tarih</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">İşlem</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                        {comments.map((comment) => (
                            <tr key={comment.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                                <td className="px-6 py-4 text-stone-900 dark:text-white font-medium">{comment.user.name}</td>
                                <td className="px-6 py-4 text-stone-500 dark:text-stone-400 text-xs font-mono">{comment.carSlug}</td>
                                <td className="px-6 py-4 text-stone-600 dark:text-stone-300">{comment.text}</td>
                                <td className="px-6 py-4 text-stone-500 dark:text-stone-500">
                                    {new Date(comment.createdAt).toLocaleDateString('tr-TR')}
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-red-600 hover:text-red-700 font-medium text-xs">Sil</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
