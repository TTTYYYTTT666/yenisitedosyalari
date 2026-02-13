import { prisma } from "@/lib/db";

export default async function AdminLogsPage() {
    const logs = await prisma.systemLog.findMany({
        orderBy: { createdAt: 'desc' },
        take: 100,
        include: { user: true }
    });

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 text-stone-900 dark:text-white">Sistem Kayıtları (Logs)</h1>

            <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-stone-50 dark:bg-stone-800/50">
                        <tr>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Tarih</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Kullanıcı</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">İşlem</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Detaylar</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                        {logs.map((log) => (
                            <tr key={log.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                                <td className="px-6 py-4 text-stone-500 dark:text-stone-500 whitespace-nowrap">
                                    {new Date(log.createdAt).toLocaleString('tr-TR')}
                                </td>
                                <td className="px-6 py-4 text-stone-900 dark:text-white font-medium">
                                    {log.user ? (
                                        <div className="flex items-center gap-2">
                                            {log.user.image && (
                                                <img src={log.user.image} alt="" className="w-5 h-5 rounded-full" />
                                            )}
                                            <span>{log.user.name || log.user.email}</span>
                                        </div>
                                    ) : (
                                        <span className="text-stone-400 italic">Sistem</span>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${log.action.includes('error') || log.action.includes('FAIL') ? 'bg-red-100 text-red-700 dark:bg-red-900/30' :
                                            log.action.includes('warn') ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30' :
                                                'bg-blue-100 text-blue-700 dark:bg-blue-900/30'
                                        }`}>
                                        {log.action}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-stone-600 dark:text-stone-400 font-mono text-xs">
                                    {log.details}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
