/*
isEmpty(null); // => true done
isEmpty(true); // => true done
isEmpty(1); // => true done
isEmpty([1, 2, 3]); // => false done
isEmpty({ 'a': 1 }); // => false done
isEmpty('123'); // => false done
isEmpty(123); // => true done
isEmpty(''); // => true done
isEmpty(0); // => true done
isEmpty(undefined) // => true done
isEmpty(new Map([['1', 'str1'], [1, 'num1'], [true, 'bool1']])) // => false
isEmpty(new Set(['value1', 'value2', 'value3'])) // => false
*/

function isEmpty(value) {
    if (Array.isArray(value) && value.length) return false;

    if (typeof value === 'object' && value !== null && Object.values(value).length) return false;

    if (typeof value === 'string' && value.length) return false;

    if ((value instanceof Map || value instanceof Set) && value.size > 0) return false;

    return true;
}
