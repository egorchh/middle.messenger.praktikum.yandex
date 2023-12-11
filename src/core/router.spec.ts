import sinon from 'sinon';
import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import Component from './component.ts';
import { Router } from './router.ts';

const eventBusMock = {
	subscribe: sinon.fake(),
	emit: sinon.fake()
};

describe('Router', () => {
	const ComponentMock = class {
		getContent = sinon.fake.returns(document.createElement('template'));

		dispatchComponentDidMount = sinon.fake.returns(eventBusMock.emit(Component.EVENTS.FLOW_CDM));
	} as unknown as typeof Component;

	const html = '<!DOCTYPE html><html><body><div id="app"></div></body></html>';
	const { window: { sessionStorage } } = new JSDOM(html, { url: 'https://localhost' });

	afterEach(() => {
		Router.destroy();
	})

	it('should return router instance by use()', () => {
		const instance = Router.getInstance().use('/', ComponentMock);

		expect(instance).to.eq(Router.getInstance());
	});

	it('should render a page by start()', () => {
		Router.getInstance()
			.use('/', ComponentMock)
			.start(sessionStorage);

		expect(eventBusMock.emit.calledWith(Component.EVENTS.FLOW_CDM)).to.eq(true);
	});

	it('should redirect to /sign-in by go()', async () => {
		Router.getInstance()
			.use('/', ComponentMock)
			.start(sessionStorage);
		Router.getInstance().go('/sign-in', sessionStorage);

		expect(global.window.location.pathname).to.eq('/sign-in');
	});

	it('should redirect to /chats from /sign-in by back()', async () => {
		Router.getInstance()
			.use('/', ComponentMock)
			.start(sessionStorage);
		Router.getInstance().go('/sign-in', sessionStorage);
		Router.getInstance().go('/chats', sessionStorage);
		Router.getInstance().back();

		await new Promise<void>((resolve) => {
			window.addEventListener('popstate', () => {
				resolve();
			});
		});

		expect(global.window.location.pathname).to.eq('/sign-in');
	});

	it('should redirect to /sign-in from /chats by back() and to /chats again by forward()', () => {
		Router.getInstance()
			.use('/', ComponentMock)
			.start(sessionStorage);
		Router.getInstance().go('/sign-in', sessionStorage);
		Router.getInstance().go('/chats', sessionStorage);
		Router.getInstance().back();
		Router.getInstance().forward();

		expect(global.window.location.pathname).to.eq('/chats');
	});
});
