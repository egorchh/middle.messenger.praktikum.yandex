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
import { GlobalStateType, Routes } from '../../types';
import { connect } from '../../hocs/connect';

type ProfilePageProps = {
	username: string
}

class ProfilePage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: ProfilePageProps) {
        tagName = 'main';

        super(tagName, {
			username: props.username,
			classNames: [ 'page-flex' ],
			avatar: new AvatarComponent('div', {
				size: 100,
				stubSrc: photoCameraImage,
				flow: 'user',
				onClick: (event: Event | undefined) => {
					event?.preventDefault();

					const popup = new PopupComponent('div', {
						content: new PhotoPickerComponent('div', {})
					})

					renderDOM('modal', popup);
				}
			}),
			form: new FormComponent('form', {
				legend: 'Данные пользователя',
				disabled: true,
				fieldsetClass: 'profile-page_inputs',
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

const mapStateToProps = (state: GlobalStateType) => {
	return {
		username: state.user?.first_name
	}
}

export default connect(ProfilePage, mapStateToProps);
