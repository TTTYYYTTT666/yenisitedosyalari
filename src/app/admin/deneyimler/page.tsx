
import { prisma } from "@/lib/db";

export default async function AdminExperiencesPage() {
    const experiences = await prisma.experience.findMany({
        orderBy: { createdAt: 'desc' },
        take: 50
    });

    return (
        <div>
            <h1 className="text-2xl font-bold text-stone-900 dark:text-white mb-6">Kullanıcı Deneyimleri</h1>
            {experiences.length === 0 ? (
                <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-8 text-center text-stone-500">
                    Henüz deneyim girilmemiş.
                </div>
            ) : (
                <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-stone-50 dark:bg-stone-800/50">
                            <tr>
                                <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">ID</th>
                                <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Başlık</th>
                                <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Kilometre</th>
                                <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Tarih</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                            {experiences.map((exp) => (
                                <tr key={exp.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-stone-400 dark:text-stone-600 text-xs">{exp.id.slice(0, 8)}...</td>
                                    <td className="px-6 py-4 text-stone-900 dark:text-white font-medium">{exp.title}</td>
                                    <td className="px-6 py-4 text-stone-600 dark:text-stone-400">{exp.km}</td>
                                    <td className="px-6 py-4 text-stone-500 dark:text-stone-500">
                                        {new Date(exp.createdAt).toLocaleDateString('tr-TR')}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
