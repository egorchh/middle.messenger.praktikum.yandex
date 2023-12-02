import chatsApi from '../api/chats-api';
import store from '../core/store';
import { Chat, ChatUser } from '../types';
import { MessagesService } from './messages-service';

export class ChatService {
	static async addChat(title: string) {
		try {
			await chatsApi.addChat(title);
			await this.fetchChatsList();
		} catch (error) {
			store.set('chats.error', error);
		}
	}

	static async fetchChatsList() {
		try {
			const chats = await chatsApi.getChats({ limit: 50 });

			chats.map(async (chat: Chat) => {
				const { token } = await this.getToken(chat.id);
				await MessagesService.connect(chat.id, token);
			});

			store.set('chats', chats);
		} catch (error) {
			store.set('chats.error', error);
		}
	}

	static async deleteChat(chatId: number) {
		try {
			await chatsApi.deleteChat(chatId);
			store.set('selectedChat', undefined);
			await this.fetchChatsList();
		} catch (error) {
			store.set('chats.error', error);
		}
	}

	static async addUserToChat(chatId: number, userId: number[]) {
		try {
			await chatsApi.addUsersToChat(userId, chatId);
			await this.fetchChatsList();
		} catch (error) {
			store.set('chats.error', error);
		}
	}

	static async deleteUserFromChat(chatId: number, userId: number[]) {
		try {
			await chatsApi.deleteUsersFromChat(userId, chatId);
			await this.fetchChatsList();
		} catch (error) {
			store.set('chats.error', error);
		}
	}

	static selectChat(chatId: number) {
		const target: Chat | undefined = store.getState().chats?.find((chat) => chat.id === chatId);
		store.set('selectedChat', [ target ]);
		this.fetchUsersInChat(chatId);
	}

	static async fetchUsersInChat(chatId: number) {
		try {
			const chatMembers: ChatUser[] = await chatsApi.getUsersFromChat(chatId);
			const nonAdminMembers = chatMembers.filter((user) => user.role !== 'admin');
			store.set('selectedChat', [
				{
					...store.getState().selectedChat?.[0],
					members: nonAdminMembers
				}
			]);
		} catch (error) {
			store.set('chats.error', error);
		}
	}

	static async editChatAvatar(data: FormData) {
		try {
			const response = await chatsApi.changeChatAvatar(data);
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const { avatar, id } = response;

			const { chats, selectedChat } = store.getState();
			const updatedChats = chats?.map((chat) => (chat.id !== id
				? chat
				: {
					...chat,
					avatar
				}));

			if (updatedChats) {
				store.set('chats', updatedChats);
			}
			store.set('selectedChat', [
				{
					...selectedChat?.[0],
					avatar
				}
			]);
		} catch (error) {
			console.log(error, 'edit chat avatar error');
		}
	}

	static async getToken(chatId: number) {
		return chatsApi.getToken(chatId);
	}
}
