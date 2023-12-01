import { Routes } from '../../../types';
import { AuthService } from '../../../services/auth-service';

export const links = [
	{
		linkText: 'Изменить данные',
		path: Routes.ChangeData
	},
	{
		linkText: 'Изменить пароль',
		path: Routes.ChangePassword
	},
	{
		linkText: 'Выйти',
		variant: 'exit',
		onClick: async (event: Event | undefined) => {
			event?.preventDefault();
			await AuthService.logout();
		}
	}
]

export const inputs = [
	{ id: 'profile-email', placeholder: 'Почта', type: 'email', value: undefined, error: undefined, label: 'Почта', name: 'email', variant: 'profile' },
	{ id: 'profile-login', placeholder: 'Логин', type: 'text', value: undefined, error: undefined, label: 'Логин', name: 'login', variant: 'profile' },
	{ id: 'profile-name', placeholder: 'Имя', type: 'text', value: undefined, error: undefined, label: 'Имя', name: 'first_name', variant: 'profile' },
	{ id: 'profile-lastname', placeholder: 'Фамилия', type: 'text', value: undefined, error: undefined, label: 'Фамилия', name: 'second_name', variant: 'profile' },
	{ id: 'profile-nickname', placeholder: 'Имя в чате', type: 'text', value: undefined, error: undefined, label: 'Имя в чате', name: 'display_name', variant: 'profile' },
	{ id: 'profile-tel', placeholder: 'Номер телефона', type: 'tel', value: undefined, error: undefined, label: 'Телефон', name: 'phone', variant: 'profile' }
]
