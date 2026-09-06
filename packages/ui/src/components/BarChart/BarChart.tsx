import './BarChart.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { colorVar } from '../../utils/styleTokens';
import { clamp } from '../Charts/chartUtils';
import type { BarChartProps } from './types';

export type { BarChartDataItem, BarChartProps } from './types';

export const BarChart: React.FC<BarChartProps> = ({
    data,
    max,
    height = 160,
    maxBarWidth = 56,
    activeIndex,
    showLabels,
    showActiveValue = true,
    valueFormatter = (value) => String(value),
    ariaLabel = 'Gráfico de barras',
    className,
    style,
    ...props
}) => {
    const items = data.map((item) => typeof item === 'number' ? { value: item } : item);
    const resolvedMax = max ?? Math.max(...items.map((item) => item.value), 1);
    const shouldShowLabels = showLabels ?? items.some((item) => item.label !== undefined);
    const chartWidth = items.length * maxBarWidth + Math.max(0, items.length - 1) * 16;

    return (
        <div className={classNames('bar-chart', className)} style={{ ['--bar-chart-height' as string]: `${height}px`, maxWidth: chartWidth, ...style }} {...props}>
            <div className="bar-chart__plot" role="img" aria-label={ariaLabel} style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
                {items.map((item, index) => {
                    const barHeight = clamp((item.value / resolvedMax) * 100, 0, 100);
                    const isMuted = activeIndex !== undefined && activeIndex !== index;

                    return (
                        <div className="bar-chart__column" key={index}>
                            <span className="bar-chart__value">{showActiveValue && activeIndex === index ? valueFormatter(item.value) : null}</span>
                            <span className="bar-chart__track">
                                <span
                                className={classNames('bar-chart__bar', isMuted && 'bar-chart__bar--muted')}
                                style={{ height: `${barHeight}%`, ...(item.color ? { background: colorVar(item.color) } : {}) }}
                                />
                            </span>
                            {shouldShowLabels ? <span className="bar-chart__label">{item.label}</span> : null}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

BarChart.displayName = 'BarChart';
