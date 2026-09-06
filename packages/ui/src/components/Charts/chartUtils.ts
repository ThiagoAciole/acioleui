export function clamp(value: number, minimum: number, maximum: number): number {
    return Math.min(maximum, Math.max(minimum, value));
}

export function percentage(value: number, total: number): number {
    return total > 0 ? clamp((value / total) * 100, 0, 100) : 0;
}

export function chartRange(values: number[]): { minimum: number; maximum: number; range: number } {
    const minimum = Math.min(...values, 0);
    const maximum = Math.max(...values, 1);
    return { minimum, maximum, range: maximum - minimum || 1 };
}
