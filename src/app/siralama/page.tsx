import { cars } from '@/data/cars';
import BrandLogo from '@/components/BrandLogo';
import Link from 'next/link';

interface BrandRanking {
    brand: string;
    avgScore: number;
    carCount: number;
    totalIssues: number;
}

export default function SiralamaPage() {
    // Calculate brand rankings
    const brandStats = cars.reduce((acc, car) => {
        if (!acc[car.brand]) {
            acc[car.brand] = { totalScore: 0, count: 0, issues: 0 };
        }
        acc[car.brand].totalScore += car.reliabilityScore;
        acc[car.brand].count += 1;
        acc[car.brand].issues += car.issues.length;
        return acc;
    }, {} as Record<string, { totalScore: number; count: number; issues: number }>);

    const rankings: BrandRanking[] = Object.entries(brandStats)
        .map(([brand, stats]) => ({
            brand,
            avgScore: Math.round(stats.totalScore / stats.count),
            carCount: stats.count,
            totalIssues: stats.issues
        }))
        .sort((a, b) => b.avgScore - a.avgScore);

    const getRankEmoji = (rank: number) => {
        if (rank === 1) return '🥇';
        if (rank === 2) return '🥈';
        if (rank === 3) return '🥉';
        return `#${rank}`;
    };

    const getScoreColor = (score: number) => {
        if (score >= 85) return 'text-green-400 bg-green-500/20';
        if (score >= 75) return 'text-orange-400 bg-orange-500/20';
        if (score >= 65) return 'text-yellow-400 bg-yellow-500/20';
        return 'text-red-400 bg-red-500/20';
    };

    const getScoreBar = (score: number) => {
        if (score >= 85) return 'bg-green-500';
        if (score >= 75) return 'bg-orange-500';
        if (score >= 65) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    return (
        <div className="min-h-screen bg-[#0c0a09] text-white">
            <div className="max-w-5xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        🏆 Marka <span className="text-orange-400">Güvenilirlik Sıralaması</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Tüm markaların ortalama güvenilirlik skoruna göre sıralaması
                    </p>
                </div>

                {/* Top 3 Podium */}
                <div className="grid grid-cols-3 gap-4 mb-12">
                    {rankings.slice(0, 3).map((brand, index) => (
                        <div
                            key={brand.brand}
                            className={`bg-stone-900 rounded-2xl p-6 text-center border ${index === 0 ? 'border-yellow-500/50 order-2' :
                                    index === 1 ? 'border-gray-400/50 order-1' :
                                        'border-orange-600/50 order-3'
                                }`}
                        >
                            <div className="text-4xl mb-3">{getRankEmoji(index + 1)}</div>
                            <div className="w-16 h-16 mx-auto mb-3">
                                <BrandLogo brand={brand.brand} className="w-full h-full text-xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{brand.brand}</h3>
                            <div className={`text-3xl font-bold ${getScoreColor(brand.avgScore).split(' ')[0]}`}>
                                {brand.avgScore}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                                {brand.carCount} model
                            </div>
                        </div>
                    ))}
                </div>

                {/* Full Ranking Table */}
                <div className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800">
                    <div className="p-6 border-b border-stone-800">
                        <h2 className="text-xl font-bold">📋 Tam Sıralama</h2>
                    </div>
                    <div className="divide-y divide-stone-800">
                        {rankings.map((brand, index) => (
                            <div key={brand.brand} className="p-4 flex items-center gap-4 hover:bg-stone-800/50 transition-colors">
                                <div className="w-12 text-center text-2xl font-bold text-gray-500">
                                    {getRankEmoji(index + 1)}
                                </div>
                                <div className="w-12 h-12">
                                    <BrandLogo brand={brand.brand} className="w-full h-full" />
                                </div>
                                <div className="flex-grow">
                                    <div className="font-semibold text-lg">{brand.brand}</div>
                                    <div className="text-sm text-gray-500">
                                        {brand.carCount} model • {brand.totalIssues} toplam sorun kaydı
                                    </div>
                                </div>
                                <div className="w-48">
                                    <div className="h-2 bg-stone-700 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${getScoreBar(brand.avgScore)} transition-all`}
                                            style={{ width: `${brand.avgScore}%` }}
                                        />
                                    </div>
                                </div>
                                <div className={`px-4 py-2 rounded-xl font-bold ${getScoreColor(brand.avgScore)}`}>
                                    {brand.avgScore}/100
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legend */}
                <div className="mt-8 p-6 bg-stone-900 rounded-2xl border border-stone-800">
                    <h3 className="font-bold mb-4">📊 Skor Açıklaması</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4 bg-green-500 rounded"></span>
                            <span>85-100: Mükemmel</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4 bg-orange-500 rounded"></span>
                            <span>75-84: İyi</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4 bg-yellow-500 rounded"></span>
                            <span>65-74: Orta</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4 bg-red-500 rounded"></span>
                            <span>0-64: Riskli</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
