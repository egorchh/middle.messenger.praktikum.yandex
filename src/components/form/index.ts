import Component, { Props } from '../../core/component';
import { template } from './template';
import { ButtonComponent } from '../button';
import { validateTargetValue } from '../../utils/validation';
import { AuthService } from '../../services/auth-service';
import { ChangePasswordRequestData, ChangeProfileRequestData, SigninRequestData, SignupRequestData } from '../../types';
import { UserService } from '../../services/user-service';

type FormFlow = 'signin' | 'signup' | 'changePassword' | 'changeData'

export type FormComponentProps = {
	fieldsetClass: string;
	legend: string;
	disabled?: boolean;
	inputs: Array<Component>;
	button?: ButtonComponent;
	required?: boolean;
	variant: 'profile' | 'normal'
	onSubmit?: (event?: Event) => void;
	flow?: FormFlow;
} & Props;

class FormComponent extends Component {
	constructor(tagName: keyof HTMLElementTagNameMap | null, props: FormComponentProps) {
		super(tagName, {
			...props,
			events: {
				submit: (event?: Event) => {
					{
						event?.preventDefault();
						const result: Record<string, string> = {};

						const form = event?.target as HTMLFormElement;
						const inputs = form.querySelectorAll('input');

						inputs.forEach((input, index) => {
							const { name, value } = input;

							const errorTextComponent = document.getElementById(`error-text-placeholder-${index}`) as HTMLParagraphElement;
							const errorTextNative = document.getElementById('error-text-native') as HTMLParagraphElement | undefined;


							const validatedValue = validateTargetValue(name, value, props.required ? props.required : false);

							const variantClass = props.variant === 'profile' ? 'profile-' : ''

							if (validatedValue) {
								input.classList.add(`${variantClass}input-component_error`);

								if (!errorTextNative) {
									errorTextComponent.innerHTML = validatedValue;
									errorTextComponent.classList.remove('visually-hidden');
									errorTextComponent.classList.add(`${variantClass}input-component_error-text`);
								}
							} else {
								input.classList.remove(`${variantClass}input-component_error`);

								errorTextComponent.classList.add('visually-hidden');
								errorTextComponent.classList.remove(`${variantClass}input-component_error-text`);

								result[name] = value;
							}
						});

						if (!Object.keys(result).length) {
							return;
						}

						switch (props.flow) {
							case 'signup':
								AuthService.signup(result as SignupRequestData);
								break;
							case 'signin':
								AuthService.signin(result as SigninRequestData);
								break;
							case 'changeData':
								UserService.changeProfileData(result as ChangeProfileRequestData);
								break;
							case 'changePassword':
								UserService.changePassword(result as ChangePasswordRequestData);
								break;
							default:
								return;
						}
					}
				}
			}
		});
	}

	render() {
		return this.compile(template);
	}
}

export default FormComponent;
