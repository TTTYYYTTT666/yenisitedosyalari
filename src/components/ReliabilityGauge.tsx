'use client';

import { useEffect, useState } from 'react';

interface ReliabilityGaugeProps {
    score: number;
    size?: 'sm' | 'md' | 'lg';
}

export default function ReliabilityGauge({ score, size = 'md' }: ReliabilityGaugeProps) {
    const [animatedScore, setAnimatedScore] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedScore(score);
        }, 100);
        return () => clearTimeout(timer);
    }, [score]);

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-green-600 dark:text-green-500';
        if (score >= 60) return 'text-amber-600 dark:text-amber-500';
        return 'text-red-600 dark:text-red-500';
    };

    const getStrokeColor = (score: number) => {
        if (score >= 80) return '#16a34a';
        if (score >= 60) return '#d97706';
        return '#dc2626';
    };

    const getRiskLabel = (score: number) => {
        if (score >= 80) return 'Düşük Risk';
        if (score >= 60) return 'Orta Risk';
        return 'Yüksek Risk';
    };

    const getRiskBg = (score: number) => {
        if (score >= 80) return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
        if (score >= 60) return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400';
        return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
    };

    const sizeClasses = {
        sm: { container: 'w-20 h-20', text: 'text-xl', label: 'text-[10px]' },
        md: { container: 'w-32 h-32', text: 'text-3xl', label: 'text-xs' },
        lg: { container: 'w-40 h-40', text: 'text-4xl', label: 'text-sm' }
    };

    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <div className={`relative ${sizeClasses[size].container}`}>
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                        className="text-stone-200 dark:text-stone-700"
                    />
                    {/* Progress circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={getStrokeColor(score)}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`font-bold ${sizeClasses[size].text} ${getScoreColor(score)}`}>
                        {animatedScore}
                    </span>
                    <span className={`text-stone-400 ${sizeClasses[size].label}`}>/ 100</span>
                </div>
            </div>
            <div className={`mt-2.5 px-3 py-1 rounded-md ${getRiskBg(score)} font-medium ${sizeClasses[size].label}`}>
                {getRiskLabel(score)}
            </div>
        </div>
    );
}
