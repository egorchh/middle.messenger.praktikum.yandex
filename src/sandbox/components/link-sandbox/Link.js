import Component from '../../../utils/component.ts';
import { template } from './index.js';

export default class LinkSandbox extends Component {
    render() {
        console.log('Link render')
        return this.compile(template);
    }
}
