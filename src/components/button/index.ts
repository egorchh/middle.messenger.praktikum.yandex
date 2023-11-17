import Component, { Props } from '../../core/component';
import { template } from './template';

export type ButtonComponentProps = {
    type?: HTMLButtonElement['type'];
    text?: string;
    disabled?: boolean;
    iconButton?: boolean;
    imageClass?: string;
    iconSize?: number;
    src?: string;
    alt?: string;
    onClick?: (event?: Event) => void;
} & Props;

export class ButtonComponent extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: ButtonComponentProps) {
        super(tagName, {
            ...props,
            events: {
                click: props.onClick || (() => {})
            }
        });
    }

    render() {
        return this.compile(template);
    }
}
