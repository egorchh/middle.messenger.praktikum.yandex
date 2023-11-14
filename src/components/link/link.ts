import Component from '../../core/component';
import { template } from './template';

export default class LinkComponent extends Component {
    render() {
        return this.compile(template);
    }
}
