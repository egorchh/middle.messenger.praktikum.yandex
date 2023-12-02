import { BaseApi } from './base-api';
import { Chat, ChatUser, GetChatsRequestData } from '../types';

class ChatsApi extends BaseApi {
	constructor() {
		super('/chats');
	}

	// действия с сущностью чата

	getChats(data: GetChatsRequestData): Promise<Chat[]> {
		return this.http.get('', { data }) as Promise<Chat[]>;
	}

	addChat(title: string) {
		return this.http.post('/', { data: { title } });
	}

	deleteChat(chatId: number) {
		return this.http.delete('/', { data: { chatId } });
	}

	// действия с сущностью юзера в сущности чата

	addUsersToChat(users: number[], chatId: number) {
		return this.http.put('/users', { data: { users, chatId } });
	}

	deleteUsersFromChat(users: number[], chatId: number) {
		return this.http.delete('/users', { data: { users, chatId } });
	}

	getUsersFromChat(chatId: number): Promise<ChatUser[]> {
		return this.http.get(`/${chatId}/users`) as Promise<ChatUser[]>;
	}

	// остальное

	changeChatAvatar(data: FormData) {
		return this.http.put('/avatar', { data });
	}

	getToken(chatId: number): Promise<{ token: string }> {
		return this.http.post(`/token/${chatId}`) as Promise<{ token: string }>;
	}
}

export default new ChatsApi();
