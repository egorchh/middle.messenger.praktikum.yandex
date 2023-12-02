import Component, { Props } from '../../core/component';
import { template } from './template';
import AvatarComponent  from '../avatar';

export type MessageComponentProps = {
    variant?: 'own';
    avatar: typeof AvatarComponent;
    username: string;
    text: string;
    photoSrc: string;
    time: string;
} & Props

export class MessageComponent extends Component  {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: MessageComponentProps) {
        tagName = 'li';

        super(tagName, {
            ...props,
            username: props.username,
            text: props.text,
            photoSrc: props.photoSrc,
            time: props.time,
            avatar: new AvatarComponent('div', {
                stub: true,
                size: 30
            })
        })
    }

    render() {
        return this.compile(template);
    }
}
