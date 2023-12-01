import Component from '../../core/component';
import { template } from './template';
import {
	AvatarComponent,
	BackLinkComponent,
	FormComponent,
	InputComponent,
	LinkComponent,
	PhotoPickerComponent,
	PopupComponent
} from '../../components';
import { configureComponentsArray } from '../../core/utilities/configureComponentsArray';
import photoCameraImage from './assets/photo-plug.svg';
import renderDOM from '../../core/utilities/render';
import { inputs, links } from './model/props';
import { Routes } from '../../types';

const avatarFromSessionStorage = sessionStorage.getItem('avatarSrc');

const avatar = new AvatarComponent('div', {
    stub: !avatarFromSessionStorage,
    size: 100,
    stubSrc: photoCameraImage,
    src: avatarFromSessionStorage ? avatarFromSessionStorage : '',
    onClick: (event: Event | undefined) => {
        event?.preventDefault();

        const popup = new PopupComponent('div', {
            content: new PhotoPickerComponent('div', {})
        })

        renderDOM('modal', popup);
    }
});

class ProfilePage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
        tagName = 'main';

        super(tagName, {
            username: 'Егор',
            classNames: [ 'page-flex' ],
            avatar,
			form: new FormComponent('form', {
				legend: 'Данные пользователя',
				disabled: true,
				fieldsetClass: '',
				inputs: configureComponentsArray(InputComponent, inputs, { classNames: [ 'profile-page_input' ] }),
				classNames: [ 'profile-page_form' ],
				required: false,
				variant: 'profile'
			}),
            links: configureComponentsArray(LinkComponent, links),
            backLink: new BackLinkComponent({ path: Routes.Chat })
        })
    }

    render() {
        return this.compile(template);
    }
}

export default ProfilePage;
