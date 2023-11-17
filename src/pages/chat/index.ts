import Component, { Props } from '../../core/component';
import { template } from './template';
import {
	BottomSheetComponent,
	FriendComponent,
	MessageComponent,
	MessageInputComponent,
	SearchBarComponent
} from '../../components';
import { configureComponentsArray } from '../../utils/configureComponentsArray';
import contextMock from '../../__fixtures__/contextMock';

type ChatPageProps = {
    searchBar?: SearchBarComponent;
    friends?: FriendComponent[];
    bottomSheet?: BottomSheetComponent;
    chatAvatar?: unknown;
    messages?: MessageComponent;
} & Props;

const searchBar = new SearchBarComponent('label', {
    onBlur: () => {
        // TODO: логика поиска по списку друзей
    }
});

const bottomSheet = new BottomSheetComponent('div', {
    nickname: 'egorch_'
});

const messageInput = new MessageInputComponent('div', {
    classNames: [ 'chat-form' ]
});

export class ChatPage extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: ChatPageProps) {
        tagName = 'main';

        super(tagName, {
            ...props,
            classNames: [ 'page-grid' ],
            searchBar,
            friends: configureComponentsArray(FriendComponent, contextMock.chat.friends, { classNames: [ 'sidebar_friends-person' ] }),
            bottomSheet,
            messages: configureComponentsArray(MessageComponent, contextMock.chat.messages, { classNames: [ 'chat-body_message' ] }),
            messageInput
        })
    }

    render() {
        return this.compile(template);
    }
}