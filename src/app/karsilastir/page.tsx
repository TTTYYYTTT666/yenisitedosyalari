'use client';

import { useState, useEffect } from 'react';
import { brands } from '@/data/cars';
import { Car } from '@/types';
import BrandLogo from '@/components/BrandLogo';

export default function KarsilastirPage() {
    const [selectedCars, setSelectedCars] = useState<(Car | null)[]>([null, null, null]);
    const [searchQueries, setSearchQueries] = useState<string[]>(['', '', '']);
    const [showDropdown, setShowDropdown] = useState<number | null>(null);
    const [allCars, setAllCars] = useState<Car[]>([]);

    useEffect(() => {
        fetch('/api/cars')
            .then(res => res.json())
            .then(data => {
                if (data.cars) setAllCars(data.cars);
            })
            .catch(err => console.error('Failed to load cars', err));
    }, []);

    const getFilteredCars = (query: string) => {
        if (!query) return allCars.slice(0, 10);
        const lowerQuery = query.toLowerCase();
        return allCars.filter(car =>
            car.brand.toLowerCase().includes(lowerQuery) ||
            car.model.toLowerCase().includes(lowerQuery) ||
            car.variant.toLowerCase().includes(lowerQuery)
        ).slice(0, 10);
    };

    const handleSelectCar = (index: number, car: Car) => {
        const newSelected = [...selectedCars];
        newSelected[index] = car;
        setSelectedCars(newSelected);
        setShowDropdown(null);
        const newQueries = [...searchQueries];
        newQueries[index] = '';
        setSearchQueries(newQueries);
    };

    const handleRemoveCar = (index: number) => {
        const newSelected = [...selectedCars];
        newSelected[index] = null;
        setSelectedCars(newSelected);
    };

    const getRiskColor = (score: number) => {
        if (score >= 85) return 'text-green-400';
        if (score >= 70) return 'text-yellow-400';
        return 'text-red-400';
    };

    const selectedCount = selectedCars.filter(c => c !== null).length;

    return (
        <div className="min-h-screen bg-[#0c0a09] text-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        🔍 Araç <span className="text-orange-400">Karşılaştırma</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        En fazla 3 aracı yan yana karşılaştırın
                    </p>
                </div>

                {/* Selection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[0, 1, 2].map((index) => (
                        <div key={index} className="relative">
                            {selectedCars[index] ? (
                                <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800">
                                    <button
                                        onClick={() => handleRemoveCar(index)}
                                        className="absolute top-4 right-4 w-8 h-8 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500/40 transition-colors"
                                    >
                                        ×
                                    </button>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10">
                                            <BrandLogo brand={selectedCars[index]!.brand} />
                                        </div>
                                        <div>
                                            <div className="font-semibold">{selectedCars[index]!.brand}</div>
                                            <div className="text-sm text-gray-400">{selectedCars[index]!.model} {selectedCars[index]!.variant}</div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className={`text-4xl font-bold ${getRiskColor(selectedCars[index]!.reliabilityScore)}`}>
                                            {selectedCars[index]!.reliabilityScore}
                                        </div>
                                        <div className="text-sm text-gray-500">Güvenilirlik Skoru</div>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-stone-900/50 border-2 border-dashed border-stone-700 rounded-2xl p-6">
                                    <div className="text-center mb-4">
                                        <span className="text-4xl">🚗</span>
                                        <div className="text-gray-400 mt-2">Araç #{index + 1}</div>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Marka veya model ara..."
                                            value={searchQueries[index]}
                                            onChange={(e) => {
                                                const newQueries = [...searchQueries];
                                                newQueries[index] = e.target.value;
                                                setSearchQueries(newQueries);
                                                setShowDropdown(index);
                                            }}
                                            onFocus={() => setShowDropdown(index)}
                                            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                                        />
                                        {showDropdown === index && (
                                            <div className="absolute z-10 w-full mt-2 bg-stone-800 border border-stone-700 rounded-xl max-h-60 overflow-y-auto">
                                                {getFilteredCars(searchQueries[index]).map((car) => (
                                                    <button
                                                        key={car.id}
                                                        onClick={() => handleSelectCar(index, car)}
                                                        className="w-full px-4 py-3 text-left hover:bg-stone-700 transition-colors flex items-center gap-3"
                                                    >
                                                        <div className="w-8 h-8">
                                                            <BrandLogo brand={car.brand} />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium">{car.brand} {car.model}</div>
                                                            <div className="text-sm text-gray-400">{car.variant} • {car.years}</div>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                {selectedCount >= 2 && (
                    <div className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800">
                        <div className="p-6 border-b border-stone-800">
                            <h2 className="text-xl font-bold">📊 Detaylı Karşılaştırma</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-stone-800">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-gray-400">Özellik</th>
                                        {selectedCars.filter(c => c !== null).map((car, i) => (
                                            <th key={i} className="px-6 py-4 text-center">
                                                {car!.brand} {car!.model}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-800">
                                    <tr>
                                        <td className="px-6 py-4 text-gray-400">Güvenilirlik</td>
                                        {selectedCars.filter(c => c !== null).map((car, i) => (
                                            <td key={i} className="px-6 py-4 text-center">
                                                <span className={`text-2xl font-bold ${getRiskColor(car!.reliabilityScore)}`}>
                                                    {car!.reliabilityScore}/100
                                                </span>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-400">Yıllar</td>
                                        {selectedCars.filter(c => c !== null).map((car, i) => (
                                            <td key={i} className="px-6 py-4 text-center">{car!.years}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-400">Bilinen Sorun Sayısı</td>
                                        {selectedCars.filter(c => c !== null).map((car, i) => (
                                            <td key={i} className="px-6 py-4 text-center">
                                                <span className={car!.issues.length > 3 ? 'text-red-400' : 'text-green-400'}>
                                                    {car!.issues.length} sorun
                                                </span>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-400">Artılar</td>
                                        {selectedCars.filter(c => c !== null).map((car, i) => (
                                            <td key={i} className="px-6 py-4">
                                                <ul className="text-sm text-green-400 space-y-1">
                                                    {car!.pros.slice(0, 3).map((pro, j) => (
                                                        <li key={j}>✓ {pro}</li>
                                                    ))}
                                                </ul>
                                            </td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-400">Eksiler</td>
                                        {selectedCars.filter(c => c !== null).map((car, i) => (
                                            <td key={i} className="px-6 py-4">
                                                <ul className="text-sm text-red-400 space-y-1">
                                                    {car!.cons.slice(0, 3).map((con, j) => (
                                                        <li key={j}>✗ {con}</li>
                                                    ))}
                                                </ul>
                                            </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {selectedCount < 2 && (
                    <div className="text-center text-gray-500 py-12">
                        <span className="text-6xl">📊</span>
                        <p className="mt-4">Karşılaştırma için en az 2 araç seçin</p>
                    </div>
                )}
            </div>
        </div>
    );
}
