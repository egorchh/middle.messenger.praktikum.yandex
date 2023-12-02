import store, { StoreEvents } from '../core/store';
import Block from '../core/component';
import { isDeepEqual } from '../utils/mydash';
import { GlobalStateType } from '../types';

export const connect = (Component: typeof Block, mapStateToProps?: ((state: GlobalStateType, props?: any) => any)) => {
	return class extends Component {
		constructor(tagName: keyof HTMLElementTagNameMap | null | undefined, props: object = {}) {
			const state = mapStateToProps ? mapStateToProps(store.getState(), props) : store.getState();

			super(tagName, { ...props, ...state });

			store.on(StoreEvents.Updated, () => {
				const newState = mapStateToProps ? mapStateToProps(store.getState(), props) : store.getState();

				if (!isDeepEqual(state, newState)) {
					this.setProps({
						...newState
					});
				}
			});
		}
	} as unknown as typeof Block;
}
