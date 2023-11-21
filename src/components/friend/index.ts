import Component, { Props } from '../../core/component';
import { template } from './template';
import { AvatarComponent } from '../avatar';

export type FriendComponentProps = {
    stub: boolean;
    avatarSize: number;
    avatar: AvatarComponent;
    name: string;
    lastMessage: string;
    numberOfUnreadMessages: number;
} & Props;



export class FriendComponent extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: FriendComponentProps) {
        tagName = 'li';

        super(tagName, {
            ...props,
            avatar: new AvatarComponent('div', {
                size: 50,
                stub: props.stub
            })
        });
    }

    render() {
        return this.compile(template);
    }
}
