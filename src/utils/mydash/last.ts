export function last(list: unknown[]): unknown {
    if (!Array.isArray(list) || !list.length) return;

    return list[list.length - 1];
}
