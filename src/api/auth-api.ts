import { BaseApi } from './base-api';
import type { SignupRequestData, SigninRequestData, UserInfo } from '../types';

class AuthApi extends BaseApi {
	constructor() {
		super('/auth');
	}

	signup(data: SignupRequestData) {
		return this.http.post('/signup', { data })
	}

	signin(data: SigninRequestData) {
		return this.http.post('/signin', { data })
	}

	logout() {
		return this.http.post('/logout');
	}

	getUserInfo() {
		return this.http.get('/user') as Promise<UserInfo>;
	}
}

export default new AuthApi();
