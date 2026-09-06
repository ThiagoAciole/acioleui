import type * as React from 'react';
import type { ColorValue } from '../../utils/styleTokens';

export interface RadialProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    size?: number;
    strokeWidth?: number;
    color?: ColorValue;
    label?: React.ReactNode;
    description?: React.ReactNode;
    ariaLabel?: string;
}
