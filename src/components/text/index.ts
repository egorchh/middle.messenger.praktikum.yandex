import Component, { Props } from '../../core/component';

type TextVariant = 'primary' | 'gray' | 'accent' | 'error'
type TextSize = 's' | 'm' | 'l' | 'xl'
type TextAlign = 'start' | 'end' | 'center'

export type TextComponentProps = {
	text: string;
	variant?: TextVariant
	size?: TextSize
	align?: TextAlign
} & Props

export class TextComponent extends Component  {
	constructor(tagName: keyof HTMLElementTagNameMap | null, props: TextComponentProps) {
		tagName = 'p';

		const classNamesFromProps = props.classNames ? [ ...props.classNames ] : [];

		const { variant = 'primary', size = 'm', align = 'start' } = props;

		super(tagName, {
			...props,
			classNames: classNamesFromProps.concat([ 'text-component', `text-${variant}`, `text-${size}`, `text-${align}` ])
		})
	}

	render() {
		return this.compile('{{ text }}');
	}
}
