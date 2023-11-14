import Component, { Props } from '../../core/component';
import { template } from './template';
import { InputFieldComponent } from '../input-field';

type InputComponentProps = {
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



export class InputComponent extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: InputComponentProps) {
        tagName = 'div';

        props = {
            ...props,
            inputField: new InputFieldComponent(tagName, {
                ...props
            })
        }

        const classNamesFromProps = props.classNames ? [ ...props.classNames ] : []

        props.classNames = classNamesFromProps.concat([ 'input-component' ]);

        super(tagName, props);
    }

    render() {
        return this.compile(template);
    }
}
