import Component, { Props } from '../../core/component';
import { template } from './template';
import { ButtonComponent } from '../button';
import { validateTargetValue } from '../../utils/validation';

export type FormComponentProps = {
	fieldsetClass: string;
	legend: string;
	disabled?: boolean;
	inputs: Array<Component>;
	button?: ButtonComponent;
	required?: boolean;
	variant: 'profile' | 'normal'
	onSubmit?: (event?: Event) => void;
} & Props;

export class FormComponent extends Component {
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

						return Object.keys(result).length ? console.log(result) : undefined;
					}
				}
			}
		});
	}

	render() {
		return this.compile(template);
	}
}
