export const deepClone = (obj: object, hash = new WeakMap()): unknown => {
	if (Object(obj) !== obj) return obj;
	if (hash.has(obj)) return hash.get(obj);
	const result: object = obj instanceof Set ? new Set(obj)
		: obj instanceof Map ? new Map(Array.from(obj, ([ key, val ]) =>
				[ key, deepClone(val, hash) ]))
			: obj instanceof Date ? new Date(obj)
				: obj instanceof RegExp ? new RegExp(obj.source, obj.flags)
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					: obj.constructor ? new obj.constructor()
						: Object.create(null);
	hash.set(obj, result);
	return Object.assign(result, ...Object.keys(obj).map(
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		key => ({ [key]: deepClone(obj[key], hash) }) ));
}
