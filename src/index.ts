import { navigate } from './router/router';
import { RouterPages } from './pages/types';

const startMain = document.querySelector('.render-root');
const buttons = startMain?.querySelectorAll('button');

buttons?.forEach((button) => {
	button.addEventListener('click', (event?: Event) => {
		const buttonTargetId = (event?.target as HTMLButtonElement).id;

		switch (buttonTargetId) {
			case 'signin-render':
				navigate(RouterPages.SIGN_IN);
				break;
			case 'signup-render':
				navigate(RouterPages.SIGN_UP);
				break;
			case 'profile-render':
				navigate(RouterPages.PROFILE);
				break;
			case 'change-data-render':
				navigate(RouterPages.CHANGE_DATA);
				break;
			case 'change-password-render':
				navigate(RouterPages.CHANGE_PASSWORD);
				break;
			case 'chat-render':
				navigate(RouterPages.CHAT);
				break;
			default:
				return;
		}
	});
})

