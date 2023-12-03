import Component from '../../core/component';
import { template } from './template';
import { BackLinkComponent, ButtonComponent, FormComponent, InputComponent } from '../../components';
import { configureComponentsArray } from '../../core/utilities/configureComponentsArray';
import { inputs } from './model/props';
import { Routes } from '../../types';

const button = new ButtonComponent('div', {
    type: 'submit',
    text: 'Сохранить изменения',
    classNames: [ 'change-data-page_button' ]
});

export class ChangeDataPage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
        tagName = 'main';

        super(tagName, {
            classNames: [ 'page-flex' ],
			form: new FormComponent('form', {
				legend: 'Форма смены данных профиля',
				fieldsetClass: '',
				inputs: configureComponentsArray(InputComponent, inputs, { classNames: [ 'change-data-page_input' ] }),
				button,
				attributes: {
					name: 'change-password'
				},
				classNames: [ 'change-data-page_form', 'change-data-page_inputs' ],
				variant: 'profile',
				required: true,
				flow: 'changeData'
			}),
            backLink: new BackLinkComponent({ path: Routes.Profile })
        });
    }

    render() {
        return this.compile(template);
    }
}
