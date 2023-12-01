import EventBus from './event-bus';
import { set } from '../utils/mydash';
import { getStateFromPath } from '../utils/mydash/getStateFromPath';

type State = {
	[key: string]: unknown
	// TODO: расширяем стейт
}

export enum StoreEvents {
	Updated = 'updated',
}

class Store extends EventBus {
	private _state: State = {};
	static _instance: Store;
	static STORE_NAME = 'globalStore'

	constructor() {
		if (Store._instance) {
			return Store._instance;
		}

		super();

		const savedState = localStorage.getItem(Store.STORE_NAME);
		this._state = savedState ? (JSON.parse(savedState) ?? {}) : {}

		Store._instance = this;

		this.on(StoreEvents.Updated, () => {
			localStorage.setItem(Store.STORE_NAME, JSON.stringify(this._state));
		})
	}

	getState(statePath?: string): State {
		if (!statePath) {
			return this._state;
		}

		return getStateFromPath(this._state, statePath) as State;
	}

	set(path: string, value: unknown) {
		set(this._state, path, value);

		try {
			this.emit(StoreEvents.Updated);
		} catch (error) {
			console.error(error);
		}

		return this;
	}

	removeState() {
		this._state = {};
		this.emit(StoreEvents.Updated);
	}
}

export default new Store();
