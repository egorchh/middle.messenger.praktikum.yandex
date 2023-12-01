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
	offset: number;
	limit: number;
	title: string;
}
