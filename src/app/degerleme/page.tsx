'use client';

import { useState } from 'react';
import { cars } from '@/data/cars';
import { Car } from '@/types';
import BrandLogo from '@/components/BrandLogo';
import AdSpace from '@/components/AdSpace';

export default function DegerlemePage() {
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [km, setKm] = useState(80000);
    const [year, setYear] = useState(2022);
    const [condition, setCondition] = useState<'excellent' | 'good' | 'fair' | 'poor'>('good');

    const getFilteredCars = (query: string) => {
        if (!query) return cars.slice(0, 10);
        const lowerQuery = query.toLowerCase();
        return cars.filter(car =>
            car.brand.toLowerCase().includes(lowerQuery) ||
            car.model.toLowerCase().includes(lowerQuery)
        ).slice(0, 10);
    };

    const handleSelectCar = (car: Car) => {
        setSelectedCar(car);
        setShowDropdown(false);
        setSearchQuery('');
        // Parse year from car.years
        const startYear = parseInt(car.years.split('-')[0]);
        setYear(Math.max(startYear, 2015));
    };

    const calculateValue = () => {
        if (!selectedCar) return { min: 0, max: 0, avg: 0 };

        // Base prices by brand segment
        // Base prices by brand segment (2026 Updated)
        const brandPrices: Record<string, number> = {
            'BMW': 3200000,
            'Mercedes-Benz': 3500000,
            'Audi': 3100000,
            'Volvo': 2800000,
            'Volkswagen': 1800000,
            'Toyota': 1600000,
            'Honda': 1550000,
            'Mazda': 1700000,
            'Hyundai': 1300000,
            'Kia': 1250000,
            'Ford': 1400000,
            'Renault': 1150000,
            'Peugeot': 1450000,
            'Citroen': 1100000,
            'Fiat': 950000,
            'Dacia': 900000,
            'Opel': 1350000,
            'Skoda': 1650000,
            'Seat': 1400000,
            'Nissan': 1500000,
            'Togg': 1900000,
            'Tesla': 2400000,
            'Chery': 1450000,
            'Cupra': 2100000,
            'Alfa Romeo': 2600000,
            'DS': 2200000,
            'Suzuki': 1200000,
            'MG': 1300000,
            'Mini': 2000000,
        };

        // PRIORITY: Use specific model price if available in database (Most accurate)
        let basePrice = selectedCar.price || brandPrices[selectedCar.brand] || 1200000;

        // If no specific price, apply model segment multipliers
        if (!selectedCar.price) {
            if (selectedCar.model.includes('5 Serisi') || selectedCar.model.includes('E Serisi') || selectedCar.model.includes('A6')) {
                basePrice *= 1.4;
            } else if (selectedCar.model.includes('7 Serisi') || selectedCar.model.includes('S Serisi')) {
                basePrice *= 2.2;
            } else if (selectedCar.model.includes('Clio') || selectedCar.model.includes('i20') || selectedCar.model.includes('Corsa') || selectedCar.model.includes('208')) {
                basePrice *= 0.7; // B segment adjustment
            } else if (selectedCar.model.includes('Bayon') || selectedCar.model.includes('Stonic') || selectedCar.model.includes('Crossland')) {
                basePrice *= 0.8; // B-SUV adjustment
            }
        }

        // Year depreciation (Adjusted for inflation - cars retain value better)
        // Instead of 12-15%, we use ~6-8% real depreciation due to inflation
        const currentYear = new Date().getFullYear();
        const age = currentYear - year;
        const yearMultiplier = Math.pow(0.92, age); // %8 depreciation per year

        // KM depreciation (Less aggressive)
        // 100k km = 15% loss, 200k km = 30% loss
        const kmMultiplier = Math.max(0.6, 1 - (km / 650000));

        // Condition multiplier
        const conditionMultipliers = {
            excellent: 1.15,
            good: 1.0,
            fair: 0.85,
            poor: 0.65
        };

        // Reliability bonus/penalty
        const reliabilityMultiplier = 0.85 + (selectedCar.reliabilityScore / 400);

        const calculatedPrice = basePrice * yearMultiplier * kmMultiplier * conditionMultipliers[condition] * reliabilityMultiplier;

        return {
            min: Math.round(calculatedPrice * 0.9),
            max: Math.round(calculatedPrice * 1.1),
            avg: Math.round(calculatedPrice)
        };
    };

    const value = calculateValue();

    const conditionLabels = {
        excellent: { label: 'Mükemmel', desc: 'Sıfır gibi, hatasız', color: 'text-green-400 border-green-500' },
        good: { label: 'İyi', desc: 'Normal yıpranma', color: 'text-orange-400 border-orange-500' },
        fair: { label: 'Orta', desc: 'Görünür yıpranma', color: 'text-yellow-400 border-yellow-500' },
        poor: { label: 'Kötü', desc: 'Ciddi yıpranma/hasar', color: 'text-red-400 border-red-500' }
    };

    return (
        <div className="min-h-screen bg-[#18181b] text-white">
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        💰 İkinci El <span className="text-orange-400">Değerleme</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Aracınızın tahmini piyasa değerini öğrenin
                    </p>
                </div>

                {/* Car Selection */}
                <div className="bg-stone-900 rounded-2xl p-6 mb-6 border border-stone-800">
                    <h2 className="text-lg font-semibold mb-4">🚗 Araç Seçin</h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Marka veya model ara..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setShowDropdown(true);
                            }}
                            onFocus={() => setShowDropdown(true)}
                            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                        />
                        {showDropdown && (
                            <div className="absolute z-10 w-full mt-2 bg-stone-800 border border-stone-700 rounded-xl max-h-60 overflow-y-auto">
                                {getFilteredCars(searchQuery).map((car) => (
                                    <button
                                        key={car.id}
                                        onClick={() => handleSelectCar(car)}
                                        className="w-full px-4 py-3 text-left hover:bg-stone-700 transition-colors flex items-center gap-3"
                                    >
                                        <div className="w-8 h-8">
                                            <BrandLogo brand={car.brand} />
                                        </div>
                                        <div>
                                            <div className="font-medium">{car.brand} {car.model}</div>
                                            <div className="text-sm text-gray-400">{car.variant}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Parameters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800">
                        <label className="block text-sm text-gray-400 mb-2">Model Yılı</label>
                        <input
                            type="number"
                            min="2005"
                            max="2024"
                            value={year}
                            onChange={(e) => setYear(Number(e.target.value))}
                            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-xl font-bold focus:border-orange-500 focus:outline-none"
                        />
                        <input
                            type="range"
                            min="2005"
                            max="2024"
                            value={year}
                            onChange={(e) => setYear(Number(e.target.value))}
                            className="w-full mt-4 accent-orange-500"
                        />
                    </div>
                    <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800">
                        <label className="block text-sm text-gray-400 mb-2">Kilometre</label>
                        <input
                            type="number"
                            value={km}
                            onChange={(e) => setKm(Number(e.target.value))}
                            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-xl font-bold focus:border-orange-500 focus:outline-none"
                        />
                        <input
                            type="range"
                            min="0"
                            max="300000"
                            step="5000"
                            value={km}
                            onChange={(e) => setKm(Number(e.target.value))}
                            className="w-full mt-4 accent-orange-500"
                        />
                    </div>
                </div>

                {/* Condition */}
                <div className="bg-stone-900 rounded-2xl p-6 mb-8 border border-stone-800">
                    <label className="block text-sm text-gray-400 mb-4">Araç Durumu</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {(Object.keys(conditionLabels) as Array<keyof typeof conditionLabels>).map((key) => (
                            <button
                                key={key}
                                onClick={() => setCondition(key)}
                                className={`p-4 rounded-xl border-2 transition-all ${condition === key
                                    ? conditionLabels[key].color + ' bg-white/5'
                                    : 'border-stone-700 text-gray-400 hover:border-zinc-500'
                                    }`}
                            >
                                <div className="font-bold">{conditionLabels[key].label}</div>
                                <div className="text-xs mt-1 opacity-70">{conditionLabels[key].desc}</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Result */}
                {selectedCar && (
                    <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl p-8 border border-orange-500/30">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16">
                                <BrandLogo brand={selectedCar.brand} className="w-full h-full text-xl" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{selectedCar.brand} {selectedCar.model}</div>
                                <div className="text-gray-400">{selectedCar.variant} • {year} • {km.toLocaleString()} km</div>
                            </div>
                        </div>

                        <div className="text-center py-6">
                            <div className="text-gray-400 mb-2">Tahmini Piyasa Değeri</div>
                            <div className="text-5xl font-bold text-orange-400 mb-2">
                                {value.avg.toLocaleString('tr-TR')} TL
                            </div>
                            <div className="text-gray-500">
                                {value.min.toLocaleString('tr-TR')} TL - {value.max.toLocaleString('tr-TR')} TL
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-[#0c0a09]/30 rounded-xl p-4 text-center">
                                <div className="text-sm text-gray-400">Güvenilirlik Etkisi</div>
                                <div className={`text-lg font-bold ${selectedCar.reliabilityScore >= 80 ? 'text-green-400' : 'text-yellow-400'}`}>
                                    {selectedCar.reliabilityScore >= 80 ? '📈 +%5-10' : '📉 -%5-10'}
                                </div>
                            </div>
                            <div className="bg-[#0c0a09]/30 rounded-xl p-4 text-center">
                                <div className="text-sm text-gray-400">Güvenilirlik Skoru</div>
                                <div className="text-lg font-bold text-orange-400">{selectedCar.reliabilityScore}/100</div>
                            </div>
                        </div>
                    </div>
                )}

                {!selectedCar && (
                    <div className="text-center text-gray-500 py-12">
                        <span className="text-6xl">💰</span>
                        <p className="mt-4">Değerleme için bir araç seçin</p>
                    </div>
                )}

                {selectedCar && (
                    <div className="mt-8">
                        <AdSpace type="sell" />
                    </div>
                )}

                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-400 text-sm">
                    ⚠️ Bu değerleme tahmini olup kesin fiyat değildir. Gerçek değer araç durumu, piyasa koşulları ve bölgeye göre değişir.
                </div>
            </div>
        </div>
    );
}
