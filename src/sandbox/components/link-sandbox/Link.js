import Component from '../../../core/component.ts';
import { template } from './index.js';

export default class LinkSandbox extends Component {
    render() {
        return this.compile(template);
    }
}
