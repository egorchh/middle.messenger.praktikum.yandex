import Component, { Props } from '../../../../core/component';
import { template } from './template';
import { Chat, GlobalStateType } from '../../../../types';
import { connect } from '../../../../hocs/connect';
import { ButtonComponent, PopupComponent } from '../../../../components';
import trashBinIcon from '../../assets/trash-bin-icon.svg';
import addUserIcon from '../../assets/user-plus-icon.svg';
import deleteUserIcon from '../../assets/user-minus-icon.svg';
import { ChatService } from '../../../../services/chat-service';
import InputComponent from '../../../../components/input';
import removeFromDOM from '../../../../core/utilities/removeFromDOM';
import renderDOM from '../../../../core/utilities/render';

export type ChatHeaderComponentProps = Props & Partial<Chat>;

class ChatHeaderComponent extends Component  {
	constructor(tagName: keyof HTMLElementTagNameMap | null, props: ChatHeaderComponentProps) {
		tagName = 'div';

		super(tagName, {
			...props,
			users: 3,
			onlineUsersCount: 3,
			lastActivityTime: '5 минут назад',
			addUserButton: new ButtonComponent('div', {
				iconButton: true,
				src: addUserIcon,
				iconSize: 24,
				alt: 'Добавить пользователя к чату',
				imageClass: 'chat-form_features-icon',
				classNames: [ 'chat-form_features-button' ],
				onClick: () => {
					const ADD_USER_ID_INPUT = 'add-user-id_input';

					const popup = new PopupComponent('div', {
						content: new InputComponent('div', {
							id: ADD_USER_ID_INPUT,
							label: 'Введите ID пользователя'
						}),
						button: new ButtonComponent('div', {
							text: 'Добавить пользователя',
							classNames: [ 'mt-15' ],
							onClick: async () => {
								const inputValue = (document.getElementById(ADD_USER_ID_INPUT) as HTMLInputElement).value;

								try {
									if (props.id && inputValue) {
										await ChatService.addUserToChat(props.id, [ Number(inputValue) ]);
										removeFromDOM('modal');
									}
								} catch (error) {
									console.log(error)
								}
							}
						})
					})

					renderDOM('modal', popup);
				}
			}),
			deleteUserButton: new ButtonComponent('div', {
				iconButton: true,
				src: deleteUserIcon,
				iconSize: 24,
				alt: 'Удалить пользователя из чата',
				imageClass: 'chat-form_features-icon',
				classNames: [ 'chat-form_features-button' ],
				onClick: () => {
					const DELETE_USER_ID_INPUT = 'delete-user-id_input';

					const popup = new PopupComponent('div', {
						content: new InputComponent('div', {
							id: DELETE_USER_ID_INPUT,
							label: 'Введите ID пользователя'
						}),
						button: new ButtonComponent('div', {
							text: 'Удалить пользователя',
							classNames: [ 'mt-15' ],
							onClick: async () => {
								const inputValue = (document.getElementById(DELETE_USER_ID_INPUT) as HTMLInputElement).value;

								try {
									if (props.id && inputValue) {
										await ChatService.deleteUserFromChat(props.id, [ Number(inputValue) ]);
										removeFromDOM('modal');
									}
								} catch (error) {
									console.log(error)
								}
							}
						})
					})

					renderDOM('modal', popup);
				}
			}),
			deleteChatButton: new ButtonComponent('div', {
				iconButton: true,
				src: trashBinIcon,
				iconSize: 24,
				alt: 'Удалить чат',
				imageClass: 'chat-form_features-icon',
				classNames: [ 'chat-form_features-button' ],
				onClick: async () => {
					try {
						if (props.id) {
							await ChatService.deleteChat(props.id);
						}
					} catch (error) {
						console.log('Delete chat error: ', error)
					}
				}
			}),
			classNames: [ 'chat-header' ]
		})
	}

	render() {
		return this.compile(template)
	}
}

const mapStateToProps = (state: GlobalStateType) => {
	const data = state?.selectedChat?.[0];

	return {
		title: data?.title,
		id: data?.id,
		...data
	}
};

export default connect(ChatHeaderComponent, mapStateToProps);
