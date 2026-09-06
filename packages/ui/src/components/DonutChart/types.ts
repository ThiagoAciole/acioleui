import type * as React from 'react';
import type { ColorValue } from '../../utils/styleTokens';

export interface DonutChartItem {
    label: string;
    value: number;
    color?: ColorValue;
}

export interface DonutChartProps extends React.HTMLAttributes<HTMLDivElement> {
    data: DonutChartItem[];
    size?: number;
    strokeWidth?: number;
    showLegend?: boolean;
    valueFormatter?: (value: number) => React.ReactNode;
    ariaLabel?: string;
}
