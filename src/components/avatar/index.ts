import Component, { Props } from '../../core/component';
import { template } from './template';
import { connect } from '../../hocs/connect';
import { BASE_RESOURCES_URL } from '../../constants';

export type AvatarComponentProps = {
    stub?: boolean;
    stubSrc?: string;
    size: number;
    src?: string;
	flow?: 'user';
    onClick?: (event?: Event) => void;
} & Props

class AvatarComponent extends Component  {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: AvatarComponentProps) {
        tagName = 'div';

        super(tagName, {
            ...props,
            size: props.size || 24,
            events: {
                click: props.onClick || (() => {})
            }
        })
    }

    render() {
        return this.compile(template);
    }
}

const mapStateToProps = (state: any, props: AvatarComponentProps) => {
	const avatars: Record<string, string> = {}

	const userAvatar = `${BASE_RESOURCES_URL}${state.user.avatar}`;

	if (userAvatar) {
		avatars['user'] = userAvatar;
	}

	const shouldPlugBeRender = !Object.keys(avatars).length || !props.flow;

	return {
		...props,
		stub: shouldPlugBeRender,
		src: shouldPlugBeRender? undefined : avatars[props.flow || '']
	}
}

export default connect(AvatarComponent, mapStateToProps)
