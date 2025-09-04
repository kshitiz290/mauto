import React from 'react';

type DisclaimerProps = {
    className?: string;
    children?: React.ReactNode;
};

export function Disclaimer({ className = '', children }: DisclaimerProps) {
    return (
        <p className={`mt-2 text-xs text-foreground/60 ${className}`}>
            {children ?? 'Results are based on customer feedback and internal observations. Actual outcomes vary by industry, data quality, and implementation.'}
        </p>
    );
}

export default Disclaimer;
