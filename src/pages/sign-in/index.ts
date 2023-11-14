import Component from '../../core/component';
import { template } from './template';
import LinkComponent from '../../components/link/link';
import { ButtonComponent, InputComponent } from '../../components';
import helloImage from './assets/hello.png';
import { navigate } from '../../router/router';
import { RouterPages } from '../types';

type SignInPageProps = {
    link?: Component;
    inputs?: Component[];
    button?: Component;
    imageSrc?: string;
    classNames?: Array<string | Record<string, boolean>>
};

const link = new LinkComponent('div', {
    href: '/src/pages/sign-up/index.html',
    linkText: 'Нет аккаунта?',
    classNames: [ 'auth-page_link' ],
    events: {
        click: (event) => {
            event?.preventDefault();
            navigate(RouterPages.ERROR_404); // TODO: ссылка на страницу регистрации
        }
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

        console.log({ login, password });
    }
});

const loginInput = new InputComponent('div', {
    id: 'signin-login',
    placeholder: 'Логин',
    type: 'text',
    name: 'login',
    value: undefined,
    label: 'Логин',
    error: undefined,
    classNames: [ 'auth-page_input' ],
    onBlur: (event) => {
        console.log('blur');
    },
    onChange: (event) => {
        console.log('change');
    }
})

const passwordInput = new InputComponent('div', {
    id: 'signin-password',
    placeholder: 'Пароль',
    type: 'password',
    name: 'password',
    value: undefined,
    label: 'Пароль',
    error: undefined,
    classNames: [ 'auth-page_input' ],
    onBlur: (event) => {
        console.log('blur');
    },
    onChange: (event) => {
        console.log('change');
    }
})

export class SignInPage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: SignInPageProps) {
        tagName = 'main';

        props = {
            link,
            button,
            inputs: [
                loginInput,
                passwordInput
            ],
            imageSrc: helloImage,
            classNames: [ 'page-flex' ]
        };

        super(tagName, props)
    }

    render() {
        return this.compile(template);
    }
}
