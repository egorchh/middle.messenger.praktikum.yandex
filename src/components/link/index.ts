import Component from '../../core/component';
import { Routes } from '../../types';
import { Router } from '../../core/router';

export type LinkComponentProps = {
    linkText: string;
    variant?: 'exit' | 'primary';
    size?: 'l' | 'xl';
	onClick?: (event?: Event) => void;
	path: Routes;
}

export class LinkComponent extends Component  {
	constructor(tagName: keyof HTMLElementTagNameMap | null, props: LinkComponentProps) {
        tagName = 'a';

        const { variant = 'primary', size = 'l' } = props;

        super(tagName, {
            ...props,
            classNames: [ 'link-component', `link-${variant}`, `link-${size}` ],
            events: {
                click: props?.onClick ? props?.onClick : (event?: Event) => {
					event?.preventDefault();
					Router.getInstance().go(props.path)
				}
            }
        })
    }

    render() {
        return this.compile('{{ linkText }}');
    }
}
