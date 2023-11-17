import Component, { Props } from '../../core/component';
import { template } from './template';

export type AvatarComponentProps = {
    stub?: boolean;
    stubSrc?: string;
    size: number;
    src?: string;
    onClick?: (event?: Event) => void;
} & Props

export class AvatarComponent extends Component  {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: AvatarComponentProps) {
        tagName = 'div';

        super(tagName, {
            ...props,
            size: props.size || 24,
            events: {
                click: props.onClick || (() => {})
            }
        })
    }

    render() {
        return this.compile(template);
    }
}
