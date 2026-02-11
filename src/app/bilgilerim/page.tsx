'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { brands } from '@/data/cars';
import { updateProfile, getProfile } from '@/actions/auth-actions';

export default function BilgilerimPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [models, setModels] = useState<{ id: string; name: string }[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
    });
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        async function fetchProfile() {
            try {
                const profile = await getProfile();
                if (profile) {
                    setFormData({
                        name: profile.name || '',
                        phone: profile.phone || '',
                    });
                    if (profile.carBrand) {
                        setSelectedBrand(profile.carBrand);
                        const brand = brands.find(b => b.id === profile.carBrand);
                        setModels(brand?.models || []);
                        if (profile.carModel) {
                            setSelectedModel(profile.carModel);
                        }
                    }
                }
            } catch (error) {
                console.error(error);
            } finally {
                setFetching(false);
            }
        }
        fetchProfile();
    }, []);

    useEffect(() => {
        if (selectedBrand) {
            const brand = brands.find(b => b.id === selectedBrand);
            setModels(brand?.models || []);
            if (!fetching) {
                setSelectedModel('');
            }
        } else {
            setModels([]);
        }
    }, [selectedBrand, fetching]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        const data = new FormData(e.currentTarget);

        try {
            await updateProfile(data);
            setSuccess(true);
            router.refresh();
            setTimeout(() => setSuccess(false), 3000);
        } catch (error) {
            console.error(error);
            alert('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setLoading(false);
        }
    }

    const inputClass = "appearance-none rounded-lg relative block w-full px-3.5 py-2.5 border border-stone-300 dark:border-stone-700 placeholder-stone-400 text-stone-900 dark:text-stone-100 dark:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm";

    if (fetching) {
        return (
            <div className="min-h-screen bg-stone-50 dark:bg-[#0c0a09] flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-stone-50 dark:bg-[#0c0a09] py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
                    {/* Header */}
                    <div className="bg-stone-900 dark:bg-stone-950 px-6 py-5 border-b border-stone-800">
                        <h1 className="text-lg font-bold text-white">Bilgilerim</h1>
                        <p className="text-stone-400 text-sm mt-0.5">Profil bilgilerinizi güncelleyin</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        {success && (
                            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-3 flex items-center gap-2.5">
                                <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-green-700 dark:text-green-400 text-sm font-medium">Bilgileriniz başarıyla güncellendi!</span>
                            </div>
                        )}

                        {/* Ad Soyad */}
                        <div>
                            <label htmlFor="name" className="block text-xs font-medium text-stone-600 dark:text-stone-400 mb-1.5">
                                Ad Soyad
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                className={inputClass}
                                placeholder="Adınız Soyadınız"
                            />
                        </div>

                        {/* Telefon */}
                        <div>
                            <label htmlFor="phone" className="block text-xs font-medium text-stone-600 dark:text-stone-400 mb-1.5">
                                Telefon Numarası
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                className={inputClass}
                                placeholder="05XX XXX XX XX"
                            />
                        </div>

                        {/* Araç Bilgileri */}
                        <div className="pt-3 border-t border-stone-200 dark:border-stone-800">
                            <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>
                                Araç Bilgileri
                            </h2>
                            <p className="text-xs text-stone-400 mt-0.5 mb-3">
                                Size özel içerikler gösterebilmemiz için aracınızı ekleyin
                            </p>
                        </div>

                        {/* Marka */}
                        <div>
                            <label htmlFor="carBrand" className="block text-xs font-medium text-stone-600 dark:text-stone-400 mb-1.5">
                                Araç Markanız
                            </label>
                            <select
                                id="carBrand"
                                name="carBrand"
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

                        {/* Submit */}
                        <div className="pt-3">
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
                                    'Kaydet'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
