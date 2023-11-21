export function first(list: unknown[]): unknown {
    if (!Array.isArray(list) || !list.length) return;

    return list[0];
}
