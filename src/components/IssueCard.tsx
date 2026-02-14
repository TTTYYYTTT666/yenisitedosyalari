import { Issue } from '@/types';
import { getCategoryLabel, getRiskLabel } from '@/data/cars';

interface IssueCardProps {
    issue: Issue;
    children?: React.ReactNode;
}

export default function IssueCard({ issue, children }: IssueCardProps) {
    const getRiskStyles = (risk: string) => {
        switch (risk) {
            case 'CRITICAL':
                return {
                    border: 'border-l-purple-600',
                    badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                    icon: 'text-purple-600 dark:text-purple-400',
                    bg: 'bg-purple-50/50 dark:bg-transparent'
                };
            case 'HIGH':
                return {
                    border: 'border-l-red-500',
                    badge: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                    icon: 'text-red-500 dark:text-red-400',
                    bg: 'bg-red-50/30 dark:bg-transparent'
                };
            case 'MEDIUM':
                return {
                    border: 'border-l-amber-500',
                    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
                    icon: 'text-amber-500 dark:text-amber-400',
                    bg: ''
                };
            default:
                return {
                    border: 'border-l-green-500',
                    badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                    icon: 'text-green-500 dark:text-green-400',
                    bg: ''
                };
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'motor':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                );
            case 'sanziman':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                );
            case 'elektronik':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                );
            case 'govde':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                );
            case 'fren':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                );
        }
    };

    const styles = getRiskStyles(issue.riskLevel);

    return (
        <div className={`${styles.bg} bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 border-l-4 ${styles.border} rounded-xl p-5 hover:shadow-md transition-all shadow-sm`}>
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-stone-100 dark:bg-stone-800 ${styles.icon}`}>
                        {getCategoryIcon(issue.category)}
                    </div>
                    <div>
                        <span className="text-[11px] font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider">
                            {getCategoryLabel(issue.category)}
                        </span>
                        <h3 className="text-base font-bold text-stone-900 dark:text-stone-100 leading-snug">
                            {issue.title}
                        </h3>
                    </div>
                </div>
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${styles.badge} shrink-0 ml-3`}>
                    {getRiskLabel(issue.riskLevel)}
                </span>
            </div>

            <p className="text-sm text-stone-600 dark:text-stone-400 mb-4 leading-relaxed">
                {issue.description}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-stone-500 dark:text-stone-500">
                {issue.affectedKm && (
                    <div className="flex items-center gap-2 bg-stone-50 dark:bg-stone-800 px-3 py-1.5 rounded-lg">
                        <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="font-medium">{issue.affectedKm}</span>
                    </div>
                )}
                {issue.repairCost && (
                    <div className="flex items-center gap-2 bg-stone-50 dark:bg-stone-800 px-3 py-1.5 rounded-lg">
                        <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">{issue.repairCost}</span>
                    </div>
                )}
            </div>

            {children}
        </div>
    );
}
