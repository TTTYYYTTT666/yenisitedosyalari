'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Car } from '@/types'; // Import generic type if needed, but we used raw Prisma type in server comp.
// We'll define a simpler type for state since we parse JSON arrays manually in the component

interface CarEditorProps {
    car: any; // Using any for simplicity as it comes from Prisma with JSON strings
}

export default function CarEditor({ car }: CarEditorProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Parse initial JSON fields
    const initialPros = car.pros ? JSON.parse(car.pros) : [];
    const initialCons = car.cons ? JSON.parse(car.cons) : [];
    const initialTips = car.buyingTips ? JSON.parse(car.buyingTips) : [];

    const [formData, setFormData] = useState({
        brand: car.brand,
        model: car.model,
        variant: car.variant,
        years: car.years,
        generation: car.generation || '',
        price: car.price || '',
        reliabilityScore: car.reliabilityScore,
        expertNote: car.expertNote || '',
    });

    // List states
    const [pros, setPros] = useState<string[]>(initialPros);
    const [cons, setCons] = useState<string[]>(initialCons);
    const [tips, setTips] = useState<string[]>(initialTips);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Helper for array fields
    const addArrayItem = (setter: any, current: string[]) => {
        const item = prompt('Yeni madde:');
        if (item) setter([...current, item]);
    };

    const removeArrayItem = (setter: any, current: string[], index: number) => {
        setter(current.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`/api/admin/cars/${car.slug}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    pros: pros,
                    cons: cons,
                    buyingTips: tips
                })
            });

            if (res.ok) {
                alert('Güncellendi!');
                router.refresh();
            } else {
                alert('Hata oluştu');
            }
        } catch (error) {
            console.error(error);
            alert('Hata oluştu');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm('Bu aracı silmek istediğinize emin misiniz?')) return;

        try {
            const res = await fetch(`/api/admin/cars/${car.slug}`, {
                method: 'DELETE'
            });

            if (res.ok) {
                router.push('/admin/araclar');
                router.refresh();
            } else {
                alert('Silinemedi');
            }
        } catch (error) {
            console.error(error);
            alert('Hata oluştu');
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-stone-900 dark:text-white">
                    Düzenle: {car.brand} {car.model}
                </h1>
                <div className="flex gap-2">
                    <button
                        onClick={() => window.open(`/arac/${car.slug}`, '_blank')}
                        className="px-4 py-2 bg-stone-100 text-stone-600 rounded hover:bg-stone-200 transition-colors"
                    >
                        Görüntüle
                    </button>
                    <button
                        onClick={handleDelete}
                        className="px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors"
                    >
                        Sil
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Info */}
                <div className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-800">
                    <h2 className="text-lg font-bold mb-4">Temel Bilgiler</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Marka</label>
                            <input name="brand" value={formData.brand} onChange={handleChange} className="w-full p-2 border rounded dark:bg-stone-800 dark:border-stone-700" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Model</label>
                            <input name="model" value={formData.model} onChange={handleChange} className="w-full p-2 border rounded dark:bg-stone-800 dark:border-stone-700" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Varyant</label>
                            <input name="variant" value={formData.variant} onChange={handleChange} className="w-full p-2 border rounded dark:bg-stone-800 dark:border-stone-700" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Yıllar</label>
                            <input name="years" value={formData.years} onChange={handleChange} className="w-full p-2 border rounded dark:bg-stone-800 dark:border-stone-700" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Jenerasyon</label>
                            <input name="generation" value={formData.generation} onChange={handleChange} className="w-full p-2 border rounded dark:bg-stone-800 dark:border-stone-700" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Fiyat (Tahmini)</label>
                            <input name="price" type="number" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded dark:bg-stone-800 dark:border-stone-700" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Güvenilirlik Puanı (0-100)</label>
                            <input name="reliabilityScore" type="number" max="100" value={formData.reliabilityScore} onChange={handleChange} className="w-full p-2 border rounded dark:bg-stone-800 dark:border-stone-700" />
                        </div>
                    </div>
                </div>

                {/* Expert Note */}
                <div className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-800">
                    <h2 className="text-lg font-bold mb-4">Uzman Notu</h2>
                    <textarea
                        name="expertNote"
                        value={formData.expertNote}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-2 border rounded dark:bg-stone-800 dark:border-stone-700"
                    />
                </div>

                {/* Lists */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Pros */}
                    <div className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-800">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold text-green-600">Artılar</h2>
                            <button type="button" onClick={() => addArrayItem(setPros, pros)} className="text-xl font-bold text-green-600">+</button>
                        </div>
                        <ul className="space-y-2">
                            {pros.map((item, i) => (
                                <li key={i} className="flex justify-between items-start text-sm">
                                    <span>{item}</span>
                                    <button type="button" onClick={() => removeArrayItem(setPros, pros, i)} className="text-red-500 ml-2">x</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cons */}
                    <div className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-800">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold text-red-600">Eksiler</h2>
                            <button type="button" onClick={() => addArrayItem(setCons, cons)} className="text-xl font-bold text-red-600">+</button>
                        </div>
                        <ul className="space-y-2">
                            {cons.map((item, i) => (
                                <li key={i} className="flex justify-between items-start text-sm">
                                    <span>{item}</span>
                                    <button type="button" onClick={() => removeArrayItem(setCons, cons, i)} className="text-red-500 ml-2">x</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Buying Tips */}
                    <div className="bg-white dark:bg-stone-900 p-6 rounded-xl border border-stone-200 dark:border-stone-800">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold text-blue-600">Alım İpuçları</h2>
                            <button type="button" onClick={() => addArrayItem(setTips, tips)} className="text-xl font-bold text-blue-600">+</button>
                        </div>
                        <ul className="space-y-2">
                            {tips.map((item, i) => (
                                <li key={i} className="flex justify-between items-start text-sm">
                                    <span>{item}</span>
                                    <button type="button" onClick={() => removeArrayItem(setTips, tips, i)} className="text-red-500 ml-2">x</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-bold rounded-lg hover:opacity-90 disabled:opacity-50"
                    >
                        {loading ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet'}
                    </button>
                </div>
            </form>
        </div>
    );
}
