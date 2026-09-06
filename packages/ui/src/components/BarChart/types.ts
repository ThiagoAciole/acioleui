import type * as React from 'react';
import type { ColorValue } from '../../utils/styleTokens';

export interface BarChartDataItem {
    value: number;
    label?: React.ReactNode;
    color?: ColorValue;
}

export interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
    data: Array<number | BarChartDataItem>;
    max?: number;
    height?: number;
    maxBarWidth?: number;
    activeIndex?: number;
    showLabels?: boolean;
    showActiveValue?: boolean;
    valueFormatter?: (value: number) => React.ReactNode;
    ariaLabel?: string;
}
