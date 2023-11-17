import Component from '../../core/component';
import { template } from './template';

export class ErrorTemplateComponent extends Component {
    render() {
        return this.compile(template);
    }
}
