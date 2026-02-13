
import { prisma } from "@/lib/db";

export default async function AdminUsersPage() {
    const users = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
        take: 50
    });

    return (
        <div>
            <h1 className="text-2xl font-bold text-stone-900 dark:text-white mb-6">Kullanıcılar</h1>
            <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-stone-50 dark:bg-stone-800/50">
                        <tr>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">ID</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">İsim</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Email</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Rol</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Kayıt Tarihi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-stone-400 dark:text-stone-600 text-xs">{user.id.slice(0, 8)}...</td>
                                <td className="px-6 py-4 text-stone-900 dark:text-white font-medium">{user.name || '-'}</td>
                                <td className="px-6 py-4 text-stone-600 dark:text-stone-400">{user.email}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.role === 'ADMIN'
                                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                                            : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                        }`}>
                                        {user.role || 'USER'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-stone-500 dark:text-stone-500">
                                    {new Date(user.createdAt).toLocaleDateString('tr-TR')}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
