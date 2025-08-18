export function normalizeAmount(value: string): number {
    const parsed = parseFloat(value);

    const normalized = Math.round(parsed * 100);

    return normalized;
}