import Component, { Props } from '../../core/component';
import { template } from './template';
import { ButtonComponent } from '../button';
import plusIcon from './assets/plus-icon.svg';
import arrowIcon from './assets/arrow-right.svg';
import { navigate } from '../../router/router';
import { RouterPages } from '../../pages/types';

export type BottomSheetComponentProps = {
    nickname: string;
} & Props;

const addUserIconButton = new ButtonComponent('button', {
    iconButton: true,
    src: plusIcon,
    iconSize: 20,
    imageClass: 'sheet-component_functions-icon',
    classNames: [ 'sheet-component_functions-button' ],
    onClick: () => {
        console.log('add user') // TODO: открытие тултипа
    }
});

const redirectIconButton = new ButtonComponent('button', {
    iconButton: true,
    src: arrowIcon,
    iconSize: 20,
    imageClass: 'sheet-component_functions-icon arrow-icon',
    classNames: [ 'sheet-component_functions-button' ],
    onClick: (event?: Event) => {
        event?.preventDefault();

        navigate(RouterPages.PROFILE);
    }
})

export class BottomSheetComponent extends Component  {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: BottomSheetComponentProps) {
        tagName = 'div';

        super(tagName, {
            ...props,
            classNames: [ 'sheet-component' ],
            addUserIconButton,
            redirectIconButton
        })
    }

    render() {
        return this.compile(template)
    }
}
