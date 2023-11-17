import Component from '../../../core/component';
import { template } from '../template';
import { ErrorTemplateComponent, LinkComponent } from '../../../components';
import { navigate } from '../../../router/router';
import { RouterPages } from '../../types';

export default class Error500Page extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
        super(tagName, {
            errorTemplate: new ErrorTemplateComponent(null, {
                code: '500',
                text: 'Упс, кажется что-то пошло не так. Приходите позже',
                link: new LinkComponent(null, {
                    linkText: 'Назад к чатам',
                    variant: 'primary',
                    size: 'l',
                    onClick: () => {
                        navigate(RouterPages.CHAT);
                    }
                })
            })
        })
    }

    render() {
        return this.compile(template);
    }
}
