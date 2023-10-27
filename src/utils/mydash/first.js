/**
 * Return first element of array. If It's not an array or empty array, return 'undefined'
 * @function
 * @param list: Array<any>.
 * @return any.
 * @example [1, 2, 3, 4] ==> 1
 */

function first(list) {
    if (!Array.isArray(list) || !list.length) return;

    return list[0];
}
