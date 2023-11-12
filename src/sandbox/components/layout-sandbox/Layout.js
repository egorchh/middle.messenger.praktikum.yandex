import Component from '../../../utils/component.ts';
import { template } from './index.js';

export default class LayoutSandbox extends Component {
    render() {
        console.log('Layout render')
        return this.compile(template);
    }
}
