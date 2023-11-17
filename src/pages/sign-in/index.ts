import Component from '../../core/component';
import { template } from './template';
import { ButtonComponent, InputComponent, LinkComponent } from '../../components';
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
    classNames: [ 'auth-page_button' ],
    onClick: (event) => {
        event?.preventDefault();

        const login = (document.getElementById('signin-login') as HTMLInputElement).value;
        const password = (document.getElementById('signin-password') as HTMLInputElement).value;

        if (login && password) {
            console.log({ login, password });
			navigate(RouterPages.CHAT);
        } else {
            console.log('Заполните поля');
        }
    }
});

export class SignInPage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
        tagName = 'main';

        super(tagName, {
            link,
            button,
            inputs: configureComponentsArray(InputComponent, contextMock.signin.inputs, { classNames: [ 'auth-page_input' ] }),
            imageSrc: helloImage,
            classNames: [ 'page-flex' ]
        })
    }

    render() {
        return this.compile(template);
    }
}
