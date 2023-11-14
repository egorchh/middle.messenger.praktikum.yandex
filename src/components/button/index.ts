import Component, { Props } from '../../core/component';
import { template } from './template';

type ButtonComponentProps = {
    type: HTMLButtonElement['type'];
    text: string;
    disabled?: boolean;
    onClick?: (event?: Event) => void;
} & Props;

export class ButtonComponent extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: ButtonComponentProps) {
        super(tagName, {
            ...props,
            events: {
                click: props.onClick || (() => { })
            }
        });
    }

    render() {
        return this.compile(template);
    }
}
