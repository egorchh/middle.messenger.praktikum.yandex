import Component from '../../core/component';
import { template } from './template';
import { ButtonComponent, InputComponent, LinkComponent } from '../../components';
import { navigate } from '../../router/router';
import { RouterPages } from '../types';
import { configureComponentsArray } from '../../utils/configureComponentsArray';
import contextMock from '../../__fixtures__/contextMock';

type SignUpPageProps = {
    link?: LinkComponent;
    inputs?: InputComponent[];
    button?: ButtonComponent;
    classNames?: Array<string | Record<string, boolean>>
};

const link = new LinkComponent('div', {
    linkText: 'Уже есть аккаунт?',
    onClick: (event) => {
        event?.preventDefault();
        navigate(RouterPages.SIGN_IN);
    }
});

const button = new ButtonComponent('div', {
    type: 'submit',
    text: 'Создать аккаунт',
    classNames: [ 'registration-page_button' ],
    onClick: (event) => {
        event?.preventDefault();

        const login = (document.getElementById('signin-login') as HTMLInputElement).value;
        const password = (document.getElementById('signin-password') as HTMLInputElement).value;

        if (login && password) {
            console.log({ login, password });
        } else {
            console.log('Заполните поля');
        }
    }
});

export class SignUpPage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: SignUpPageProps) {
        tagName = 'main';

        super(tagName, {
            ...props,
            link,
            button,
            inputs: configureComponentsArray(InputComponent, contextMock.signup.inputs, { classNames: [ 'registration-page_input' ] }),
            classNames: [ 'page-flex' ]
        })
    }

    render() {
        return this.compile(template);
    }
}
