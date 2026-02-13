import { prisma } from "@/lib/db";
import Link from 'next/link';

export default async function AdminCarsPage() {
    const cars = await prisma.car.findMany({
        orderBy: { updatedAt: 'desc' },
        include: { issues: true }
    });

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-stone-900 dark:text-white">Araç Listesi</h1>
                <Link
                    href="/admin/araclar/yeni"
                    className="px-4 py-2 bg-stone-900 dark:bg-stone-800 text-white rounded-lg text-sm font-medium hover:bg-stone-700 transition-colors"
                >
                    Yeni Araç Ekle
                </Link>
            </div>

            <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-stone-50 dark:bg-stone-800/50">
                        <tr>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Marka/Model</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Varyant</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Yıl</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Güvenilirlik</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Sorun Sayısı</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">İşlem</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                        {cars.map((car) => (
                            <tr key={car.slug} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                                <td className="px-6 py-4 text-stone-900 dark:text-white font-medium">
                                    {car.brand} <span className="text-stone-500 font-normal">{car.model}</span>
                                </td>
                                <td className="px-6 py-4 text-stone-600 dark:text-stone-400">{car.variant}</td>
                                <td className="px-6 py-4 text-stone-600 dark:text-stone-400">{car.years}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${car.reliabilityScore >= 80 ? 'bg-green-100 text-green-700 dark:bg-green-900/30' :
                                        car.reliabilityScore >= 60 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30' :
                                            'bg-red-100 text-red-700 dark:bg-red-900/30'
                                        }`}>
                                        {car.reliabilityScore}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-stone-600 dark:text-stone-400">{car.issues.length}</td>
                                <td className="px-6 py-4 flex gap-3">
                                    <Link href={`/admin/araclar/${car.slug}`} className="text-blue-600 hover:text-blue-700 font-medium text-xs">Düzenle</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
