import { Routes, SigninRequestData, SignupRequestData, UserInfo } from '../types';
import authApi from '../api/auth-api';
import store from '../core/store';
import { Router } from '../core/router';

export class AuthService {
	static async signin(data: SigninRequestData) {
		try {
			store.set('user.error', false);
			store.set('user.loading', true);
			await authApi.signin(data);
			await this.fetchUser();
			Router.getInstance().go(Routes.Chat);
		} catch (error) {
			store.set('user.error', error);
		} finally {
			store.set('user.loading', false);
		}
	}

	static async signup(data: SignupRequestData) {
		try {
			store.set('user.error', false);
			store.set('user.loading', true);
			await authApi.signup(data);
			await this.fetchUser();
			Router.getInstance().go(Routes.Chat);
		} catch (error) {
			store.set('user.error', error);
		} finally {
			store.set('user.loading', false);
		}
	}

	static async logout() {
		try {
			store.set('user.error', false);
			store.set('user.loading', true);
			await authApi.logout();
			Router.getInstance().go(Routes.SignIn);
		} catch (error) {
			store.set('user.error', error);
		} finally {
			store.set('user.loading', false);
		}
	}

	static async fetchUser() {
		const user = await authApi.getUserInfo();
		store.set('user', user as UserInfo);
	}
}
