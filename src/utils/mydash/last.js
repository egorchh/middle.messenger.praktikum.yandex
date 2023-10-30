/**
 * Return last element of array. If It's not an array or empty array, return 'undefined'
 * @function
 * @param list: Array<any>.
 * @return any.
 * @example [1, 2, 3, 4] ==> 4
 */

function last(list) {
    if (!Array.isArray(list) || !list.length) return;

    return list[list.length - 1];
}
