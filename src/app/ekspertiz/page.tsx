'use client';

import { useState } from 'react';
import { cars, brands } from '@/data/cars';
import { Car } from '@/types';
import BrandLogo from '@/components/BrandLogo';

interface ChecklistItem {
    id: string;
    category: string;
    title: string;
    description: string;
    checked: boolean;
}

const baseChecklist: Omit<ChecklistItem, 'checked'>[] = [
    // Dış Görünüm
    { id: 'ext-1', category: 'Dış Görünüm', title: 'Boya Kalınlığı Ölçümü', description: 'Tüm panellerde boya kalınlığı ölçümü yaptırın' },
    { id: 'ext-2', category: 'Dış Görünüm', title: 'Panel Aralıkları', description: 'Kapı, kaput ve bagaj aralıklarının simetrik olup olmadığını kontrol edin' },
    { id: 'ext-3', category: 'Dış Görünüm', title: 'Cam ve Aynalar', description: 'Orijinal cam ve ayna durumunu kontrol edin' },
    { id: 'ext-4', category: 'Dış Görünüm', title: 'Lastik Durumu', description: 'Lastik markası, üretim tarihi ve diş derinliğini kontrol edin' },

    // Motor ve Mekanik
    { id: 'mech-1', category: 'Motor', title: 'Motor Çalışma Sesi', description: 'Soğuk ve sıcak çalışmada anormal ses var mı dinleyin' },
    { id: 'mech-2', category: 'Motor', title: 'Yağ Seviyesi ve Rengi', description: 'Yağ çubuğundan seviye ve renk kontrolü yapın' },
    { id: 'mech-3', category: 'Motor', title: 'Antifriz Durumu', description: 'Genleşme kabı seviyesi ve antifriz rengini kontrol edin' },
    { id: 'mech-4', category: 'Motor', title: 'Kayış ve Hortumlar', description: 'Triger kayışı, v kayışı ve soğutma hortumlarını inceleyin' },
    { id: 'mech-5', category: 'Motor', title: 'Egzoz Dumanı', description: 'Egzozdan mavi, beyaz veya siyah duman var mı kontrol edin' },

    // Şanzıman
    { id: 'trans-1', category: 'Şanzıman', title: 'Vites Geçişleri', description: 'Tüm viteslerde düzgün geçiş yapıyor mu test edin' },
    { id: 'trans-2', category: 'Şanzıman', title: 'Debriyaj (Manuel)', description: 'Debriyaj kavrama noktası ve ses kontrolü' },
    { id: 'trans-3', category: 'Şanzıman', title: 'Otomatik Şanzıman', description: 'D, R, P geçişlerinde sarsıntı var mı kontrol edin' },

    // Süspansiyon
    { id: 'susp-1', category: 'Süspansiyon', title: 'Amortisör Testi', description: 'Aracı bastırıp bırakarak amortisör tepkisini test edin' },
    { id: 'susp-2', category: 'Süspansiyon', title: 'Direksiyon Boşluğu', description: 'Direksiyonda boşluk veya ses var mı kontrol edin' },
    { id: 'susp-3', category: 'Süspansiyon', title: 'Kasis Geçişi', description: 'Kasis ve çukurlardan geçerken ses dinleyin' },

    // Elektrik/Elektronik
    { id: 'elec-1', category: 'Elektronik', title: 'Gösterge Paneli', description: 'Tüm uyarı lambaları düzgün yanıp sönüyor mu' },
    { id: 'elec-2', category: 'Elektronik', title: 'Klima Performansı', description: 'Klima soğutma ve ısıtma performansını test edin' },
    { id: 'elec-3', category: 'Elektronik', title: 'Elektrikli Camlar', description: 'Tüm cam motorlarını test edin' },
    { id: 'elec-4', category: 'Elektronik', title: 'Multimedya Sistemi', description: 'Ekran, Bluetooth ve ses sistemini kontrol edin' },

    // Evraklar
    { id: 'docs-1', category: 'Evraklar', title: 'Ruhsat Kontrolü', description: 'Motor ve şasi numarası eşleşmesini kontrol edin' },
    { id: 'docs-2', category: 'Evraklar', title: 'Servis Geçmişi', description: 'Yetkili servis bakım kayıtlarını isteyin' },
    { id: 'docs-3', category: 'Evraklar', title: 'Hasar Kaydı', description: 'Tramer kaydını sorgulayın' },
    { id: 'docs-4', category: 'Evraklar', title: 'Muayene Durumu', description: 'Araç muayene tarihini kontrol edin' },
];

