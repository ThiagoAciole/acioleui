import './RadialProgress.css';
import React from 'react';
import { classNames } from '../../utils/classNames';
import { colorVar } from '../../utils/styleTokens';
import { percentage } from '../Charts/chartUtils';
import type { RadialProgressProps } from './types';

export type { RadialProgressProps } from './types';

export const RadialProgress: React.FC<RadialProgressProps> = ({
    value,
    max = 100,
    size = 160,
    strokeWidth = 10,
    color = 'primary',
    label,
    description,
    ariaLabel = 'Progresso radial',
    className,
    style,
    ...props
}) => {
    const progress = percentage(value, max);
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference * (1 - progress / 100);

    return (
        <div className={classNames('radial-progress', className)} style={{ width: size, ['--radial-progress-color' as string]: colorVar(color), ...style }} {...props}>
            <div className="radial-progress__visual">
            <svg viewBox="0 0 100 100" role="img" aria-label={ariaLabel}>
                <circle className="radial-progress__track" cx="50" cy="50" r={radius} strokeWidth={strokeWidth} />
                <circle
                    className="radial-progress__value"
                    cx="50"
                    cy="50"
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                />
            </svg>
            {label ? <span className="radial-progress__label">{label}</span> : null}
            </div>
            {description ? <span className="radial-progress__description">{description}</span> : null}
        </div>
    );
};

RadialProgress.displayName = 'RadialProgress';
