import Component, { Props } from '../../core/component';
import { template } from './template';
import { ButtonComponent } from '../button';
import crossIcon from './assets/cross-icon.svg';
import removeFromDOM from '../../core/utilities/removeFromDOM';

export type PopupComponentProps = {
    content?: unknown;
	button?: unknown;
} & Props;

const crossButton = new ButtonComponent('button', {
    iconButton: true,
    classNames: [ 'popup_cross-button' ],
    imageClass: 'popup_cross-icon',
    src: crossIcon,
    alt: 'Крестик закрытия',
    onClick: (event: Event | undefined) => {
        event?.preventDefault();

        removeFromDOM('modal');
    }
})

export class PopupComponent extends Component  {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: PopupComponentProps) {
        tagName = 'div';

        super(tagName, {
            ...props,
			closeButton: crossButton,
            classNames: [ 'popup' ]
        })
    }

    render() {
        return this.compile(template)
    }
}
