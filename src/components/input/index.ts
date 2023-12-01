import Component, { Props } from '../../core/component';
import { template } from './template';
import { InputFieldComponent } from '../input-field';
import { validateTargetValue } from '../../utils/validation';
import { connect } from '../../hocs/connect';
import { UserInfo } from '../../types';

export type InputComponentProps = {
    id: string;
    placeholder: string;
    type: HTMLInputElement['type'];
    name: keyof UserInfo;
    value?: string;
    error?: string;
    disable?: boolean;
    variant?: 'normal' | 'profile';
    onBlur?: (event: Event) => void;
    inputField?: InputFieldComponent;
	data: UserInfo
} & Props;

class InputComponent extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: InputComponentProps) {
        const classNamesFromProps = props.classNames ? [ ...props.classNames ] : [];

        const { error, name, placeholder, type, id, variant, value } = props;

        const classVariant = variant === 'profile' ? 'profile-' : '';

        super(tagName, {
            ...props,
            classNames: classNamesFromProps.concat([ `${classVariant}input-component` ]),
            error,
            inputField: new InputFieldComponent('input', {
                attributes: {
                    type,
                    id,
                    placeholder,
                    name,
                    value: value || ''
                },
                variant: props.variant,
                onBlur: (event: Event | undefined) => {
                    if (!event) return;

                    const target = event.target as HTMLInputElement;

                    const { value: targetValue, name: targetName } = target;

                    const validatedValue = validateTargetValue(targetName, targetValue);

                    if (validatedValue) {
                        this.setProps({
                            ...props,
                            error: validatedValue,
                            value: targetValue

                        });

                        target.classList.add(`${classVariant}input-component_error`);
                    } else {
                        this.setProps({
                            ...props,
                            error: undefined,
                            value: targetValue
                        });

                        target.classList.remove(`${classVariant}input-component_error`);
                    }
                }
            })
        });
    }

    render() {
        return this.compile(template, this._props);
    }
}

const mapStateToProps = (state: any, props: InputComponentProps) => {
	return {
		value: (state.user?.data && typeof state.user?.data[props.name] !== 'object') ? state.user.data[props.name] : undefined
	}
};

export default connect(InputComponent, mapStateToProps);
