export function range(start = 0, end: number, step = 1, isRight = false): number[] {
    const result = [];

    if (!end === undefined) {
        // eslint-disable-next-line prefer-rest-params
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
