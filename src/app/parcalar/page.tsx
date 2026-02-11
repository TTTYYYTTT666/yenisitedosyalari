import BrandLogo from '@/components/BrandLogo';

interface PartPrice {
    part: string;
    category: string;
}

interface BrandPrices {
    brand: string;
    segment: 'economy' | 'midrange' | 'premium';
    prices: Record<string, { original: number; aftermarket: number }>;
}

const partsList: PartPrice[] = [
    { part: 'Fren Balataları (Ön Set)', category: 'Fren' },
    { part: 'Fren Diskleri (Ön Set)', category: 'Fren' },
    { part: 'Yağ Filtresi', category: 'Filtre' },
    { part: 'Hava Filtresi', category: 'Filtre' },
    { part: 'Triger Seti', category: 'Motor' },
    { part: 'Debriyaj Seti', category: 'Şanzıman' },
    { part: 'Amortisör (Ön Tek)', category: 'Süspansiyon' },
    { part: 'Akü', category: 'Elektrik' },
];

const brandPricesData: BrandPrices[] = [
    {
        brand: 'Fiat',
        segment: 'economy',
        prices: {
            'Fren Balataları (Ön Set)': { original: 1200, aftermarket: 600 },
            'Fren Diskleri (Ön Set)': { original: 2500, aftermarket: 1200 },
            'Yağ Filtresi': { original: 250, aftermarket: 80 },
            'Hava Filtresi': { original: 400, aftermarket: 150 },
            'Triger Seti': { original: 4500, aftermarket: 2000 },
            'Debriyaj Seti': { original: 4000, aftermarket: 2500 },
            'Amortisör (Ön Tek)': { original: 2000, aftermarket: 800 },
            'Akü': { original: 2500, aftermarket: 2000 },
        }
    },
    {
        brand: 'Volkswagen',
        segment: 'midrange',
        prices: {
            'Fren Balataları (Ön Set)': { original: 2000, aftermarket: 900 },
            'Fren Diskleri (Ön Set)': { original: 4000, aftermarket: 2000 },
            'Yağ Filtresi': { original: 400, aftermarket: 120 },
            'Hava Filtresi': { original: 600, aftermarket: 200 },
            'Triger Seti': { original: 7000, aftermarket: 3500 },
            'Debriyaj Seti': { original: 8000, aftermarket: 4000 },
            'Amortisör (Ön Tek)': { original: 3500, aftermarket: 1500 },
            'Akü': { original: 3500, aftermarket: 2500 },
        }
    },
    {
        brand: 'BMW',
        segment: 'premium',
        prices: {
            'Fren Balataları (Ön Set)': { original: 4000, aftermarket: 1500 },
            'Fren Diskleri (Ön Set)': { original: 8000, aftermarket: 3500 },
            'Yağ Filtresi': { original: 600, aftermarket: 200 },
            'Hava Filtresi': { original: 800, aftermarket: 300 },
            'Triger Seti': { original: 15000, aftermarket: 6000 },
            'Debriyaj Seti': { original: 15000, aftermarket: 7000 },
            'Amortisör (Ön Tek)': { original: 6000, aftermarket: 2500 },
            'Akü': { original: 5000, aftermarket: 3500 },
        }
    },
    {
        brand: 'Mercedes-Benz',
        segment: 'premium',
        prices: {
            'Fren Balataları (Ön Set)': { original: 4500, aftermarket: 1800 },
            'Fren Diskleri (Ön Set)': { original: 9000, aftermarket: 4000 },
            'Yağ Filtresi': { original: 700, aftermarket: 250 },
            'Hava Filtresi': { original: 900, aftermarket: 350 },
            'Triger Seti': { original: 18000, aftermarket: 7000 },
            'Debriyaj Seti': { original: 18000, aftermarket: 8000 },
            'Amortisör (Ön Tek)': { original: 7000, aftermarket: 3000 },
            'Akü': { original: 6000, aftermarket: 4000 },
        }
    },
    {
        brand: 'Toyota',
        segment: 'midrange',
        prices: {
            'Fren Balataları (Ön Set)': { original: 1800, aftermarket: 800 },
            'Fren Diskleri (Ön Set)': { original: 3500, aftermarket: 1800 },
            'Yağ Filtresi': { original: 350, aftermarket: 100 },
            'Hava Filtresi': { original: 500, aftermarket: 180 },
            'Triger Seti': { original: 6000, aftermarket: 3000 },
            'Debriyaj Seti': { original: 6000, aftermarket: 3500 },
            'Amortisör (Ön Tek)': { original: 3000, aftermarket: 1200 },
            'Akü': { original: 3000, aftermarket: 2200 },
        }
    },
];

