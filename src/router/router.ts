import * as Pages from '../pages';
import { RouterPages } from '../pages/types';
import renderDOM from '../utils/render';

type PageType = {
    name: string;
    page:
        typeof Pages.Error500Page |
        typeof Pages.Error400Page |
        typeof Pages.SignInPage |
        typeof Pages.SignUpPage |
        typeof Pages.ProfilePage |
        typeof Pages.ChangePasswordPage |
        typeof Pages.ChangeDataPage |
        typeof Pages.ChatPage;
}

const pages: PageType[] = [
    { name: RouterPages.ERROR_500, page: Pages.Error500Page },
    { name: RouterPages.ERROR_404, page: Pages.Error400Page },
    { name: RouterPages.SIGN_IN, page: Pages.SignInPage },
    { name: RouterPages.SIGN_UP, page: Pages.SignUpPage },
    { name: RouterPages.PROFILE, page: Pages.ProfilePage },
    { name: RouterPages.CHANGE_DATA, page: Pages.ChangeDataPage },
    { name: RouterPages.CHANGE_PASSWORD, page: Pages.ChangePasswordPage },
    { name: RouterPages.CHAT, page: Pages.ChatPage }
]

export const navigate = (page: string) => {
    const Component = pages.find((item) => item.name === page)?.page;

    if (!Component) return;

    renderDOM('app', new Component('div'));
};
