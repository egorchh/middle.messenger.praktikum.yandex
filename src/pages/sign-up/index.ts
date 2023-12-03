import Component from '../../core/component';
import { template } from './template';
import { ButtonComponent, FormComponent, InputComponent, LinkComponent } from '../../components';
import { configureComponentsArray } from '../../core/utilities/configureComponentsArray';
import { Routes } from '../../types';
import { connect } from '../../hocs/connect';
import { inputs } from './model/props';

const button = new ButtonComponent('div', {
    type: 'submit',
    text: 'Создать аккаунт',
    classNames: [ 'registration-page_button' ]
});

class SignUpPage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
        tagName = 'main';

        super(tagName, {
            link: new LinkComponent('div', {
				linkText: 'Уже есть аккаунт?',
				path: Routes.SignIn
			}),
			form: new FormComponent('form', {
				legend: 'Форма регистрации',
				fieldsetClass: '',
				inputs: configureComponentsArray(InputComponent, inputs, { classNames: [ 'registration-page_input' ] }),
				button,
				required: true,
				variant: 'normal',
				flow: 'signup'
			}),
            classNames: [ 'page-flex' ]
        })
    }

    render() {
        return this.compile(template);
    }
}

export default connect(SignUpPage);
