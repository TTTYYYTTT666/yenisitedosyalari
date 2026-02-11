'use client';

import { useState } from 'react';
import { cars, brands } from '@/data/cars';
import { Car } from '@/types';
import BrandLogo from '@/components/BrandLogo';

interface MaintenanceCost {
    item: string;
    interval: string;
    cost: string;
    category: string;
}

const getMaintenanceCosts = (car: Car | null, km: number): MaintenanceCost[] => {
    if (!car) return [];

    const isPremium = ['BMW', 'Mercedes-Benz', 'Audi', 'Volvo'].includes(car.brand);
    const isDiesel = car.variant.toLowerCase().includes('tdi') ||
        car.variant.toLowerCase().includes('dci') ||
        car.variant.toLowerCase().includes('bluehdi') ||
        car.variant.toLowerCase().includes('multijet');

    const multiplier = isPremium ? 2.5 : 1;

    const baseCosts: MaintenanceCost[] = [
        { item: 'Motor Yağı + Filtre', interval: 'Her 10.000 km', cost: `${Math.round(1500 * multiplier)} TL`, category: 'Periyodik' },
        { item: 'Hava Filtresi', interval: 'Her 20.000 km', cost: `${Math.round(400 * multiplier)} TL`, category: 'Periyodik' },
        { item: 'Polen Filtresi', interval: 'Her 15.000 km', cost: `${Math.round(350 * multiplier)} TL`, category: 'Periyodik' },
        { item: 'Fren Balataları (Ön)', interval: 'Her 30.000 km', cost: `${Math.round(1200 * multiplier)} TL`, category: 'Fren' },
        { item: 'Fren Balataları (Arka)', interval: 'Her 50.000 km', cost: `${Math.round(1000 * multiplier)} TL`, category: 'Fren' },
        { item: 'Fren Diskleri (Ön)', interval: 'Her 60.000 km', cost: `${Math.round(2500 * multiplier)} TL`, category: 'Fren' },
    ];

    if (isDiesel) {
        baseCosts.push({ item: 'Yakıt Filtresi', interval: 'Her 30.000 km', cost: `${Math.round(800 * multiplier)} TL`, category: 'Periyodik' });
        baseCosts.push({ item: 'DPF Temizliği', interval: 'Her 100.000 km', cost: `${Math.round(3000 * multiplier)} TL`, category: 'Özel' });
    }

    // Timing belt/chain based on km
    if (km >= 80000) {
        baseCosts.push({
            item: 'Triger Seti (Kayış/Zincir)',
            interval: '100.000 km\'de',
            cost: `${Math.round(5000 * multiplier)} TL`,
            category: 'Kritik'
        });
    }

    if (km >= 60000) {
        baseCosts.push({ item: 'Debriyaj Seti', interval: '80.000 km\'de', cost: `${Math.round(4000 * multiplier)} TL`, category: 'Kritik' });
    }

    baseCosts.push({ item: 'Akü', interval: 'Her 4-5 yıl', cost: `${Math.round(2500 * multiplier)} TL`, category: 'Elektrik' });
    baseCosts.push({ item: 'Lastik Seti (4)', interval: 'Her 40.000 km', cost: `${Math.round(8000 * multiplier)} TL`, category: 'Lastik' });

    return baseCosts;
};

