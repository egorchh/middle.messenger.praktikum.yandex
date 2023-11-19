import Component, { Props } from '../../core/component';
import { template } from './template';
import backIcon from './assets/back-icon.svg';

export type BackLinkComponentProps = {
    onClick?: (event?: Event) => void;
} & Props

export class BackLinkComponent extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: BackLinkComponentProps) {
        tagName = 'a';

        super(tagName, {
            linkText: 'назад',
            imageSrc: backIcon,
            classNames: [ 'link-component_back' ],
            events: {
                click: props.onClick || function () {}
            }
        })
    }

    render() {
        return this.compile(template);
    }
}
