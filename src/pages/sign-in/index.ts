import Component from '../../core/component';
import { template } from './template';
import { ButtonComponent, FormComponent, InputComponent, LinkComponent } from '../../components';
import { configureComponentsArray } from '../../core/utilities/configureComponentsArray';
import helloImage from './assets/hello.png';
import { Routes } from '../../types';
import { connect } from '../../hocs/connect';
import { inputs } from './model/props';

const button = new ButtonComponent('div', {
    type: 'submit',
    text: 'Войти',
    classNames: [ 'auth-page_button' ]
});

class SignInPage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
        tagName = 'main';

        super(tagName, {
            link: new LinkComponent('div', {
				linkText: 'Нет аккаунта?',
				path: Routes.SignUp
			}),
            button,
			form: new FormComponent('form', {
				legend: 'Форма авторизации',
				fieldsetClass: 'auth-page_fieldset',
				attributes: {
					name: 'sing-in'
				},
				inputs: configureComponentsArray(InputComponent, inputs, { classNames: [ 'auth-page_input' ] }),
				button,
				required: true,
				variant: 'normal',
				flow: 'signin'
			}),
            imageSrc: helloImage,
            classNames: [ 'page-flex' ]
        })
    }

    render() {
        return this.compile(template);
    }
}

export default connect(SignInPage);