export default function BakimHesaplaPage() {
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentKm, setCurrentKm] = useState(50000);
    const [yearlyKm, setYearlyKm] = useState(15000);

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
    };

    const maintenanceCosts = getMaintenanceCosts(selectedCar, currentKm);
    const categories = [...new Set(maintenanceCosts.map((c: any) => c.category))];

    // Calculate yearly estimate
    const calculateYearlyCost = () => {
        if (!selectedCar) return 0;
        const isPremium = ['BMW', 'Mercedes-Benz', 'Audi', 'Volvo'].includes(selectedCar.brand);
        const multiplier = isPremium ? 2.5 : 1;

        // Basic yearly maintenance (oil change + filters)
        const oilChanges = Math.ceil(yearlyKm / 10000);
        const baseCost = oilChanges * 1500 * multiplier;

        // Additional items based on yearly km
        const brakeCost = (yearlyKm / 30000) * 1200 * multiplier;

        return Math.round(baseCost + brakeCost);
    };

    return (
        <div className="min-h-screen bg-[#0c0a09] text-white">
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        🔧 Bakım Maliyet <span className="text-orange-400">Hesaplayıcı</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Aracınızın yıllık tahmini bakım maliyetini hesaplayın
                    </p>
                </div>

                {/* Car Selection */}
                <div className="bg-stone-900 rounded-2xl p-6 mb-8 border border-stone-800">
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

                {/* KM Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800">
                        <label className="block text-sm text-gray-400 mb-2">Mevcut Kilometre</label>
                        <input
                            type="number"
                            value={currentKm}
                            onChange={(e) => setCurrentKm(Number(e.target.value))}
                            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-xl font-bold focus:border-orange-500 focus:outline-none"
                        />
                        <input
                            type="range"
                            min="0"
                            max="300000"
                            step="5000"
                            value={currentKm}
                            onChange={(e) => setCurrentKm(Number(e.target.value))}
                            className="w-full mt-4 accent-orange-500"
                        />
                    </div>
                    <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800">
                        <label className="block text-sm text-gray-400 mb-2">Yıllık Tahmini Km</label>
                        <input
                            type="number"
                            value={yearlyKm}
                            onChange={(e) => setYearlyKm(Number(e.target.value))}
                            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white text-xl font-bold focus:border-orange-500 focus:outline-none"
                        />
                        <input
                            type="range"
                            min="5000"
                            max="50000"
                            step="1000"
                            value={yearlyKm}
                            onChange={(e) => setYearlyKm(Number(e.target.value))}
                            className="w-full mt-4 accent-orange-500"
                        />
                    </div>
                </div>

                {selectedCar && (
                    <>
                        {/* Yearly Estimate */}
                        <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl p-8 mb-8 border border-orange-500/30 text-center">
                            <div className="text-gray-400 mb-2">Tahmini Yıllık Bakım Maliyeti</div>
                            <div className="text-5xl font-bold text-orange-400">
                                {calculateYearlyCost().toLocaleString('tr-TR')} TL
                            </div>
                            <div className="text-gray-500 mt-2">
                                {selectedCar.brand} {selectedCar.model} • {yearlyKm.toLocaleString()} km/yıl
                            </div>
                        </div>

                        {/* Cost Breakdown */}
                        <div className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800">
                            <div className="p-6 border-b border-stone-800">
                                <h2 className="text-xl font-bold">📋 Bakım Kalemleri</h2>
                            </div>
                            {categories.map((category: any) => (
                                <div key={category}>
                                    <div className="px-6 py-3 bg-stone-800 text-sm font-semibold text-gray-400">
                                        {category}
                                    </div>
                                    <div className="divide-y divide-stone-800">
                                        {maintenanceCosts.filter(c => c.category === category).map((item, i) => (
                                            <div key={i} className="px-6 py-4 flex justify-between items-center">
                                                <div>
                                                    <div className="font-medium">{item.item}</div>
                                                    <div className="text-sm text-gray-500">{item.interval}</div>
                                                </div>
                                                <div className="text-orange-400 font-bold">{item.cost}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-400 text-sm">
                            ⚠️ Bu hesaplama tahmini değerlerdir. Gerçek maliyetler servis, şehir ve işçilik ücretlerine göre değişebilir.
                        </div>
                    </>
                )}

                {!selectedCar && (
                    <div className="text-center text-gray-500 py-12">
                        <span className="text-6xl">🔧</span>
                        <p className="mt-4">Bakım maliyetlerini görmek için bir araç seçin</p>
                    </div>
                )}
            </div>
        </div>
    );
}
