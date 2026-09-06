import './DonutChart.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { colorVar } from '../../utils/styleTokens';
import { percentage } from '../Charts/chartUtils';
import type { DonutChartProps } from './types';

export type { DonutChartItem, DonutChartProps } from './types';

const defaultColors = ['primary', 'success', 'warning', 'error'] as const;

export const DonutChart: React.FC<DonutChartProps> = ({
    data,
    size = 160,
    strokeWidth = 16,
    showLegend = false,
    valueFormatter = (value) => String(value),
    ariaLabel = 'Gráfico de proporções',
    className,
    style,
    ...props
}) => {
    const total = data.reduce((sum, item) => sum + Math.max(0, item.value), 0);
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    let offset = 0;

    return (
        <div className={classNames('donut-chart', className)} style={style} {...props}>
            <svg viewBox="0 0 100 100" role="img" aria-label={ariaLabel} style={{ width: size, height: size }}>
                <circle className="donut-chart__track" cx="50" cy="50" r={radius} strokeWidth={strokeWidth} />
                {data.map((item, index) => {
                    const fraction = percentage(Math.max(0, item.value), total) / 100;
                    const length = Math.max(0, fraction * circumference - 2);
                    const segment = (
                        <circle
                            key={item.label}
                            className="donut-chart__segment"
                            cx="50"
                            cy="50"
                            r={radius}
                            stroke={colorVar(item.color ?? defaultColors[index % defaultColors.length])}
                            strokeWidth={strokeWidth}
                            strokeDasharray={`${length} ${circumference}`}
                            strokeDashoffset={-offset}
                        />
                    );
                    offset += fraction * circumference;
                    return segment;
                })}
            </svg>
            {showLegend ? (
                <div className="donut-chart__legend">
                    {data.map((item, index) => (
                        <span key={`${item.label}-${index}`}>
                            <i style={{ background: colorVar(item.color ?? defaultColors[index % defaultColors.length]) }} />
                            <b>{item.label}</b>
                            <strong>{valueFormatter(item.value)}</strong>
                            <small>{Math.round(percentage(item.value, total))}%</small>
                        </span>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

DonutChart.displayName = 'DonutChart';
