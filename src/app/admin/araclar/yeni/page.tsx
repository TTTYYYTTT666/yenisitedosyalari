
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { brands } from '@/data/cars';

export default function AdminNewCarPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Basic fields
    const [brand, setBrand] = useState(brands[0].name);
    const [model, setModel] = useState('');
    const [variant, setVariant] = useState('');
    const [years, setYears] = useState('');
    const [slug, setSlug] = useState('');

    // Initial data only covers basic info for now. Issues etc can be added later or via API.
    // For "God Mode", we should support adding issues here or redirect to edit page after creation.
    // Simplest flow: Create Car -> Redirect to Edit Page to add issues.

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/admin/cars', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    brand,
                    model,
                    variant,
                    years,
                    slug: slug || `${brand}-${model}-${variant}`.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, ''),
                    reliabilityScore: 80, // Default
                })
            });

            if (res.ok) {
                router.push('/admin/araclar');
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

    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-stone-900 dark:text-white">Yeni Araç Ekle</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-stone-300">Marka</label>
                    <select
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                        className="w-full p-2 rounded border dark:bg-stone-800 dark:border-stone-700"
                    >
                        {brands.map(b => (
                            <option key={b.id} value={b.name}>{b.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-stone-300">Model</label>
                    <input
                        type="text"
                        required
                        value={model}
                        onChange={e => setModel(e.target.value)}
                        className="w-full p-2 rounded border dark:bg-stone-800 dark:border-stone-700"
                        placeholder="Örn: Civic"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-stone-300">Varyant</label>
                    <input
                        type="text"
                        required
                        value={variant}
                        onChange={e => setVariant(e.target.value)}
                        className="w-full p-2 rounded border dark:bg-stone-800 dark:border-stone-700"
                        placeholder="Örn: 1.6 i-VTEC"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-stone-300">Yıllar</label>
                    <input
                        type="text"
                        required
                        value={years}
                        onChange={e => setYears(e.target.value)}
                        className="w-full p-2 rounded border dark:bg-stone-800 dark:border-stone-700"
                        placeholder="Örn: 2016-2021"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-stone-300">Slug (Opsiyonel - Otomatik)</label>
                    <input
                        type="text"
                        value={slug}
                        onChange={e => setSlug(e.target.value)}
                        className="w-full p-2 rounded border dark:bg-stone-800 dark:border-stone-700"
                        placeholder="honda-civic-fc5"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-600 text-white py-2 rounded font-medium hover:bg-orange-700 disabled:opacity-50"
                >
                    {loading ? 'Ekleniyor...' : 'Kaydet'}
                </button>
            </form>
        </div>
    );
}
