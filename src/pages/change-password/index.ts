import Component from '../../core/component';
import { template } from './template';
import { ButtonComponent, InputComponent, BackLinkComponent } from '../../components';
import { configureComponentsArray } from '../../utils/configureComponentsArray';
import contextMock from '../../__fixtures__/contextMock';
import { navigate } from '../../router/router';
import { RouterPages } from '../types';

type ChangePasswordPageProps = {
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
    onClick: (event: Event | undefined) => {
        event?.preventDefault();

        const oldPassword = (document.getElementById('old-password') as HTMLInputElement).value;
        const newPassword = (document.getElementById('new-password') as HTMLInputElement).value;
        const newPasswordRepeat = (document.getElementById('new-password-repeat') as HTMLInputElement).value;

        if (oldPassword && newPassword && newPasswordRepeat) {
            if (newPassword !== newPasswordRepeat) {
                console.log('Вы допустили ошибку при повторном вводе нового пароля');
            } else if (newPassword === oldPassword) {
                console.log('Новый и старый пароли не должны совпадать');
            } else {
                console.log({ oldPassword, newPassword, newPasswordRepeat });
            }
        } else {
            console.log('Заполните поля');
        }
    }
}); // TODO: валидация при сабмите

export class ChangePasswordPage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: ChangePasswordPageProps) {
        tagName = 'main';

        super(tagName, {
            ...props,
            classNames: [ 'page-flex' ],
            inputs: configureComponentsArray(InputComponent, contextMock['change-password'].inputs, { classNames: [ 'change-data-page_input' ] }),
            backLink,
            button
        });
    }

    render() {
        return this.compile(template);
    }
}
