import { WebSocketEvents, WSTransport } from '../core/ws-transport';
import store from '../core/store';
import { ChatService } from './chat-service';
import { MessageData } from '../types';

export class MessagesService {
	private static transports: Map<number, WSTransport> = new Map();

	static async connect(chatId: number, token: string) {
		if (this.transports.has(chatId)) {
			return;
		}
		const userId = store.getState().user?.id;

		const transport = new WSTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
		this.transports.set(chatId, transport);

		await transport.connect();
		this.subscribe(transport, chatId);
		this.fetchOldMessages(chatId);
	}

	static async sendMessage(chatId: number, message: string) {
		const transport = this.transports.get(chatId);
		if (!transport) {
			throw new Error(`Чат ${chatId} не подключён`);
		}

		if (message) {
			transport.send({
				type: 'message',
				content: message
			});
		}
	}

	static fetchOldMessages(chatId: number) {
		const transport = this.transports.get(chatId);

		if (!transport) {
			throw new Error(`Чат ${chatId} не подключён`);
		}
		transport.send({
			type: 'get old',
			content: '0'
		});
	}

	static handleMessages(messages: MessageData | MessageData[], chatId: number) {
		const incomingMessages = Array.isArray(messages) ? messages.reverse() : [ messages ];
		const currentMessages = store.getState().messages?.[chatId] ?? [];

		store.set(`messages.${chatId}`, [ ...currentMessages, ...incomingMessages ], true);

		ChatService.fetchChatsList();
	}

	static subscribe(transport: WSTransport, chatId: number) {
		transport.on(WebSocketEvents.Message, (data) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			this.handleMessages(data, chatId);
		});
	}
}
