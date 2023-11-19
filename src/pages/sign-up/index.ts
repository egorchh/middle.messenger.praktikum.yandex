import Component from '../../core/component';
import { template } from './template';
import { ButtonComponent, FormComponent, InputComponent, LinkComponent } from '../../components';
import { navigate } from '../../router/router';
import { RouterPages } from '../types';
import { configureComponentsArray } from '../../utils/configureComponentsArray';
import contextMock from '../../__fixtures__/contextMock';

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
    classNames: [ 'registration-page_button' ]
});

export class SignUpPage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
        tagName = 'main';

        super(tagName, {
            link,
			form: new FormComponent('form', {
				legend: 'Форма регистрации',
				fieldsetClass: '',
				inputs: configureComponentsArray(InputComponent, contextMock.signup.inputs, { classNames: [ 'registration-page_input' ] }),
				button,
				required: true,
				variant: 'normal'
			}),
            classNames: [ 'page-flex' ]
        })
    }

    render() {
        return this.compile(template);
    }
}
