import Component, { Props } from '../../core/component';

export type LinkComponentProps = {
    linkText: string;
    variant?: 'exit' | 'primary';
    size?: 'l' | 'xl';
    onClick?: (event?: Event) => void;
} & Props

export class LinkComponent extends Component  {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: LinkComponentProps) {
        tagName = 'a';

        const { variant = 'primary', size = 'l' } = props;

        super(tagName, {
            ...props,
            classNames: [ 'link-component', `link-${variant}`, `link-${size}` ],
            events: {
                click: props.onClick || function () {}
            }
        })
    }

    render() {
		console.log('render link')
		console.log(this._props)
        return this.compile('{{ linkText }}');
    }
}
