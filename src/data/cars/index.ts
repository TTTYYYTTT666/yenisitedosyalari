import { Car } from '@/types';
export { brands } from '../brands';
import { fiatCars } from './fiat';
import { renaultCars } from './renault';
import { volkswagenCars } from './volkswagen';
import { hondaCars } from './honda';
import { toyotaCars } from './toyota';
import { fordCars } from './ford';
import { peugeotCars } from './peugeot';
import { hyundaiCars } from './hyundai';
import { daciaCars } from './dacia';
import { opelCars } from './opel';
import { nissanCars } from './nissan';
import { citroenCars } from './citroen';
import { kiaCars } from './kia';
import { bmwCars } from './bmw';
import { mercedesCars } from './mercedes';
import { audiCars } from './audi';
import { seatCars } from './seat';
import { volvoCars } from './volvo';
import { mazdaCars } from './mazda';
import { toggCars } from './togg';
import { cheryCars } from './chery';
import { teslaCars } from './tesla';
import { porscheCars } from './porsche';
import { landRoverCars } from './land-rover';
import { skodaCars } from './skoda';
import { jeepCars } from './jeep';
import { suzukiCars } from './suzuki';
import { mgCars } from './mg';
import { cupraCars } from './cupra';
import { alfaRomeoCars } from './alfa-romeo';
import { miniCars } from './mini';
import { dsCars } from './ds';
import { mitsubishiCars } from './mitsubishi';
import { subaruCars } from './subaru';
import { jaguarCars } from './jaguar';
import { tofasCars } from './tofas';
import { chevroletCars } from './chevrolet';

export const cars: Car[] = [
    ...fiatCars,
    ...renaultCars,
    ...volkswagenCars,
    ...hondaCars,
    ...toyotaCars,
    ...fordCars,
    ...peugeotCars,
    ...hyundaiCars,
    ...daciaCars,
    ...opelCars,
    ...nissanCars,
    ...citroenCars,
    ...kiaCars,
    ...bmwCars,
    ...mercedesCars,
    ...audiCars,
    ...seatCars,
    ...volvoCars,
    ...mazdaCars,
    ...toggCars,
    ...cheryCars,
    ...teslaCars,
    ...porscheCars,
    ...landRoverCars,
    ...skodaCars,
    ...jeepCars,
    ...suzukiCars,
    ...mgCars,
    ...cupraCars,
    ...alfaRomeoCars,
    ...miniCars,
    ...dsCars,
    ...mitsubishiCars,
    ...subaruCars,
    ...jaguarCars,
    ...tofasCars,
    ...chevroletCars,
];

export const getTrendingCars = (): Car[] => {
    return [...cars].sort((a, b) => (b.searchCount || 0) - (a.searchCount || 0)).slice(0, 9);
};

export const getCarBySlug = (slug: string): Car | undefined => {
    return cars.find(car => car.slug === slug);
};

export const searchCars = (brand?: string, model?: string): Car[] => {
    return cars.filter(car => {
        if (brand && car.brand.toLowerCase() !== brand.toLowerCase()) return false;
        if (model && car.model.toLowerCase() !== model.toLowerCase()) return false;
        return true;
    });
};

export const getAllBrands = (): string[] => {
    return [...new Set(cars.map((car: any) => car.brand))];
};

export const getModelsByBrand = (brand: string): string[] => {
    return [...new Set(cars.filter((car: any) => car.brand.toLowerCase() === brand.toLowerCase()).map((car: any) => car.model))];
};

export const getTotalIssuesCount = (): number => {
    return cars.reduce((total, car) => total + car.issues.length, 0);
};

export const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
        motor: 'Motor',
        sanziman: 'Şanzıman',
        elektronik: 'Elektronik',
        govde: 'Gövde/Kaporta',
        fren: 'Fren Sistemi',
        suspansiyon: 'Süspansiyon'
    };
    return labels[category] || category;
};

export const getRiskLabel = (risk: string): string => {
    const labels: Record<string, string> = {
        CRITICAL: 'KRİTİK RİSK (UZAK DUR)',
        HIGH: 'YÜKSEK RİSK',
        MEDIUM: 'ORTA RİSK',
        LOW: 'DÜŞÜK RİSK'
    };
    return labels[risk] || risk;
};

export const getSimilarCars = (currentCar: Car): Car[] => {
    // 1. Filter out current car
    let candidates = cars.filter(c => c.slug !== currentCar.slug);

    // 2. Try to find cars in similar price range (+/- 25%) if price exists
    if (currentCar.price) {
        const minPrice = currentCar.price * 0.75;
        const maxPrice = currentCar.price * 1.25;
        const priceMatches = candidates.filter(c => c.price && c.price >= minPrice && c.price <= maxPrice);

        if (priceMatches.length >= 3) {
            return priceMatches.sort(() => 0.5 - Math.random()).slice(0, 3);
        }
    }

    // 3. Fallback: Return trending cars or random cars
    return candidates
        .filter(c => (c.searchCount || 0) > 1000)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
};
