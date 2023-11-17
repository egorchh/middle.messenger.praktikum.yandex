import Component, { Props } from '../../core/component';

export type InputFieldComponentProps = {
    classNames?: Array<string | Record<string, boolean>>;
    attributes: {
        id: string;
        placeholder?: string;
        type: HTMLInputElement['type'];
        name?: string;
        value?: string;
        accept?: string;
    };
    variant?: string;
    events?: Record<string, (event?: Event) => void>;
    onBlur?: (event?: Event) => void;
    onChange?: (event?: Event) => void;
    onInput?: (event?: Event) => void;
} & Props;

export class InputFieldComponent extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: InputFieldComponentProps) {
        const { attributes: { id, placeholder, type, name, value, accept } } = props;
        const classNamesFromProps = props.classNames ? [ ...props.classNames ] : []

        super(tagName, {
            classNames: classNamesFromProps.concat([ `${props.variant ? props.variant : 'denied-'}input-component_field` ]),
            attributes: {
                type,
                id,
                placeholder: placeholder || '',
                name: name || '',
                accept: accept || '',
                value: value || ''
            },
            events: {
                blur: props.onBlur || function () {},
                change: props.onChange || function () {},
                input: (event: Event | undefined) => {
                    const target = event?.target as HTMLInputElement;

                    this.setProps({
                        ...props,
                        attributes: {
                            ...props.attributes,
                            value: target.value
                        }
                    })

                    // TODO: Можно прикрутить валидацию сюда чтобы везде ее не пихать
                }
            }
        });
    }

    render() {
        return this.compile('', this._props);
    }
}
