export enum Routes {
	Error400 = '/400',
	Error500 = '/500',
	SignIn = '/auth',
	SignUp = '/register',
	Profile = '/profile',
	ChangeData = '/change-data',
	ChangePassword = '/change-password',
	Chat = '/'
}

// state

export type GlobalStateType = {
	chats?: Chat[];
	currentMessages?: MessageData[];
	messages?: Record<number, MessageData[]>;
	selectedChat?: Chat[] | null;
	user?: UserInfo;
}

// auth-api

export type SignupRequestData = {
	first_name: string,
	second_name: string,
	login: string,
	email: string,
	password: string,
	phone: string
}

export type SigninRequestData = {
	login: string,
	password: string
}

export type UserInfo = {
	id: number;
	first_name: string;
	second_name: string;
	email: string;
	login: string;
	phone: string;
	display_name: string;
	avatar: string;
}

// user-api

export type ChangeProfileRequestData = {
	first_name: string,
	second_name: string,
	display_name: string;
	login: string,
	email: string,
	phone: string
}

export type ChangePasswordRequestData = {
	oldPassword: string,
	newPassword: string
}

export type SearchUserRequestData = {
	login: string;
}

// chats-api

export type GetChatsRequestData = {
	offset?: number;
	limit?: number;
	title?: string;
}

export type Chat = {
	avatar: string;
	created_by: number;
	id: number;
	last_message: LastMessage;
	title: string;
	unread_count: number;
}

export interface ChatUser extends Omit<UserInfo, 'phone' | 'email'> {
	role?: string;
}

// messages-api

export type LastMessage = {
	content: string;
	time: string;
	user: {
		avatar: string;
		email: string;
		first_name: string;
		login: string;
		phone: string;
		second_name: string;
	};
}

export interface MessageData {
	chat_id: number;
	content: string;
	file?: {
		content_size: number;
		content_type: string;
		filename: string;
		id: number;
		path: string;
		upload_date: string;
		user_id: number;
	};
	time: string;
	type: string;
	user_id: string;
}
