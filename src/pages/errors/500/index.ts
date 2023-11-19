import Component from '../../../core/component';
import { template } from '../template';
import { LinkComponent } from '../../../components';
import { navigate } from '../../../router/router';
import { RouterPages } from '../../types';

export default class Error500Page extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
		tagName = 'main';

        super(tagName, {
			code: '500',
			text: 'Упс, кажется что-то пошло не так. Приходите позже',
			link: new LinkComponent('a', {
				linkText: 'Назад к чатам',
				onClick: () => {
					navigate(RouterPages.CHAT);
				}
			}),
			classNames: [ 'page-flex' ]
        })
    }

    render() {
        return this.compile(template);
    }
}
