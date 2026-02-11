'use client';

import { useState, useEffect, useRef } from 'react';
import { brands } from '@/data/cars';
import BrandLogo from '@/components/BrandLogo';
import { getExperiences, getExperienceStats, addExperience } from '@/actions/experience-actions';

interface Experience {
    id: string;
    carBrand: string;
    carModel: string;
    carVariant: string | null;
    rating: number;
    title: string;
    content: string;
    images: string[];
    km: string | null;
    ownershipDuration: string | null;
    createdAt: Date;
    pros: string[];
    cons: string[];
    user: {
        name: string | null;
        image: string | null;
    };
}

interface Stats {
    total: number;
    avgRating: number;
    brandCount: number;
    brands: string[];
}

// Default static experiences
const defaultExperiences: Experience[] = [
    {
        id: '1',
        carBrand: 'Honda',
        carModel: 'Civic',
        carVariant: 'FC5 1.6 i-VTEC',
        rating: 4,
        title: '3 yıldır kullanıyorum, memnunum',
        content: 'Aracı 0 olarak aldım, şu an 85.000 km\'de. Motor yağ yakmıyor, şanzıman CVT olmasına rağmen gayet akıcı.',
        images: [],
        km: '85.000',
        ownershipDuration: '3 yıl',
        createdAt: new Date(),
        pros: ['Motor güvenilirliği', 'LPG uyumu', 'İkinci el değeri'],
        cons: ['Kaporta narinliği', 'Yalıtım zayıf'],
        user: { name: 'Ahmet K.', image: null }
    },
    {
        id: '2',
        carBrand: 'Volkswagen',
        carModel: 'Passat',
        carVariant: 'B8 1.6 TDI',
        rating: 3,
        title: 'Konforlu ama maliyetli',
        content: '140.000 km\'de aldım, şu an 180.000. DSG kavrama değiştirdim, AdBlue pompası da arızalandı.',
        images: [],
        km: '180.000',
        ownershipDuration: '2 yıl',
        createdAt: new Date(),
        pros: ['Konfor', 'Sessizlik', 'Yol tutuşu'],
        cons: ['DSG maliyeti', 'AdBlue sorunları'],
        user: { name: 'Mehmet Y.', image: null }
    },
    {
        id: '3',
        carBrand: 'Toyota',
        carModel: 'Corolla',
        carVariant: '1.8 Hybrid',
        rating: 5,
        title: 'Şehir içi en mantıklısı',
        content: 'Hibrit sistem mükemmel çalışıyor. Şehir içi 4.5L altına düşüyor yakıt.',
        images: [],
        km: '60.000',
        ownershipDuration: '2.5 yıl',
        createdAt: new Date(),
        pros: ['Düşük yakıt', 'Sıfır arıza', 'Düşük bakım'],
        cons: ['Bagaj küçük', 'Sportif değil'],
        user: { name: 'Zeynep A.', image: null }
    }
];

