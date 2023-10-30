/**
 * Генерирует числовые последовательности с заданным шагом. Последовательность начинается с 'start', заканчивается не доходя один шаг до 'end'
 * @function
 * @param start: number.
 * @param end: number.
 * @param step: number.
 * @param isRight: boolean.
 * @return Array<number>.
 * @example
 *     range(4); // => [0, 1, 2, 3]
 *     range(-4); // => [0, -1, -2, -3]
 *     range(1, 5); // => [1, 2, 3, 4]
 *     range(0, 20, 5); // => [0, 5, 10, 15]
 *     range(0, -4, -1); // => [0, -1, -2, -3]
 *     range(1, 4, 0); // => [1, 1, 1]
 *     range(0); // => []
 */

export function range(start = 0, end, step = 1, isRight = false) {
    const result = [];

    if (end === undefined) {
        end = arguments[0];
        start = 0;
    }

    if (step === 0) {
        return new Array(end - 1).fill(start);
    }

    if (end > 0) {
        for (let i = start; i < end; i += step) {
            result.push(i);
        }
    } else {
        for (let i = start; i > end; i -= (step > 0 ? step : -step)) {
            result.push(i);
        }
    }

    return isRight ? result.reverse() : result;
}

/*
rangeRight(4); // => [3, 2, 1, 0]
rangeRight(-4); // => [-3, -2, -1, 0]
rangeRight(1, 5); // => [4, 3, 2, 1]
rangeRight(0, 20, 5); // => [15, 10, 5, 0]
rangeRight(0, -4, -1); // => [-3, -2, -1, 0]
rangeRight(1, 4, 0); // => [1, 1, 1]
rangeRight(0); // => []
*/

// const baseRange = (start, end, step) => {
//     let index = -1;
//     let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
//     const result = new Array(length);
//
//     while (length--) {
//         result[++index] = start;
//         start += step;
//     }
//
//     return result;
// }
//
// function range(start = 0, end, step) {
//     if (end === undefined) {
//         end = start;
//         start = 0;
//     }
//
//     step = step === undefined ? (start < end ? 1 : -1) : step;
//     return baseRange(start, end, step);
// }
