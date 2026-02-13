'use client';

import { useState, useEffect } from 'react';

interface SystemSetting {
    id: string;
    key: string;
    value: string;
    description?: string;
}

export default function AdminSettingsPage() {
    const [settings, setSettings] = useState<SystemSetting[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch('/api/admin/settings');
            if (res.ok) {
                const data = await res.json();
                setSettings(data);
            }
        } catch (error) {
            console.error('Failed to load settings', error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdate = async (key: string, value: string) => {
        try {
            const res = await fetch('/api/admin/settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ key, value })
            });

            if (res.ok) {
                alert('Ayar güncellendi');
                fetchSettings();
            } else {
                alert('Hata oluştu');
            }
        } catch (error) {
            console.error(error);
            alert('Hata oluştu');
        }
    };

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-stone-900 dark:text-white">Sistem Ayarları</h1>

            <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-stone-50 dark:bg-stone-800/50">
                        <tr>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Anahtar (Key)</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Değer (Value)</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">Açıklama</th>
                            <th className="px-6 py-4 font-medium text-stone-500 dark:text-stone-400">İşlem</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                        {settings.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-stone-500">
                                    Henüz ayar bulunamadı. "Varsayılanları Yükle" ile başlatabilirsiniz.
                                </td>
                            </tr>
                        ) : settings.map((setting) => (
                            <tr key={setting.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-stone-600 dark:text-stone-400">{setting.key}</td>
                                <td className="px-6 py-4">
                                    <input
                                        type="text"
                                        defaultValue={setting.value}
                                        onBlur={(e) => {
                                            if (e.target.value !== setting.value) {
                                                if (confirm(`"${setting.key}" değerini "${e.target.value}" olarak değiştirmek istiyor musunuz?`)) {
                                                    handleUpdate(setting.key, e.target.value);
                                                } else {
                                                    e.target.value = setting.value;
                                                }
                                            }
                                        }}
                                        className="w-full bg-transparent border-b border-stone-300 dark:border-stone-700 focus:border-orange-500 focus:outline-none py-1"
                                    />
                                </td>
                                <td className="px-6 py-4 text-stone-500 dark:text-stone-500">{setting.description}</td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 hover:text-blue-700 font-medium text-xs">Geçmiş</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Helper to init default settings */}
            <div className="mt-8 p-4 bg-stone-100 dark:bg-stone-800 rounded-lg">
                <h3 className="font-bold mb-2">Hızlı İşlemler</h3>
                <div className="flex gap-4">
                    <button
                        onClick={() => handleUpdate('maintenance_mode', 'false')}
                        className="px-4 py-2 bg-stone-200 dark:bg-stone-700 rounded hover:bg-stone-300 transition-colors text-sm"
                    >
                        Bakım Modunu Kapat
                    </button>
                    <button
                        onClick={() => handleUpdate('maintenance_mode', 'true')}
                        className="px-4 py-2 bg-red-100 text-red-700 dark:bg-red-900/30 rounded hover:bg-red-200 transition-colors text-sm"
                    >
                        Bakım Modunu Aç
                    </button>
                </div>
            </div>
        </div>
    );
}
