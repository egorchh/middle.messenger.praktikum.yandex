import ComponentClass from '../component';

export const configureComponentsArray = <T = Record<string, unknown>>(
    Component: typeof ComponentClass,
    configurationArray: T[],
    options?: {
        classNames?: Array<string | Record<string, boolean>>,
        tagName?: keyof HTMLElementTagNameMap | null
    }
): ComponentClass[] => {
    const result: ComponentClass[] = [];

	for (let i = 0; i <= configurationArray.length - 1; i++) {
		if (configurationArray[i] === null) {
			continue;
		}

		result.push(
			new Component(
				options?.tagName ? options.tagName : 'div',
				{ ...configurationArray[i], classNames: options?.classNames, orderNumber: String(i) }
			)
		);
	}

    return result;
}
