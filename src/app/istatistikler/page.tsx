import { cars } from '@/data/cars';

interface CategoryStats {
    category: string;
    label: string;
    count: number;
    percentage: number;
    icon: string;
}

interface RiskStats {
    level: string;
    label: string;
    count: number;
    percentage: number;
    color: string;
}

export default function IstatistiklerPage() {
    // Calculate category statistics
    const allIssues = cars.flatMap(car => car.issues);
    const totalIssues = allIssues.length;

    const categoryLabels: Record<string, { label: string; icon: string }> = {
        motor: { label: 'Motor', icon: '🔧' },
        sanziman: { label: 'Şanzıman', icon: '⚙️' },
        elektronik: { label: 'Elektronik', icon: '💡' },
        suspansiyon: { label: 'Süspansiyon', icon: '🛞' },
        govde: { label: 'Gövde/Kaporta', icon: '🚗' },
        fren: { label: 'Fren Sistemi', icon: '🛑' }
    };

    const categoryCounts = allIssues.reduce((acc, issue) => {
        acc[issue.category] = (acc[issue.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const categoryStats: CategoryStats[] = Object.entries(categoryCounts)
        .map(([category, count]) => ({
            category,
            label: categoryLabels[category]?.label || category,
            icon: categoryLabels[category]?.icon || '❓',
            count,
            percentage: Math.round((count / totalIssues) * 100)
        }))
        .sort((a, b) => b.count - a.count);

    // Calculate risk level statistics
    const riskCounts = allIssues.reduce((acc, issue) => {
        acc[issue.riskLevel] = (acc[issue.riskLevel] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const riskLabels: Record<string, { label: string; color: string }> = {
        HIGH: { label: 'Yüksek Risk', color: 'bg-red-500' },
        MEDIUM: { label: 'Orta Risk', color: 'bg-yellow-500' },
        LOW: { label: 'Düşük Risk', color: 'bg-green-500' }
    };

    const riskStats: RiskStats[] = Object.entries(riskCounts)
        .map(([level, count]) => ({
            level,
            label: riskLabels[level]?.label || level,
            color: riskLabels[level]?.color || 'bg-gray-500',
            count,
            percentage: Math.round((count / totalIssues) * 100)
        }))
        .sort((a, b) => {
            const order = ['HIGH', 'MEDIUM', 'LOW'];
            return order.indexOf(a.level) - order.indexOf(b.level);
        });

    // Top problematic cars
    const problematicCars = [...cars]
        .sort((a, b) => b.issues.length - a.issues.length)
        .slice(0, 10);

    // Most reliable cars
    const reliableCars = [...cars]
        .sort((a, b) => b.reliabilityScore - a.reliabilityScore)
        .slice(0, 10);

    return (
        <div className="min-h-screen bg-[#0c0a09] text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        📊 Arıza <span className="text-orange-400">İstatistikleri</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        {cars.length} araç modelinden {totalIssues} kayıtlı sorun analizi
                    </p>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div className="bg-stone-900 rounded-xl p-6 text-center border border-stone-800">
                        <div className="text-4xl font-bold text-orange-400">{cars.length}</div>
                        <div className="text-gray-400 mt-1">Araç Modeli</div>
                    </div>
                    <div className="bg-stone-900 rounded-xl p-6 text-center border border-stone-800">
                        <div className="text-4xl font-bold text-yellow-400">{totalIssues}</div>
                        <div className="text-gray-400 mt-1">Kayıtlı Sorun</div>
                    </div>
                    <div className="bg-stone-900 rounded-xl p-6 text-center border border-stone-800">
                        <div className="text-4xl font-bold text-red-400">{riskCounts['HIGH'] || 0}</div>
                        <div className="text-gray-400 mt-1">Yüksek Riskli</div>
                    </div>
                    <div className="bg-stone-900 rounded-xl p-6 text-center border border-stone-800">
                        <div className="text-4xl font-bold text-blue-400">
                            {Math.round(cars.reduce((sum, c) => sum + c.reliabilityScore, 0) / cars.length)}
                        </div>
                        <div className="text-gray-400 mt-1">Ort. Güvenilirlik</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Category Distribution */}
                    <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800">
                        <h2 className="text-xl font-bold mb-6">🔧 Kategori Dağılımı</h2>
                        <div className="space-y-4">
                            {categoryStats.map((stat) => (
                                <div key={stat.category}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="flex items-center gap-2">
                                            <span>{stat.icon}</span>
                                            <span>{stat.label}</span>
                                        </span>
                                        <span className="text-gray-400">{stat.count} sorun ({stat.percentage}%)</span>
                                    </div>
                                    <div className="h-3 bg-stone-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-orange-500 transition-all"
                                            style={{ width: `${stat.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Risk Distribution */}
                    <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800">
                        <h2 className="text-xl font-bold mb-6">⚠️ Risk Seviyesi Dağılımı</h2>
                        <div className="space-y-6">
                            {riskStats.map((stat) => (
                                <div key={stat.level}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-medium">{stat.label}</span>
                                        <span className="text-gray-400">{stat.count} sorun</span>
                                    </div>
                                    <div className="h-8 bg-stone-700 rounded-lg overflow-hidden relative">
                                        <div
                                            className={`h-full ${stat.color} transition-all flex items-center justify-center`}
                                            style={{ width: `${stat.percentage}%` }}
                                        >
                                            <span className="text-sm font-bold text-white">{stat.percentage}%</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Most Problematic */}
                    <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800">
                        <h2 className="text-xl font-bold mb-6">🔴 En Sorunlu 10 Araç</h2>
                        <div className="space-y-3">
                            {problematicCars.map((car, index) => (
                                <div key={car.id} className="flex items-center gap-4 p-3 bg-stone-800/50 rounded-xl">
                                    <span className="w-8 text-center font-bold text-gray-500">#{index + 1}</span>
                                    <div className="flex-grow">
                                        <div className="font-medium">{car.brand} {car.model}</div>
                                        <div className="text-sm text-gray-500">{car.variant}</div>
                                    </div>
                                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg font-bold">
                                        {car.issues.length} sorun
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Most Reliable */}
                    <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800">
                        <h2 className="text-xl font-bold mb-6">🟢 En Güvenilir 10 Araç</h2>
                        <div className="space-y-3">
                            {reliableCars.map((car, index) => (
                                <div key={car.id} className="flex items-center gap-4 p-3 bg-stone-800/50 rounded-xl">
                                    <span className="w-8 text-center font-bold text-gray-500">#{index + 1}</span>
                                    <div className="flex-grow">
                                        <div className="font-medium">{car.brand} {car.model}</div>
                                        <div className="text-sm text-gray-500">{car.variant}</div>
                                    </div>
                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg font-bold">
                                        {car.reliabilityScore}/100
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
