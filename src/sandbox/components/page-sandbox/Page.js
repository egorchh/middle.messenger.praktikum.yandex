import Component from '../../../utils/component.ts';
import { template } from './index.js';

export default class PageSandbox extends Component {
    render() {
        console.log('Page render')
        return this.compile(template);
    }
}
