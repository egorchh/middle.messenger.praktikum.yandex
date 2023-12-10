import Component from '../../core/component';
import { template } from './template';
import backIcon from './assets/back-icon.svg';
import { Router } from '../../core/router';
import { Routes } from '../../types';

export class BackLinkComponent extends Component {
	constructor({ path }: { path?: Routes }, tagName?: keyof HTMLElementTagNameMap | null) {
        tagName = 'a';

        super(tagName, {
            linkText: 'назад',
            imageSrc: backIcon,
            classNames: [ 'link-component_back' ],
            events: {
                click: (event?: Event) => {
					event?.preventDefault();

					if (path) {
						Router.getInstance().go(path);
					}
				}
            }
        })
    }

    render() {
        return this.compile(template);
    }
}
