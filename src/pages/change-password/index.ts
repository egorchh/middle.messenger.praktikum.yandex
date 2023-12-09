import Component from '../../core/component';
import { template } from './template';
import { BackLinkComponent, ButtonComponent, FormComponent, InputComponent } from '../../components';
import { configureComponentsArray } from '../../core/utilities/configureComponentsArray';
import { inputs } from './model/props';
import { Routes } from '../../types';


const button = new ButtonComponent('div', {
    type: 'submit',
    text: 'Сохранить изменения',
    classNames: [ 'change-data-page_button' ],
    onClick: () => {
        const oldPassword = (document.getElementById('old-password') as HTMLInputElement).value;
        const newPassword = (document.getElementById('new-password') as HTMLInputElement).value;
        const newPasswordRepeat = (document.getElementById('new-password-repeat') as HTMLInputElement).value;

        if (oldPassword && newPassword && newPasswordRepeat) {
            if (newPassword !== newPasswordRepeat) {
                console.log('Вы допустили ошибку при повторном вводе нового пароля');
            } else if (newPassword === oldPassword) {
                console.log('Новый и старый пароли не должны совпадать');
            }
        }
    }
});

export class ChangePasswordPage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
        tagName = 'main';

        super(tagName, {
            classNames: [ 'page-flex' ],
			form: new FormComponent('form', {
				legend: 'Форма смены пароля профиля',
				fieldsetClass: '',
				inputs: configureComponentsArray(InputComponent, inputs, { classNames: [ 'change-data-page_input' ] }),
				button,
				attributes: {
					name: 'change-password'
				},
				classNames: [ 'change-data-page_form', 'change-data-page_inputs' ],
				required: true,
				variant: 'profile',
				flow: 'changePassword'
			}),
            backLink: new BackLinkComponent({ path: Routes.Profile })
        });
    }

    render() {
        return this.compile(template);
    }
}
