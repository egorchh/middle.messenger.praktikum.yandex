import Component from '../../core/component';
import { template } from './template';
import { BackLinkComponent, ButtonComponent, InputComponent } from '../../components';
import { configureComponentsArray } from '../../utils/configureComponentsArray';
import contextMock from '../../__fixtures__/contextMock';
import { navigate } from '../../router/router';
import { RouterPages } from '../types';

type ChangeDataPageProps = {
    inputs?: InputComponent[];
    backLink?: BackLinkComponent;
};

const backLink = new BackLinkComponent('a', {
    onClick: () => {
        navigate(RouterPages.PROFILE);
    }
});

const button = new ButtonComponent('div', {
    type: 'submit',
    text: 'Сохранить изменения',
    classNames: [ 'change-data-page_button' ],
    onClick: (event) => {
        event?.preventDefault();

        const email = (document.getElementById('change-email') as HTMLInputElement).value;
        const login = (document.getElementById('change-login') as HTMLInputElement).value;
        const name = (document.getElementById('change-name') as HTMLInputElement).value;
        const lastname = (document.getElementById('change-lastname') as HTMLInputElement).value;
        const nickname = (document.getElementById('change-nickname') as HTMLInputElement).value;
        const phoneNumber = (document.getElementById('change-tel') as HTMLInputElement).value;

        const isDataFulled = email && login && name && lastname && nickname && phoneNumber;

        if (isDataFulled) {
            console.log({ email, login, name, lastname, nickname, phoneNumber });
        } else {
            console.log('Заполните поля');
        }
    }
});  // TODO: валидация при сабмите

export class ChangeDataPage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: ChangeDataPageProps) {
        tagName = 'main';

        super(tagName, {
            ...props,
            classNames: [ 'page-flex' ],
            inputs: configureComponentsArray(InputComponent, contextMock['change-data'].inputs, { classNames: [ 'change-data-page_input' ] }),
            backLink,
            button
        });
    }

    render() {
        return this.compile(template);
    }
}
