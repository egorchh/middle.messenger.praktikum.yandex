import Component from '../../../utils/component.ts';
import { template } from './index.js';

export default class ButtonSandbox extends Component {
    constructor(props) {
        super('button', props)
    }

    render() {
        return this.compile(template, this._props);
    }
}
