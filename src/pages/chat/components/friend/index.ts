import Component, { Props } from '../../../../core/component';
import { template } from './template';
import { AvatarComponent } from '../../../../components';
import { Chat, GlobalStateType } from '../../../../types';
import { connect } from '../../../../hocs/connect';
import { ChatService } from '../../../../services/chat-service';

export type FriendComponentProps = {
    stub: boolean;
    avatarSize: number;
    avatar: typeof AvatarComponent;
	orderNumber?: number;
} & Chat & Props;

const EMPTY_MESSAGE_TEXT = 'Сообщений в чате пока нет'

class FriendComponent extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: FriendComponentProps) {
        tagName = 'li';

        super(tagName, {
            ...props,
			avatarComponent: new AvatarComponent('div', {
                size: 50,
                stub: props.stub
            }),
			events: {
				click: async (event?: Event) => {
					event?.preventDefault();

					await ChatService.selectChat(props.id);
				}
			}
        });
    }

	render() {
        return this.compile(template);
    }
}

const mapStateToProps = (state: GlobalStateType, props: FriendComponentProps) => {
	let chat;

	if (state?.chats && props?.orderNumber) {
		chat = state.chats[props.orderNumber]
	}

	return {
		...chat,
		stub: !!chat?.avatar,
		last_message: (chat?.last_message && typeof chat.last_message !== 'object') ? chat.last_message : EMPTY_MESSAGE_TEXT,
		numberOfUnreadMessages: chat?.unread_count
	}
}

export default connect(FriendComponent, mapStateToProps);
