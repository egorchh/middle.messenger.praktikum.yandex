import { ChangePasswordRequestData, ChangeProfileRequestData, Routes } from '../types';
import store from '../core/store';
import { Router } from '../core/router';
import userApi from '../api/user-api';
import { AuthService } from './auth-service';

export class UserService {
	static async changeProfileData(data: ChangeProfileRequestData) {
		try {
			store.set('user.loading', true)
			store.set('user.error', false);
			const response = await userApi.changeProfileData(data);
			store.set('user', response);
			Router.getInstance().go(Routes.Profile);
		} catch (error) {
			store.set('user.error', error);
		} finally {
			store.set('user.loading', false);
		}
	}

	static async changePassword(data: ChangePasswordRequestData) {
		try {
			store.set('user.loading', true)
			store.set('user.error', false);
			await userApi.changeUserPassword(data);
			Router.getInstance().go(Routes.Profile);
		} catch (error) {
			store.set('user.error', error);
		} finally {
			store.set('user.loading', false);
		}
	}

	static async changeAvatar(data: FormData) {
		try {
			store.set('user.loading', true)
			store.set('user.error', false);
			await userApi.changeUserAvatar(data);
			await AuthService.fetchUser();
		} catch (error) {
			store.set('user.error', error);
		} finally {
			store.set('user.loading', false);
		}
	}

	static async getUserById(userId: number) {
		try {
			return await userApi.getUserById(userId);
		} catch (error) {
			console.log('Get user by id', error);
		}
	}
}
