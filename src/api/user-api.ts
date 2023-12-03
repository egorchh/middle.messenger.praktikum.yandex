import { BaseApi } from './base-api';
import type {
	ChangePasswordRequestData,
	ChangeProfileRequestData,
	SearchUserRequestData
} from '../types';

class UserApi extends BaseApi {
	constructor() {
		super('/user');
	}

	changeProfileData(data: ChangeProfileRequestData) {
		return this.http.put('/profile', { data });
	}

	changeUserAvatar(data: FormData) {
		return this.http.put('/profile/avatar', { data });
	}

	changeUserPassword(data: ChangePasswordRequestData) {
		return this.http.put('/password', { data });
	}

	getUserById(userID: number) {
		return this.http.get(`/${userID}`);
	}

	searchForUsers(data: SearchUserRequestData) {
		return this.http.post('/search', { data });
	}
}

export default new UserApi();
