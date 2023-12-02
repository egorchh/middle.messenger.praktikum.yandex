import Component, { Props } from '../../../../core/component';
import { template } from './template';
import { ButtonComponent, InputFieldComponent } from '../../../../components';
import emojiIcon from './assets/emoji.svg';
import airplaneIcon from './assets/paper-airplane.svg';
import paperclipIcon from './assets/paperclip.svg';


export type MessageInputComponentProps = {
    emojiIconButton?: ButtonComponent;
    paperclipIconButton?: ButtonComponent;
    inputField?: typeof InputFieldComponent;
    sendIconButton?: ButtonComponent;
} & Props;

const emojiIconButton = new ButtonComponent('button', {
    iconButton: true,
    src: emojiIcon,
    iconSize: 20,
    alt: 'Эмоджи',
    imageClass: 'chat-form_features-icon',
    classNames: [ 'chat-form_features-button' ],
    onClick: () => {
        console.log('emoji') // TODO: открытие тултипа
    }
});

const paperclipIconButton = new ButtonComponent('button', {
    iconButton: true,
    src: paperclipIcon,
    iconSize: 24,
    alt: 'Прикрепить файл',
    imageClass: 'chat-form_features-icon',
    classNames: [ 'chat-form_features-button' ],
    onClick: () => {
        console.log('add file') // TODO: открытие тултипа
    }
});

const sendIconButton = new ButtonComponent('button', {
    iconButton: true,
    src: airplaneIcon,
    iconSize: 24,
    type: 'submit',
    alt: 'Отправить сообщение',
    imageClass: 'chat-form_submit-icon',
    classNames: [ 'chat-form_submit' ],
    onClick: (event?: Event) => {
        event?.preventDefault();

        const input = document.getElementById('send-message-input') as HTMLInputElement;

        if (input.value) {
            console.log(input.value);
        }

        input.value = '';
    }
});

const inputField = new InputFieldComponent('input', {
    attributes: {
        id: 'send-message-input',
        type: 'text',
        name: 'send-message-input',
        placeholder: 'Введите сообщение...'
    },
    classNames: [ 'chat-form_input' ]
})

class MessageInputComponent extends Component  {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: MessageInputComponentProps) {
        tagName = 'div';

        super(tagName, {
            ...props,
            emojiIconButton,
            paperclipIconButton,
            sendIconButton,
            inputField
        })
    }

    render() {
        return this.compile(template);
    }
}

export default MessageInputComponent;
