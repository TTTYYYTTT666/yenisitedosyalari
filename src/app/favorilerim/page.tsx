import Link from 'next/link';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { getUserFavorites } from '@/actions/favorite-actions';
import { getCarBySlug } from '@/lib/cars';
import BrandLogo from '@/components/BrandLogo';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Favorilerim',
    description: 'Favorilerinize eklediğiniz araçları görüntüleyin.',
};

export default async function FavoritesPage() {
    const session = await auth();
    if (!session?.user?.id) redirect('/giris');

    const favSlugs = await getUserFavorites();

    // Fetch car data for each favorite
    const favCars = (await Promise.all(
        favSlugs.map(async (slug: string) => {
            const car = await getCarBySlug(slug);
            return car;
        })
    )).filter(Boolean);

    return (
        <div className="min-h-screen bg-stone-100 dark:bg-[#0c0a09] py-10 lg:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-stone-900 dark:text-white mb-2">
                        ❤️ Favorilerim
                    </h1>
                    <p className="text-stone-500 dark:text-stone-400 text-sm">
                        {favCars.length > 0
                            ? `${favCars.length} araç favorilerinizde`
                            : 'Henüz favori araç eklemediniz'}
                    </p>
                </div>

                {favCars.length === 0 ? (
                    <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-12 text-center">
                        <div className="text-5xl mb-4">🚗</div>
                        <h2 className="text-lg font-bold text-stone-700 dark:text-stone-300 mb-2">Henüz favori yok</h2>
                        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
                            Araç sayfalarında ❤️ butonuna tıklayarak favorilerinize ekleyebilirsiniz.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex px-5 py-2.5 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors"
                        >
                            Araç Ara
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {favCars.map((car: any) => car && (
                            <Link
                                key={car.slug}
                                href={`/arac/${car.slug}`}
                                className="flex items-center gap-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-4 hover:border-orange-300 dark:hover:border-orange-700 transition-all hover:shadow-md group"
                            >
                                <div className="w-12 h-12 bg-stone-100 dark:bg-stone-800 rounded-xl flex items-center justify-center p-2 shrink-0">
                                    <BrandLogo brand={car.brand} className="w-full h-full" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h2 className="font-bold text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors truncate">
                                        {car.brand} {car.model}
                                    </h2>
                                    <p className="text-sm text-stone-500 dark:text-stone-400 truncate">
                                        {car.variant} · {car.years}
                                    </p>
                                </div>
                                <div className="text-right shrink-0">
                                    <div className={`text-lg font-bold ${car.reliabilityScore >= 75 ? 'text-green-600 dark:text-green-400' :
                                        car.reliabilityScore >= 60 ? 'text-amber-600 dark:text-amber-400' :
                                            'text-red-600 dark:text-red-400'
                                        }`}>
                                        {car.reliabilityScore}/100
                                    </div>
                                    <div className="text-xs text-stone-400">{car.issues.length} sorun</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
