import Component from '../../core/component';
import { template } from './template';
import { BackLinkComponent, ButtonComponent, FormComponent, InputComponent } from '../../components';
import { configureComponentsArray } from '../../utils/configureComponentsArray';
import contextMock from '../../__fixtures__/contextMock';
import { navigate } from '../../router/router';
import { RouterPages } from '../types';

const backLink = new BackLinkComponent('a', {
    onClick: () => {
        navigate(RouterPages.PROFILE);
    }
});

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
				inputs: configureComponentsArray(InputComponent, contextMock['change-data'].inputs, { classNames: [ 'change-data-page_input' ] }),
				button,
				attributes: {
					name: 'change-password'
				},
				classNames: [ 'change-data-page_form', 'change-data-page_inputs' ],
				variant: 'profile',
				required: true
			}),
            backLink
        });
    }

    render() {
        return this.compile(template);
    }
}
