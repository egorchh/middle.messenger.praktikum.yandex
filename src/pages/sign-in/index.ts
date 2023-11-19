import Component from '../../core/component';
import { template } from './template';
import { ButtonComponent, FormComponent, InputComponent, LinkComponent } from '../../components';
import { navigate } from '../../router/router';
import { RouterPages } from '../types';
import { configureComponentsArray } from '../../utils/configureComponentsArray';
import contextMock from '../../__fixtures__/contextMock';
import helloImage from './assets/hello.png';

const link = new LinkComponent('div', {
    linkText: 'Нет аккаунта?',
    onClick: (event) => {
        event?.preventDefault();
        navigate(RouterPages.SIGN_UP);
    }
});

const button = new ButtonComponent('div', {
    type: 'submit',
    text: 'Войти',
    classNames: [ 'auth-page_button' ]
});

export class SignInPage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
        tagName = 'main';

        super(tagName, {
            link,
            button,
			form: new FormComponent('form', {
				legend: 'Форма авторизации',
				fieldsetClass: 'auth-page_fieldset',
				attributes: {
					name: 'sing-in'
				},
				inputs: configureComponentsArray(InputComponent, contextMock.signin.inputs, { classNames: [ 'auth-page_input' ] }),
				button,
				required: true,
				variant: 'normal'
			}),
            imageSrc: helloImage,
            classNames: [ 'page-flex' ]
        })
    }

    render() {
        return this.compile(template);
    }
}
