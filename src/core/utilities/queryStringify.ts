export function queryStringify(data: Record<string, unknown>): string {
	let query = '?';

	for (const key in data) {
		if (Array.isArray(data[key])) {
			query += `${key}=${(data[key] as Array<string | number>).join(',')}&`;
		} else if (typeof data[key] === 'object' && data[key] !== null) {
			query += `${key}=${data[key]}&`
		} else {
			query += `${key}=${data[key]}&`;
		}
	}

	return query.slice(0, -1);
}
