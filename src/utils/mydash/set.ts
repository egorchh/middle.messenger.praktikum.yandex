import { merge } from './merge';

type Indexed = {
	[key: string]: unknown
}

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
	if (typeof object !== 'object' || object === null) {
		return object;
	}

	const pathArr = path.split('.');

	const additionalObj = createObjectByPath(pathArr, value);

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	return merge(object, additionalObj, true);
}

export default set

function createObjectByPath(pathArr: string[], value: unknown): Indexed {
	const result = {}

	if (!pathArr.length) {
		return result;
	} else if (pathArr.length === 1) {
		return { [pathArr[0]]: value }
	} else {
		return { [pathArr[0]]: createObjectByPath(pathArr.slice(1), value) };
	}
}
