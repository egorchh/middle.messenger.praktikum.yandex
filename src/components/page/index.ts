import Component from '../../core/component';
import { template } from './template';

export default class PageComponent extends Component {
    render() {
        return this.compile(template);
    }
}
