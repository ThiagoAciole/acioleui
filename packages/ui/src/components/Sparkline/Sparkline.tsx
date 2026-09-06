import './Sparkline.css';
import React, { useId } from 'react';
import { classNames } from '../../utils/classNames';
import { colorVar } from '../../utils/styleTokens';
import { chartRange } from '../Charts/chartUtils';
import type { SparklineProps } from './types';

export type { SparklineProps, SparklineVariant } from './types';

export const Sparkline: React.FC<SparklineProps> = ({
    data,
    height = 64,
    color = 'primary',
    variant = 'line',
    showEndPoint = false,
    ariaLabel = 'Tendência',
    className,
    style,
    ...props
}) => {
    const gradientId = useId();
    const { minimum, range } = chartRange(data);
    const points = data.map((value, index) => {
        const x = data.length > 1 ? (index / (data.length - 1)) * 100 : 50;
        const y = 90 - ((value - minimum) / range) * 80;
        return { x, y };
    });
    const line = points.map(({ x, y }) => `${x},${y}`).join(' ');
    const area = points.length ? `M ${points[0].x},100 L ${line} L ${points[points.length - 1].x},100 Z` : '';
    const chartColor = colorVar(color);

    return (
        <div className={classNames('sparkline', className)} style={{ height, ['--sparkline-color' as string]: chartColor, ...style }} {...props}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label={ariaLabel}>
                {variant === 'area' && area ? (
                    <>
                        <defs>
                            <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="var(--sparkline-color)" stopOpacity="0.32" />
                                <stop offset="100%" stopColor="var(--sparkline-color)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path d={area} fill={`url(#${gradientId})`} />
                    </>
                ) : null}
                {line ? <polyline className="sparkline__line" points={line} /> : null}
                {showEndPoint && points.length ? <circle className="sparkline__point" cx={points[points.length - 1].x} cy={points[points.length - 1].y} r="4" /> : null}
            </svg>
        </div>
    );
};

Sparkline.displayName = 'Sparkline';
