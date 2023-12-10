import Component, { Props } from '../../../../core/component';
import { template } from './template';
import plusIcon from './assets/plus-icon.svg';
import arrowIcon from './assets/arrow-right.svg';
import { Router } from '../../../../core/router';
import { Routes } from '../../../../types';
import { PopupComponent, InputComponent, ButtonComponent } from '../../../../components';
import renderDOM from '../../../../core/utilities/render';
import { ChatService } from '../../../../services/chat-service';
import removeFromDOM from '../../../../core/utilities/removeFromDOM';

export type BottomSheetComponentProps = {
    nickname: string;
} & Props;

const addUserIconButton = new ButtonComponent('button', {
    iconButton: true,
    src: plusIcon,
    iconSize: 20,
    imageClass: 'sheet-component_functions-icon',
    classNames: [ 'sheet-component_functions-button' ],
    onClick: async (event?: Event) => {
		event?.preventDefault();

		const popup = new PopupComponent('div', {
			content: new InputComponent('div', {
				id: 'chat-name_input',
				label: 'Введите название чата'
			}),
			button: new ButtonComponent('div', {
				text: 'Создать чат',
				classNames: [ 'mt-15' ],
				onClick: async () => {
					const inputValue = (document.getElementById('chat-name_input') as HTMLInputElement).value;

					try {
						await ChatService.addChat(inputValue);
						removeFromDOM('modal');
					} catch (error) {
						console.log(error)
					}
				}
			})
		})

		renderDOM('modal', popup);

        // console.log('add chat') // TODO: открытие тултипа с кнопкой "Добавить чат" (4 спринт)
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

		Router.getInstance().go(Routes.Profile);
    }
})

class BottomSheetComponent extends Component  {
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

export default BottomSheetComponent;