export default function EkspertizPage() {
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [checklist, setChecklist] = useState<ChecklistItem[]>(
        baseChecklist.map((item: any) => ({ ...item, checked: false }))
    );

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
        // Add car-specific checks
        const carSpecificChecks: ChecklistItem[] = car.buyingTips.map((tip, i) => ({
            id: `car-${i}`,
            category: '⚠️ Araç Özel',
            title: tip,
            description: `${car.brand} ${car.model} için kritik kontrol`,
            checked: false
        }));
        setChecklist([...baseChecklist.map((item: any) => ({ ...item, checked: false })), ...carSpecificChecks]);
    };

    const toggleCheck = (id: string) => {
        setChecklist(prev => prev.map((item: any) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        ));
    };

    const categories = [...new Set(checklist.map((item: any) => item.category))];
    const checkedCount = checklist.filter(item => item.checked).length;
    const progress = Math.round((checkedCount / checklist.length) * 100);

    return (
        <div className="min-h-screen bg-[#0c0a09] text-white">
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        ✅ Ekspertiz <span className="text-orange-400">Checklist</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        İkinci el araç alırken kontrol etmeniz gereken her şey
                    </p>
                </div>

                {/* Car Selection */}
                <div className="bg-stone-900 rounded-2xl p-6 mb-8 border border-stone-800">
                    <h2 className="text-lg font-semibold mb-4">🚗 Araç Seçin (Özel kontroller için)</h2>
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
                    {selectedCar && (
                        <div className="mt-4 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl flex items-center gap-4">
                            <div className="w-12 h-12">
                                <BrandLogo brand={selectedCar.brand} />
                            </div>
                            <div>
                                <div className="font-bold">{selectedCar.brand} {selectedCar.model} {selectedCar.variant}</div>
                                <div className="text-sm text-orange-400">Araç özel kontrolleri eklendi!</div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Progress Bar */}
                <div className="bg-stone-900 rounded-2xl p-6 mb-8 border border-stone-800">
                    <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold">İlerleme</span>
                        <span className="text-orange-400 font-bold">{checkedCount}/{checklist.length}</span>
                    </div>
                    <div className="h-4 bg-stone-700 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-orange-500 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="text-center mt-2 text-gray-400">%{progress} tamamlandı</div>
                </div>

                {/* Checklist */}
                <div className="space-y-6">
                    {categories.map((category: any) => (
                        <div key={category} className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800">
                            <div className="p-4 bg-stone-800 font-bold">{category}</div>
                            <div className="divide-y divide-stone-800">
                                {checklist.filter((item: any) => item.category === category).map((item: any) => (
                                    <button
                                        key={item.id}
                                        onClick={() => toggleCheck(item.id)}
                                        className={`w-full p-4 flex items-start gap-4 text-left transition-colors ${item.checked ? 'bg-orange-500/10' : 'hover:bg-stone-800/50'
                                            }`}
                                    >
                                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${item.checked
                                            ? 'bg-orange-500 border-orange-500'
                                            : 'border-stone-600'
                                            }`}>
                                            {item.checked && <span className="text-white text-sm">✓</span>}
                                        </div>
                                        <div>
                                            <div className={`font-medium ${item.checked ? 'line-through text-gray-500' : ''}`}>
                                                {item.title}
                                            </div>
                                            <div className="text-sm text-gray-500">{item.description}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Print Button */}
                <div className="mt-8 text-center">
                    <button
                        onClick={() => window.print()}
                        className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors"
                    >
                        🖨️ Listeyi Yazdır
                    </button>
                </div>
            </div>
        </div>
    );
}
