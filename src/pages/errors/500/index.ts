import Component from '../../../core/component';
import { LinkComponent } from '../../../components';
import { Routes } from '../../../types';
import { template } from '../template';

export default class Error500Page extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
		tagName = 'main';

        super(tagName, {
			code: '500',
			text: 'Упс, кажется что-то пошло не так. Приходите позже',
			link: new LinkComponent('a', {
				linkText: 'Назад к чатам',
				path: Routes.Chat
			}),
			classNames: [ 'page-flex' ]
        })
    }

    render() {
        return this.compile(template);
    }
}
