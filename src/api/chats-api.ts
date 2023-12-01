import { BaseApi } from './base-api';
import { GetChatsRequestData } from '../types';

class ChatsApi extends BaseApi {
	constructor() {
		super('/chats');
	}

	// действия с сущностью чата

	getChats(data: GetChatsRequestData) {
		return this.http.get('', { data });
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

	getUsersFromChat(chatId: number) {
		return this.http.get(`/${chatId}/users`);
	}

	// остальное

	changeChatAvatar(data: FormData) {
		return this.http.put('/avatar', { data });
	}

	getToken(chatId: number) {
		return this.http.post(`/token/${chatId}`);
	}
}

export default new ChatsApi();
