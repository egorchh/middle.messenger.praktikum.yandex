import { JSDOM } from 'jsdom';
import { afterEach, beforeEach } from 'mocha';
import { expect } from 'chai';
import { Router } from './router.ts';
import { SignInPage, SignUpPage } from '../pages';

describe('Router', () => {
	const HTML_MOCK = '<!DOCTYPE html><html lang="ru"><body><div id="app"></div></body></html>';

	beforeEach(() => {
		const { window } = new JSDOM(HTML_MOCK, { url: 'https://localhost' });
		global.document! = window.document;
	});

	afterEach(() => {
		Router.destroy();
		window.history.replaceState({}, '', '/');
	});

	it('should render content on a given route', () => {
		Router.getInstance().use('/', SignInPage).use('/sign-up', SignUpPage);
		Router.getInstance().start();
		Router.getInstance().go('/sign-up');
		const appElement = global.document.querySelector('#app');
		const heading = appElement?.querySelector('h2');
		expect(heading).not.to.be.a('null');
		expect(heading!.textContent).to.equal('Регистрация аккаунта');
	});

});
