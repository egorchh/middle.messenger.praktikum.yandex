import Component from '../../core/component';
import { template } from './template';
import {
	AvatarComponent,
	BackLinkComponent,
	InputComponent,
	LinkComponent,
	PhotoPickerComponent,
	PopupComponent
} from '../../components';
import { configureComponentsArray } from '../../utils/configureComponentsArray';
import contextMock from '../../__fixtures__/contextMock';
import photoCameraImage from './assets/photo-plug.svg';
import renderDOM from '../../utils/render';
import { navigate } from '../../router/router';
import { RouterPages } from '../types';

type ProfilePageProps = {
    links?: LinkComponent[];
    inputs?: InputComponent[];
    backLink?: BackLinkComponent;
    avatar?: AvatarComponent;
    disabledForm?: boolean;
    username?: string;
};

const avatarFromSessionStorage = sessionStorage.getItem('avatarSrc');

const avatar = new AvatarComponent('div', {
    stub: !avatarFromSessionStorage,
    size: 100,
    stubSrc: photoCameraImage,
    src: avatarFromSessionStorage ? avatarFromSessionStorage : '',
    onClick: (event: Event | undefined) => {
        event?.preventDefault();

        console.log('change avatar');

        const popup = new PopupComponent('div', {
            content: new PhotoPickerComponent('div', {})
        })

        renderDOM('modal', popup);
    }
})

const backLink = new BackLinkComponent('a', {
    onClick: (event) => {
        event?.preventDefault();
        navigate(RouterPages.CHAT);
    }
})

export class ProfilePage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: ProfilePageProps) {
        tagName = 'main';

        super(tagName, {
            ...props,
            username: 'Егор',
            classNames: [ 'page-flex' ],
            avatar,
            disabledForm: true,
            inputs: configureComponentsArray(InputComponent, contextMock.profile.inputs, { classNames: [ 'profile-page_input' ] }),
            links: configureComponentsArray(LinkComponent, contextMock.profile.links),
            backLink
        })
    }

    render() {
        return this.compile(template);
    }
}
