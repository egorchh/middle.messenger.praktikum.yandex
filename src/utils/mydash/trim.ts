export function trim(value: string, symbols?: string) {
	if (!symbols) {
		return value.replace(/\s/g, '');
	}

	const regExp = new RegExp(`[${symbols}]`, 'gi');

	return value.replace(regExp, '');
}
