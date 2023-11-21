export function isEmpty(value: unknown) {
    if (Array.isArray(value) && value.length) return false;

    if (typeof value === 'object' && value !== null && Object.values(value).length) return false;

    if (typeof value === 'string' && value.length) return false;

    if ((value instanceof Map || value instanceof Set) && value.size > 0) return false;

    return true;
}
