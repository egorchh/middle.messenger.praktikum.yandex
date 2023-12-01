import Component from './component';
import renderDOM from './utilities/render';
import { isDeepEqual } from '../utils/mydash';

class Route {
	private _pathname: string;
	private readonly _blockClass: typeof Component;
	private _block: null | Component;
	private _props: {
		rootQuery: string;
	};

	constructor(pathname: string, view: typeof Component, props: { rootQuery: string }) {
		this._pathname = pathname;
		this._blockClass = view;
		this._block = null;
		this._props = props;
	}

	public navigate(pathname: string) {
		if (this.match(pathname)) {
			this._pathname = pathname;
			this.render();
		}
	}

	public leave() {
		if (this._block) {
			this._block.hide();
		}
	}

	public match(pathname: string) {
		return isDeepEqual(pathname, this._pathname);
	}

	public render() {
		if (!this._block) {
			this._block = new this._blockClass();
			renderDOM(this._props.rootQuery, this._block);
			return;
		}

		this._block.show(this._props.rootQuery, renderDOM);
	}
}

export default Route;
