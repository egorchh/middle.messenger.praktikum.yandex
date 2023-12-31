import Component from './component';
import Route from './route';

export class Router {
	protected routes: Route[] = [];
	private static __instance: Router | null;
	history: History = window.history;
	private _currentRoute: Route | null = null;
	private readonly _rootQuery: string = ''

	constructor(rootQuery: string) {
		if (Router.__instance) {
			return Router.__instance;
		}

		this.routes = [];
		this.history = window.history;
		this._currentRoute = null;
		this._rootQuery = rootQuery;

		Router.__instance = this;
	}

	static getInstance() {
		if (!this.__instance) {
			this.__instance = new Router('app');
		}
		return this.__instance;
	}

	static destroy() {
		this.__instance = null;
	}

	public use(pathname: string, block: typeof Component) {
		const route = new Route(pathname, block, { rootQuery: this._rootQuery });
		this.routes.push(route);
		return this;
	}

	public start(testSessionStorage?: Storage) {
		window.onpopstate = ((event: Event) => {
			const target = event.currentTarget as Window;
			this._onRoute(target.location.pathname);
		});

		this._onRoute(window.location.pathname, testSessionStorage);
	}

	private _onRoute(pathname: string, testSessionStorage?: Storage) {
		const route = this.getRoute(pathname);

		if (!route) {
			return;
		}

		if (this._currentRoute && this._currentRoute !== route) {
			this._currentRoute.leave();
		}

		this._currentRoute = route;

		if (testSessionStorage) {
			testSessionStorage.setItem('sessionRoute', window.location.pathname);
		} else {
			sessionStorage.setItem('sessionRoute', window.location.pathname);
		}

		route.render();
	}

	public go(pathname: string, testSessionStorage?: Storage) {
		this.history.pushState({}, '', pathname);
		this._onRoute(pathname, testSessionStorage);
	}

	public back() {
		this.history.back();
	}

	public forward() {
		this.history.forward();
	}

	getRoute(pathname: string) {
		return this.routes.find(route => route.match(pathname));
	}
}
