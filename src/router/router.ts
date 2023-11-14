import * as Pages from '../pages';
import { RouterPages } from '../pages/types';
import renderDOM from '../utils/render';

type PageType = {
    name: string;
    page: typeof Pages.Error500Page | typeof Pages.Error400Page | typeof Pages.SignInPage;
}

const pages: PageType[] = [
    { name: RouterPages.ERROR_500, page: Pages.Error500Page },
    { name: RouterPages.ERROR_404, page: Pages.Error400Page },
    { name: RouterPages.SIGN_IN, page: Pages.SignInPage }
]

export const navigate = (page: string) => {
    const Component = pages.find((item) => item.name === page)?.page;

    if (!Component) return;

    const context: unknown = null;
    let rootTag: keyof HTMLElementTagNameMap | null | undefined = 'div';

    switch (page) {
        case RouterPages.ERROR_500:
            rootTag = null;
            break;
        case RouterPages.ERROR_404:
            rootTag = null;
            break;
        case RouterPages.SIGN_IN:
            break;
    }

    const resultComponent = context ? new Component(rootTag , context) : new Component(rootTag, {});

    renderDOM('app', resultComponent);
};
