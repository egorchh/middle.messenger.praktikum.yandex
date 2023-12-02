import ComponentClass from '../component';

export const configureComponentsArray = (
    Component: typeof ComponentClass,
    configurationArray: Record<string, unknown>[],
    options?: {
        classNames?: Array<string | Record<string, boolean>>,
        tagName?: keyof HTMLElementTagNameMap | null
    }
): ComponentClass[] => {
    const result: ComponentClass[] = [];

    if (configurationArray.length) {
		configurationArray.forEach((configuration, index) => {
			result.push(new Component(options?.tagName ? options.tagName : 'div', { ...configuration, classNames: options?.classNames, orderNumber: String(index) }));
		});
	}

    return result;
}
