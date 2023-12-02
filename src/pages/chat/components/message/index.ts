import Component, { Props } from '../../../../core/component';
import { template } from './template';
import { AvatarComponent }  from '../../../../components';

export type MessageComponentProps = {
    variant?: 'own';
    avatar: typeof AvatarComponent;
    username: string;
    text: string;
    photoSrc: string;
    time: string;
} & Props

// export interface MessageData {
// 	chat_id: number;
// 	content: string;
// 	file?: {
// 		content_size: number;
// 		content_type: string;
// 		filename: string;
// 		id: number;
// 		path: string;
// 		upload_date: string;
// 		user_id: number;
// 	};
// 	time: string;
// 	type: string;
// 	user_id: string;
// }

class MessageComponent extends Component  {
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

export default MessageComponent;
