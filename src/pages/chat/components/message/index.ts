import Component, { Props } from '../../../../core/component';
import { template } from './template';
import { AvatarComponent } from '../../../../components';
import { GlobalStateType } from '../../../../types';
import { connect } from '../../../../hocs/connect';
import { convertTimeToHoursAndMinutes } from '../../../../utils/mydash/convertTimeToHoursAndMinutes';

export type MessageComponentProps = {
    variant?: 'own';
    avatar: typeof AvatarComponent;
    username: string;
    text: string;
    photoSrc: string;
    time: string;
	user_id?: number;
} & Props

class MessageComponent extends Component  {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: MessageComponentProps) {
        tagName = 'li';

        super(tagName, {
            ...props,
            username: props.username,
			content: props.content,
            photoSrc: props.photoSrc,
            time: props.time,
            avatar: new AvatarComponent('div', {
                stub: true,
                size: 30
            })
        })
    }

    render() {
        return this.compile(template);
    }
}

const mapStateToProps = (state: GlobalStateType, props: MessageComponentProps) => {
	const messageAuthorId = props.user_id;
	const userId = state.user?.id

	return {
		...props,
		variant: messageAuthorId === userId ? 'own' : undefined,
		time: convertTimeToHoursAndMinutes(props.time)
	};
}

export default connect(MessageComponent, mapStateToProps);
