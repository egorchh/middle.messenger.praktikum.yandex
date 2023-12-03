import Component from '../../../core/component';
import { LinkComponent } from '../../../components';
import { template } from '../template';
import { Routes } from '../../../types';

export default class Error400Page extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
		tagName = 'main';

        super(tagName, {
			code: '404',
			text: 'Кажется вы попали не туда, вернитесь назад и попробуйте снова',
			link: new LinkComponent('a',{
				linkText: 'Назад к чатам',
				path: Routes.Chat
			}),
			classNames: [ 'page-flex' ]
        });
    }

    render() {
        return this.compile(template);
    }
}
