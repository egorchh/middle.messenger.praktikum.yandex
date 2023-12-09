type State = {
	[key: string]: State | unknown;
}

export const getStateFromPath = (state: State, path: string) => {
	const keys = path.split('.');
	let current: State | unknown | undefined = state;

	for (const key of keys) {
		if (typeof current === 'object' && current !== null) {
			current = current[key as keyof typeof current];
		} else {
			current = undefined;
		}

		if (current === undefined) {
			break;
		}
	}

	return current ? current : {};

}
