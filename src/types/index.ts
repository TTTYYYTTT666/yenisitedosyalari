export type RiskLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export type IssueCategory = 'motor' | 'sanziman' | 'elektronik' | 'govde' | 'fren' | 'suspansiyon';

export interface Issue {
    id: string;
    title: string;
    description: string;
    category: IssueCategory;
    riskLevel: RiskLevel;
    affectedKm?: string;
    repairCost?: string;
}

export interface Car {
    id: string;
    slug: string;
    brand: string;
    model: string;
    variant: string;
    years: string;
    generation?: string;
    image?: string; // Opting out of images as per user request
    expertNote?: string; // "Sanayi Notu" - Master mechanic's advice
    price?: number; // Average 2026 market price for valuation
    reliabilityScore: number;
    totalIssues: number;
    issues: Issue[];
    pros: string[];
    cons: string[];
    buyingTips: string[];
    searchCount?: number;
}

export interface Brand {
    id: string;
    name: string;
    logo?: string;
    models: Model[];
}

export interface Model {
    id: string;
    name: string;
    variants: Variant[];
}

export interface Variant {
    id: string;
    name: string;
    years: string;
    slug: string;
}
