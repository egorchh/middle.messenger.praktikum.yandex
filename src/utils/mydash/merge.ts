type Indexed = {
	[key: string]: unknown
}

export function merge(lhs: Indexed, rhs: Indexed, mutant?: boolean, secMutable: boolean = false): Indexed {
	if (!mutant) {
		const result: Indexed = { ...lhs };

		for (const key in rhs) {
			if (!(key in result)) {
				result[key] = rhs[key];
			} else if (Array.isArray(rhs[key])) {
				console.log(key)
				console.log(rhs[key]);
				lhs[key] = rhs[key];
			} else if (typeof result[key] === 'object' && typeof rhs[key] === 'object') {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				result[key] = merge(result[key], rhs[key]);
			} else {
				result[key] = rhs[key];
			}
		}

		return result;
	}

	for (const key in rhs) {
		if (!(key in rhs)) {
			lhs[key] = rhs[key];
		} else if (Array.isArray(rhs[key])) {
			lhs[key] = rhs[key];
		} else if (typeof lhs[key] === 'object' && typeof rhs[key] === 'object') {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			lhs[key] = merge(lhs[key], rhs[key], secMutable);
		} else {
			lhs[key] = rhs[key];
		}
	}

	return lhs;
}
