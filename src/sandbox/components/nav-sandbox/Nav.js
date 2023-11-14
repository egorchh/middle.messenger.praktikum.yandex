import Component from '../../../core/component.ts';
import { template } from './index.js';

export default class NavSandbox extends Component {
    render() {
        return this.compile('{{{ items }}}');
    }

    addEvents() {
        this._element.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', this._props.events.click);
        });
    }
}
