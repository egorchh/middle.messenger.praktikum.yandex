type StringIndexed = Record<string, any>;

export function queryString(data: StringIndexed): string | never {
	if (typeof data !== 'object' || data === null) throw new Error('input must be an object');

	let query = '';

	for (const key in data) {
		if (Array.isArray(data[key])) {
			data[key].forEach((item: string | number, index: number) => {
				query += `${key}[${index}]=${item}&`;
			});
		} else if (typeof data[key] === 'object' && data[key] !== null) {
			query += `${key}${recursiveObjIterator(data[key])}&`
		} else {
			query += `${key}=${data[key]}&`;
		}
	}

	return query.slice(0, -1);
}

function recursiveObjIterator(obj: object) {
	let resultString = '';

	for (const key in obj) {

		if (typeof obj[key as keyof typeof obj] === 'object' && obj[key as keyof typeof obj] !== null) {
			resultString += `[${key}]${recursiveObjIterator(obj[key as keyof typeof obj])}`;
		} else {
			resultString += `[${key}]=${obj[key as keyof typeof obj]}`;
		}
	}

	return resultString;
}
