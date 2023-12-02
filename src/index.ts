// styles
import './styles/index.scss';

// core
import router from './core/router';
import store from './core/store';
import { Routes } from './types';

// services
import { AuthService } from './services/auth-service';

// pages
import {
	Error400Page,
	Error500Page,
	SignInPage,
	SignUpPage,
	ProfilePage,
	ChangePasswordPage,
	ChangeDataPage,
	ChatPage
} from './pages';

window.addEventListener('popstate', () => {
	router.start();
});

window.addEventListener('DOMContentLoaded', async () => {
	router
		.use(Routes.Error500, Error500Page)
		.use(Routes.Error400, Error400Page)
		.use(Routes.SignUp, SignUpPage)
		.use(Routes.SignIn, SignInPage)
		.use(Routes.Profile, ProfilePage)
		.use(Routes.ChangePassword, ChangePasswordPage)
		.use(Routes.ChangeData, ChangeDataPage)
		.use(Routes.Chat, ChatPage)

	// try {
		await AuthService.fetchUser();

		// const currentPath = sessionStorage.getItem('sessionRoute');
		//
		// if (currentPath) {
		// 	sessionStorage.removeItem('sessionRoute');
		// }

		const userData = store.getState('user');
		const inAuthorized = Object.keys(userData).length && !Object.keys(userData).includes('reason');

		if (inAuthorized) {
			router.go(
				// currentPath ||
				Routes.Chat
			);
		} else {
			router.go(Routes.SignIn);
		}
	// } catch (error) {
	// 	console.log(error);
	// 	router.go(Routes.SignIn);
	// }
});
