import type * as React from 'react';
import type { ColorValue } from '../../utils/styleTokens';

export type SparklineVariant = 'line' | 'area';

export interface SparklineProps extends React.HTMLAttributes<HTMLDivElement> {
    data: number[];
    height?: number;
    color?: ColorValue;
    variant?: SparklineVariant;
    showEndPoint?: boolean;
    ariaLabel?: string;
}
