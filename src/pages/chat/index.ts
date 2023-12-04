import Component from '../../core/component';
import { template } from './template';
import { configureComponentsArray } from '../../core/utilities/configureComponentsArray';
import { ChatService } from '../../services/chat-service';
import store from '../../core/store';
import { Chat, GlobalStateType, MessageData, UserInfo } from '../../types';
import {
	BottomSheetComponent,
	ChatHeaderComponent,
	FriendComponent,
	MessageComponent,
	MessageInputComponent,
	SearchBarComponent
} from './components';
import { TextComponent } from '../../components/text';
import { connect } from '../../hocs/connect';
import { isEmpty } from '../../utils/mydash';

const searchBar = new SearchBarComponent('label', {
    onBlur: () => {
        // TODO: логика поиска по списку друзей (4 спринт)
    }
});

const bottomSheet = new BottomSheetComponent('div', {
    nickname: (store.getState('user') as UserInfo)?.['display_name']
});

const messageInput = new MessageInputComponent('div', {
    classNames: [ 'chat-form' ]
});

const header = new ChatHeaderComponent('div', {})

class ChatPage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
        tagName = 'main';

        super(tagName, {
            classNames: [ 'page-grid' ],
            searchBar,
			header,
            bottomSheet,
            messageInput
        });
    }

	componentDidMount() {
		super.componentDidMount();

		ChatService.fetchChatsList();
	}

	render() {
        return this.compile(template, this._props);
    }
}

const mapStateToProps = (state: GlobalStateType) => {
	const currentChatID = state.selectedChat?.[0]?.id

	const renderMessages = (messages?: MessageData[]) => {
		if (messages === undefined || isEmpty(messages)) {
			return [ new TextComponent('p', {
				text: 'Время начать общение',
				size: 'm',
				variant: 'gray',
				align: 'center',
				classNames: [ 'mt-10' ]
			}) ];
		}

		return configureComponentsArray<MessageData>(MessageComponent, messages, { classNames: [ 'chat-body_message' ] });
	};

	const renderChats = (chats?: Chat[]) => {
		if (chats === undefined || isEmpty(chats)) {
			return new TextComponent('p', {
				text: 'Чаты еще не добавлены',
				size: 'm',
				variant: 'gray',
				align: 'center',
				classNames: [ 'mt-15' ]
			})
		}

		return configureComponentsArray(
			FriendComponent,
			chats,
			{ classNames: [ 'sidebar_friends-person' ] }
		)
	}

	return {
		messages: renderMessages(state.messages?.[currentChatID!]),
		chats: renderChats(state.chats)
	}
};

export default connect(ChatPage, mapStateToProps);
