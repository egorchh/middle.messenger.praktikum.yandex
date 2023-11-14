import Component, { Props } from '../../core/component';
import { loginValidate } from '../../core/validator/validator';

type InputFieldComponentProps = {
    id: string;
    placeholder: string;
    type: HTMLInputElement['type'];
    name: string;
    value?: string;
    error?: string;
    disable?: boolean;
    onBlur?: (event?: Event) => void;
    onChange?: (event?: Event) => void;
}  & Props;

export class InputFieldComponent extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: InputFieldComponentProps) {
        tagName = 'input'

        props.classNames = [ 'input-component_field', { ['input-component__disable']: Boolean(props.disable), ['input-component__error']: Boolean(props.error) } ]

        const { id, placeholder, type, name } = props;

        props.attributes = {
            type,
            id,
            placeholder,
            name,
            disable: props.disable || false,
            value: props.value || ''
        }

        props.events = {
            blur: props.onBlur || (() => {}),
            change: props.onChange || (() => {})
        }

        super(tagName, {
            ...props,
            events: {
                blur: (event: unknown) => {
                    const validatedValue = loginValidate(event.target.value)
                    if (validatedValue) {
                        this.setProps({
                            error: validatedValue
                        })
                    }
                }
            }
        });
    }

    render() {
        return this.compile('');
    }
}