export default function DeneyimlerPage() {
    const [experiences, setExperiences] = useState<Experience[]>(defaultExperiences);
    const [stats, setStats] = useState<Stats>({ total: 3, avgRating: 4.0, brandCount: 3, brands: [] });
    const [brandFilter, setBrandFilter] = useState('all');
    const [modelFilter, setModelFilter] = useState('all');
    const [filterModels, setFilterModels] = useState<{ id: string; name: string }[]>([]);
    const [ratingFilter, setRatingFilter] = useState(0);
    const [showBrandDropdown, setShowBrandDropdown] = useState(false);
    const [showModelDropdown, setShowModelDropdown] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const brandDropdownRef = useRef<HTMLDivElement>(null);
    const modelDropdownRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Form state
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [models, setModels] = useState<{ id: string; name: string }[]>([]);
    const [formRating, setFormRating] = useState(5);

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        if (selectedBrand) {
            const brand = brands.find(b => b.name === selectedBrand || b.id === selectedBrand);
            setModels(brand?.models || []);
            setSelectedModel('');
        }
    }, [selectedBrand]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (brandDropdownRef.current && !brandDropdownRef.current.contains(event.target as Node)) {
                setShowBrandDropdown(false);
            }
            if (modelDropdownRef.current && !modelDropdownRef.current.contains(event.target as Node)) {
                setShowModelDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    async function loadData() {
        setLoading(true);
        try {
            const [expData, statsData] = await Promise.all([
                getExperiences(),
                getExperienceStats()
            ]);
            if (expData.length > 0) {
                setExperiences(expData as Experience[]);
                setStats(statsData);
            }
        } catch (error) {
            console.error('Failed to load:', error);
        } finally {
            setLoading(false);
        }
    }

    function handleBrandChange(brand: string) {
        setBrandFilter(brand);
        setModelFilter('all');
        setShowBrandDropdown(false);
        if (brand !== 'all') {
            const selectedBrandData = brands.find(b => b.name === brand);
            setFilterModels(selectedBrandData?.models || []);
        } else {
            setFilterModels([]);
        }
        handleFilter(brand, 'all', ratingFilter);
    }

    function handleModelChange(model: string) {
        setModelFilter(model);
        setShowModelDropdown(false);
        handleFilter(brandFilter, model, ratingFilter);
    }

    async function handleFilter(brand: string, model: string, rating: number) {
        setRatingFilter(rating);

        let filtered = [...defaultExperiences];

        try {
            const dbExperiences = await getExperiences(brand, rating);
            if (dbExperiences.length > 0) {
                filtered = dbExperiences as Experience[];
            } else {
                if (brand !== 'all') {
                    filtered = filtered.filter(e => e.carBrand === brand);
                }
                if (rating > 0) {
                    filtered = filtered.filter(e => e.rating === rating);
                }
            }
        } catch {
            if (brand !== 'all') {
                filtered = filtered.filter(e => e.carBrand === brand);
            }
            if (model !== 'all') {
                filtered = filtered.filter(e => e.carModel === model);
            }
            if (rating > 0) {
                filtered = filtered.filter(e => e.rating === rating);
            }
        }

        setExperiences(filtered);
    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (!files) return;

        const remainingSlots = 4 - imagePreviews.length;
        const filesToProcess = Array.from(files).slice(0, remainingSlots);

        filesToProcess.forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviews(prev => [...prev, reader.result as string].slice(0, 4));
            };
            reader.readAsDataURL(file);
        });

        // Reset input so same file can be selected again
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    function removeImage(index: number) {
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);
            formData.set('images', JSON.stringify(imagePreviews));
            await addExperience(formData);
            setShowAddForm(false);
            setImagePreviews([]);
            setSelectedBrand('');
            setSelectedModel('');
            setFormRating(5);
            await loadData();
            alert('Deneyiminiz başarıyla eklendi!');
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Bir hata oluştu';
            alert(errorMessage);
        } finally {
            setSubmitting(false);
        }
    }

    const renderStars = (rating: number, interactive = false, onClick?: (r: number) => void) => {
        return Array(5).fill(0).map((_, i) => (
            <span
                key={i}
                className={`${i < rating ? 'text-yellow-400' : 'text-stone-600'} ${interactive ? 'cursor-pointer hover:scale-110 transition-transform text-2xl' : ''}`}
                onClick={() => interactive && onClick && onClick(i + 1)}
            >
                ★
            </span>
        ));
    };

    // Image grid component
    const ImageGrid = ({ images, onClick }: { images: string[], onClick: (img: string) => void }) => {
        if (images.length === 0) return null;

        const gridClass = images.length === 1 ? 'grid-cols-1' :
            images.length === 2 ? 'grid-cols-2' :
                images.length === 3 ? 'grid-cols-2' : 'grid-cols-2';

        return (
            <div className={`grid ${gridClass} gap-1 w-full h-64 overflow-hidden rounded-t-2xl`}>
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={`relative overflow-hidden cursor-pointer ${images.length === 3 && i === 0 ? 'row-span-2' : ''}`}
                        onClick={() => onClick(img)}
                    >
                        <img
                            src={img}
                            alt={`Araç fotoğrafı ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        );
    };

    const selectedBrandName = brandFilter === 'all' ? 'Tüm Markalar' : brandFilter;

    return (
        <div className="min-h-screen bg-[#0c0a09] text-white">
            {/* Lightbox */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 bg-[#0c0a09]/90 flex items-center justify-center p-4"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
                        onClick={() => setLightboxImage(null)}
                    >
                        ✕
                    </button>
                    <img
                        src={lightboxImage}
                        alt="Büyük fotoğraf"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <div className="max-w-5xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        💬 Kullanıcı <span className="text-orange-400">Deneyimleri</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Gerçek araç sahiplerinden gerçek hikayeler
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-stone-900 rounded-xl p-4 text-center border border-stone-800">
                        <div className="text-3xl font-bold text-orange-400">{stats.total}</div>
                        <div className="text-gray-500 text-sm">Deneyim</div>
                    </div>
                    <div className="bg-stone-900 rounded-xl p-4 text-center border border-stone-800">
                        <div className="text-3xl font-bold text-yellow-400">
                            {stats.avgRating.toFixed(1)}
                        </div>
                        <div className="text-gray-500 text-sm">Ort. Puan</div>
                    </div>
                    <div className="bg-stone-900 rounded-xl p-4 text-center border border-stone-800">
                        <div className="text-3xl font-bold text-blue-400">{stats.brandCount || brands.length}</div>
                        <div className="text-gray-500 text-sm">Marka</div>
                    </div>
                </div>

                {/* Filters Row */}
                <div className="flex flex-wrap gap-4 mb-8">
                    {/* Brand Filter Dropdown */}
                    <div className="relative" ref={brandDropdownRef}>
                        <button
                            onClick={() => setShowBrandDropdown(!showBrandDropdown)}
                            className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-xl transition-colors"
                        >
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            <span>{selectedBrandName}</span>
                            <svg className={`w-4 h-4 transition-transform ${showBrandDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {showBrandDropdown && (
                            <div className="absolute top-full left-0 mt-2 w-64 max-h-80 overflow-y-auto bg-stone-900 border border-stone-700 rounded-xl shadow-xl z-50">
                                <button
                                    onClick={() => handleBrandChange('all')}
                                    className={`w-full text-left px-4 py-3 hover:bg-stone-800 transition-colors ${brandFilter === 'all' ? 'bg-orange-500/20 text-orange-400' : ''}`}
                                >
                                    Tüm Markalar
                                </button>
                                {brands.map((brand: any) => (
                                    <button
                                        key={brand.id}
                                        onClick={() => handleBrandChange(brand.name)}
                                        className={`w-full text-left px-4 py-3 hover:bg-stone-800 transition-colors flex items-center gap-3 ${brandFilter === brand.name ? 'bg-orange-500/20 text-orange-400' : ''}`}
                                    >
                                        <div className="w-6 h-6 flex-shrink-0">
                                            <BrandLogo brand={brand.name} />
                                        </div>
                                        <span>{brand.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Model Filter Dropdown */}
                    {brandFilter !== 'all' && filterModels.length > 0 && (
                        <div className="relative" ref={modelDropdownRef}>
                            <button
                                onClick={() => setShowModelDropdown(!showModelDropdown)}
                                className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-xl transition-colors"
                            >
                                <span>{modelFilter === 'all' ? 'Tüm Modeller' : modelFilter}</span>
                                <svg className={`w-4 h-4 transition-transform ${showModelDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {showModelDropdown && (
                                <div className="absolute top-full left-0 mt-2 w-48 max-h-64 overflow-y-auto bg-stone-900 border border-stone-700 rounded-xl shadow-xl z-50">
                                    <button
                                        onClick={() => handleModelChange('all')}
                                        className={`w-full text-left px-4 py-3 hover:bg-stone-800 transition-colors ${modelFilter === 'all' ? 'bg-orange-500/20 text-orange-400' : ''}`}
                                    >
                                        Tüm Modeller
                                    </button>
                                    {filterModels.map((model: any) => (
                                        <button
                                            key={model.id}
                                            onClick={() => handleModelChange(model.name)}
                                            className={`w-full text-left px-4 py-3 hover:bg-stone-800 transition-colors ${modelFilter === model.name ? 'bg-orange-500/20 text-orange-400' : ''}`}
                                        >
                                            {model.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Star Rating Filter */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleFilter(brandFilter, modelFilter, 0)}
                            className={`px-4 py-2 rounded-xl font-medium transition-colors ${ratingFilter === 0 ? 'bg-orange-500 text-white' : 'bg-stone-800 text-gray-400 hover:bg-stone-700'}`}
                        >
                            Tümü
                        </button>
                        {[5, 4, 3, 2, 1].map((rating: number) => (
                            <button
                                key={rating}
                                onClick={() => handleFilter(brandFilter, modelFilter, rating)}
                                className={`px-3 py-2 rounded-xl font-medium transition-colors ${ratingFilter === rating ? 'bg-yellow-500 text-black' : 'bg-stone-800 text-gray-400 hover:bg-stone-700'}`}
                            >
                                {rating}★
                            </button>
                        ))}
                    </div>
                </div>

                {/* Add Experience Button */}
                <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="w-full py-4 mb-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                    {showAddForm ? '✕ Formu Kapat' : '➕ Deneyim Ekle'}
                </button>

                {/* Add Experience Form */}
                {showAddForm && (
                    <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 mb-8">
                        <h3 className="text-xl font-bold mb-6">🚗 Deneyiminizi Paylaşın</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Photo Upload */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">📷 Araç Fotoğrafları (Maks. 4)</label>

                                {/* Image Previews Grid */}
                                {imagePreviews.length > 0 && (
                                    <div className={`grid ${imagePreviews.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-2 mb-3`}>
                                        {imagePreviews.map((img, i) => (
                                            <div key={i} className="relative group">
                                                <img
                                                    src={img}
                                                    alt={`Preview ${i + 1}`}
                                                    className="w-full h-32 object-cover rounded-lg"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(i)}
                                                    className="absolute top-1 right-1 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg transition-colors"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Upload Button */}
                                {imagePreviews.length < 4 && (
                                    <label className="block border-2 border-dashed border-stone-700 rounded-xl p-6 text-center cursor-pointer hover:border-orange-500 transition-colors">
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            onChange={handleImageChange}
                                            className="hidden"
                                        />
                                        <div className="text-gray-500">
                                            <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                            <p>Fotoğraf ekle ({imagePreviews.length}/4)</p>
                                        </div>
                                    </label>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Brand */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Marka *</label>
                                    <select
                                        name="carBrand"
                                        value={selectedBrand}
                                        onChange={(e) => setSelectedBrand(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white focus:border-orange-500 focus:outline-none"
                                    >
                                        <option value="">Marka Seçin</option>
                                        {brands.map((b: any) => (
                                            <option key={b.id} value={b.name}>{b.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Model */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Model *</label>
                                    <select
                                        name="carModel"
                                        value={selectedModel}
                                        onChange={(e) => setSelectedModel(e.target.value)}
                                        required
                                        disabled={!selectedBrand}
                                        className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white focus:border-orange-500 focus:outline-none disabled:opacity-50"
                                    >
                                        <option value="">{selectedBrand ? 'Model Seçin' : 'Önce marka seçin'}</option>
                                        {models.map((m: any) => (
                                            <option key={m.id} value={m.name}>{m.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Variant */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Motor/Versiyon</label>
                                    <input
                                        name="carVariant"
                                        type="text"
                                        placeholder="ör: 1.6 TDI, 1.4 TSI"
                                        className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white focus:border-orange-500 focus:outline-none"
                                    />
                                </div>

                                {/* Rating */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Puanınız *</label>
                                    <div className="flex items-center gap-1">
                                        {renderStars(formRating, true, setFormRating)}
                                        <input type="hidden" name="rating" value={formRating} />
                                    </div>
                                </div>

                                {/* KM */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Kilometre</label>
                                    <input
                                        name="km"
                                        type="text"
                                        placeholder="ör: 85.000"
                                        className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white focus:border-orange-500 focus:outline-none"
                                    />
                                </div>

                                {/* Ownership */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Sahiplik Süresi</label>
                                    <input
                                        name="ownershipDuration"
                                        type="text"
                                        placeholder="ör: 2 yıl"
                                        className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white focus:border-orange-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Başlık *</label>
                                <input
                                    name="title"
                                    type="text"
                                    required
                                    placeholder="Kısa bir başlık yazın"
                                    className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Deneyiminiz *</label>
                                <textarea
                                    name="content"
                                    required
                                    rows={4}
                                    placeholder="Aracınızla ilgili deneyimlerinizi paylaşın..."
                                    className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white focus:border-orange-500 focus:outline-none resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Pros */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">👍 Beğendikleriniz</label>
                                    <input
                                        name="pros"
                                        type="text"
                                        placeholder="Motor, konfor, yakıt (virgülle ayırın)"
                                        className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white focus:border-orange-500 focus:outline-none"
                                    />
                                </div>

                                {/* Cons */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">👎 Beğenmedikleriniz</label>
                                    <input
                                        name="cons"
                                        type="text"
                                        placeholder="Yalıtım, parça fiyatları (virgülle ayırın)"
                                        className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-xl text-white focus:border-orange-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors disabled:opacity-50"
                            >
                                {submitting ? 'Gönderiliyor...' : 'Deneyimi Paylaş'}
                            </button>
                        </form>
                    </div>
                )}

                {/* Loading */}
                {loading && (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
                    </div>
                )}

                {/* Experiences List */}
                <div className="space-y-6">
                    {experiences.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                            Bu filtreye uygun deneyim bulunamadı.
                        </div>
                    ) : (
                        experiences.map((exp) => (
                            <div key={exp.id} className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800">
                                {/* Car Images */}
                                <ImageGrid images={exp.images} onClick={setLightboxImage} />

                                <div className="p-6">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 flex-shrink-0 bg-stone-800 rounded-lg p-2 flex items-center justify-center">
                                                <BrandLogo brand={exp.carBrand} />
                                            </div>
                                            <div>
                                                <div className="font-bold">{exp.carBrand} {exp.carModel}</div>
                                                <div className="text-sm text-gray-500">{exp.carVariant}</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-lg">{renderStars(exp.rating)}</div>
                                            <div className="text-sm text-gray-500">
                                                {new Date(exp.createdAt).toLocaleDateString('tr-TR')}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Title & Content */}
                                    <h3 className="font-bold text-lg mb-2">{exp.title}</h3>
                                    <p className="text-gray-400 mb-4">{exp.content}</p>

                                    {/* Meta */}
                                    <div className="flex gap-4 mb-4 text-sm flex-wrap">
                                        {exp.km && <span className="px-3 py-1 bg-stone-800 rounded-lg">📍 {exp.km} km</span>}
                                        {exp.ownershipDuration && <span className="px-3 py-1 bg-stone-800 rounded-lg">⏱ {exp.ownershipDuration}</span>}
                                    </div>

                                    {/* Pros & Cons */}
                                    {(exp.pros.length > 0 || exp.cons.length > 0) && (
                                        <div className="grid grid-cols-2 gap-4">
                                            {exp.pros.length > 0 && (
                                                <div>
                                                    <div className="text-green-400 text-sm font-medium mb-2">👍 Beğendiklerim</div>
                                                    <ul className="text-sm text-gray-400 space-y-1">
                                                        {exp.pros.map((pro, i) => (
                                                            <li key={i}>• {pro}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {exp.cons.length > 0 && (
                                                <div>
                                                    <div className="text-red-400 text-sm font-medium mb-2">👎 Beğenmediklerim</div>
                                                    <ul className="text-sm text-gray-400 space-y-1">
                                                        {exp.cons.map((con, i) => (
                                                            <li key={i}>• {con}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Author */}
                                    <div className="mt-4 pt-4 border-t border-stone-800 flex items-center gap-3">
                                        {exp.user.image ? (
                                            <img src={exp.user.image} alt="" className="w-8 h-8 rounded-full" />
                                        ) : (
                                            <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 font-bold">
                                                {exp.user.name?.[0] || 'U'}
                                            </div>
                                        )}
                                        <span className="text-gray-400">{exp.user.name || 'Anonim'}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
