import Component from '../../core/component';
import { template } from './template';
import { configureComponentsArray } from '../../core/utilities/configureComponentsArray';
import { chatData } from './model/props';
import { ChatService } from '../../services/chat-service';
import store from '../../core/store';
import { Chat, UserInfo } from '../../types';
import {
	ChatHeaderComponent,
	FriendComponent,
	MessageInputComponent,
	SearchBarComponent,
	MessageComponent,
	BottomSheetComponent
} from './components';

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

const header = new ChatHeaderComponent('div')

class ChatPage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
        tagName = 'main';

        super(tagName, {
            classNames: [ 'page-grid' ],
            searchBar,
			header: header,
			chats: configureComponentsArray(FriendComponent, store.getState('chats') as Chat[], { classNames: [ 'sidebar_friends-person' ] }),
            bottomSheet,
            messages: configureComponentsArray(MessageComponent, chatData.messages, { classNames: [ 'chat-body_message' ] }),
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

export default ChatPage;