const segmentColors = {
    economy: 'text-green-400 bg-green-500/20',
    midrange: 'text-yellow-400 bg-yellow-500/20',
    premium: 'text-red-400 bg-red-500/20'
};

const segmentLabels = {
    economy: 'Ekonomik',
    midrange: 'Orta Sınıf',
    premium: 'Premium'
};

export default function ParcalarPage() {
    return (
        <div className="min-h-screen bg-[#0c0a09] text-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        🔩 Yedek Parça <span className="text-orange-400">Fiyat Karşılaştırması</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Markalara göre orijinal ve muadil parça fiyatları
                    </p>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-4 justify-center mb-8">
                    {Object.entries(segmentLabels).map(([key, label]) => (
                        <span
                            key={key}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${segmentColors[key as keyof typeof segmentColors]}`}
                        >
                            {label}
                        </span>
                    ))}
                </div>

                {/* Price Table */}
                <div className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-stone-800">
                                <tr>
                                    <th className="px-4 py-4 text-left text-gray-400 sticky left-0 bg-stone-800">Parça</th>
                                    {brandPricesData.map((brand: any) => (
                                        <th key={brand.brand} className="px-4 py-4 text-center min-w-[140px]">
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="w-10 h-10">
                                                    <BrandLogo brand={brand.brand} />
                                                </div>
                                                <span className={`text-xs px-2 py-1 rounded-full ${segmentColors[brand.segment as keyof typeof segmentColors]}`}>
                                                    {segmentLabels[brand.segment as keyof typeof segmentLabels]}
                                                </span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-800">
                                {partsList.map((part) => (
                                    <tr key={part.part} className="hover:bg-stone-800/50">
                                        <td className="px-4 py-4 sticky left-0 bg-stone-900">
                                            <div className="font-medium">{part.part}</div>
                                            <div className="text-xs text-gray-500">{part.category}</div>
                                        </td>
                                        {brandPricesData.map((brand: any) => {
                                            const prices = brand.prices[part.part];
                                            return (
                                                <td key={brand.brand} className="px-4 py-4 text-center">
                                                    <div className="text-sm">
                                                        <div className="text-gray-400 line-through">
                                                            {prices.original.toLocaleString()} TL
                                                        </div>
                                                        <div className="text-orange-400 font-bold">
                                                            {prices.aftermarket.toLocaleString()} TL
                                                        </div>
                                                        <div className="text-xs text-green-400">
                                                            %{Math.round(100 - (prices.aftermarket / prices.original * 100))} tasarruf
                                                        </div>
                                                    </div>
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-stone-900 rounded-xl p-6 border border-stone-800">
                        <div className="text-3xl mb-3">💰</div>
                        <h3 className="font-bold mb-2">Orijinal Parça</h3>
                        <p className="text-gray-400 text-sm">
                            Araç üreticisinin kendi markasıyla satılan parçalar. Garanti ve uyumluluk açısından en güvenli seçenek.
                        </p>
                    </div>
                    <div className="bg-stone-900 rounded-xl p-6 border border-stone-800">
                        <div className="text-3xl mb-3">🔧</div>
                        <h3 className="font-bold mb-2">Muadil Parça</h3>
                        <p className="text-gray-400 text-sm">
                            OEM tedarikçilerin kendi markalarıyla sattıkları parçalar. Aynı üretici, farklı kutu. Kaliteli muadiller tercih edilmeli.
                        </p>
                    </div>
                    <div className="bg-stone-900 rounded-xl p-6 border border-stone-800">
                        <div className="text-3xl mb-3">⚠️</div>
                        <h3 className="font-bold mb-2">Dikkat</h3>
                        <p className="text-gray-400 text-sm">
                            Fiyatlar tahmini olup bölge ve satıcıya göre değişebilir. Güvenlik parçalarında (fren, süspansiyon) kaliteli marka tercih edin.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
