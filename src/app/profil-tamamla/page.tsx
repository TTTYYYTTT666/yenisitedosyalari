'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { brands } from '@/data/cars';
import { completeProfile } from '@/actions/auth-actions';

export default function ProfilTamamlaPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [models, setModels] = useState<{ id: string; name: string }[]>([]);

    useEffect(() => {
        if (selectedBrand) {
            const brand = brands.find(b => b.id === selectedBrand);
            setModels(brand?.models || []);
            setSelectedModel('');
        } else {
            setModels([]);
        }
    }, [selectedBrand]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        try {
            await completeProfile(formData);
            router.push('/');
            router.refresh();
        } catch (error) {
            console.error(error);
            alert('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setLoading(false);
        }
    }

    const inputClass = "appearance-none rounded-lg relative block w-full px-3.5 py-2.5 border border-stone-300 dark:border-stone-700 placeholder-stone-400 text-stone-900 dark:text-stone-100 dark:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm";

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-[#0c0a09] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-sm w-full bg-white dark:bg-stone-900 p-7 rounded-xl border border-stone-200 dark:border-stone-800">
                <div className="text-center mb-5">
                    <div className="mx-auto w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                        Profilinizi Tamamlayın
                    </h2>
                    <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                        Size daha iyi hizmet verebilmemiz için birkaç bilgi daha
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* İsim */}
                    <div>
                        <label htmlFor="name" className="block text-xs font-medium text-stone-600 dark:text-stone-400 mb-1.5">
                            Ad Soyad
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className={inputClass}
                            placeholder="Adınız Soyadınız"
                        />
                    </div>

                    {/* Marka */}
                    <div>
                        <label htmlFor="carBrand" className="block text-xs font-medium text-stone-600 dark:text-stone-400 mb-1.5">
                            Araç Markanız
                        </label>
                        <select
                            id="carBrand"
                            name="carBrand"
                            required
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                            className={inputClass}
                        >
                            <option value="">Marka Seçin</option>
                            {brands.map((brand: any) => (
                                <option key={brand.id} value={brand.id}>
                                    {brand.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Model */}
                    <div>
                        <label htmlFor="carModel" className="block text-xs font-medium text-stone-600 dark:text-stone-400 mb-1.5">
                            Araç Modeliniz
                        </label>
                        <select
                            id="carModel"
                            name="carModel"
                            required
                            value={selectedModel}
                            onChange={(e) => setSelectedModel(e.target.value)}
                            disabled={!selectedBrand}
                            className={`${inputClass} disabled:opacity-40 disabled:cursor-not-allowed`}
                        >
                            <option value="">
                                {selectedBrand ? 'Model Seçin' : 'Önce marka seçin'}
                            </option>
                            {models.map((model: any) => (
                                <option key={model.id} value={model.id}>
                                    {model.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-2.5 px-4 text-sm font-semibold rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Kaydediliyor...
                            </span>
                        ) : (
                            'Devam Et'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
