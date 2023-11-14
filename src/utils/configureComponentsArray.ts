import ComponentClass from '../core/component';

export const configureComponentsArray = (
    Component: typeof ComponentClass,
    configurationArray: Record<string, unknown>[],
    options: {
        classNames?: Array<string | Record<string, boolean>>,
        tagName?: keyof HTMLElementTagNameMap | null
    }
): ComponentClass[] => {
    const { classNames, tagName = 'div' } = options;
    const result: ComponentClass[] = [];

    configurationArray.forEach((configuration) => {
        result.push(new Component(tagName ? tagName : 'div', { ...configuration, classNames }));
    });

    return result;
}
