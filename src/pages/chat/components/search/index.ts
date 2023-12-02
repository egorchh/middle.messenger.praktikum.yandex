import Component, { Props } from '../../../../core/component';
import { template } from './template';
import crossIcon from './assets/cross-icon.svg';
import searchIcon from './assets/search-icon.svg';
import { ButtonComponent, InputFieldComponent } from '../../../../components';

export type SearchBarComponentProps = {
    iconSize?: number;
    searchIconSrc?: string;
    value?: string;
    placeholder?: string;
    inputField?: typeof InputFieldComponent;
    crossButton?: ButtonComponent;
    onBlur?: (event: Event | undefined) => void;
} & Props;

const crossButton = new ButtonComponent('button', {
    iconButton: true,
    classNames: [ 'search-component_button' ],
    imageClass: 'search-component-icon cross-icon',
    iconSize: 15,
    src: crossIcon,
    alt: 'Крестик закрытия',
    onClick: (event: Event | undefined) => {
        event?.preventDefault();

        const input = document.getElementById('search-bar-component') as HTMLInputElement;

        input.value = '';
    }
})

class SearchBarComponent extends Component  {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: SearchBarComponentProps) {
        tagName = 'label';

        super(tagName, {
            ...props,
            crossButton,
            inputField: new InputFieldComponent('input', {
                classNames: [ 'search-component_input' ],
                attributes: {
                    id: 'search-bar-component',
                    type: 'text',
                    placeholder: 'Поиск',
                    value: props.value || '',
                    name: 'search-bar-input'
                },
                onBlur: props.onBlur || function () {}
            }),
            searchIconSrc: searchIcon,
            iconSize: 20,
            classNames: [ 'search-component' ]
        })
    }

    render() {
        return this.compile(template)
    }
}

export default SearchBarComponent;
