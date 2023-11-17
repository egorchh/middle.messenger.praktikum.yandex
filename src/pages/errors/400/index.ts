import Component from '../../../core/component';
import { ErrorTemplateComponent, LinkComponent } from '../../../components';
import { template } from '../template';
import { navigate } from '../../../router/router';
import { RouterPages } from '../../types';

export default class Error400Page extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null) {
        super(tagName, {
            errorTemplate: new ErrorTemplateComponent(null, {
                code: '404',
                text: 'Кажется вы попали не туда, вернитесь назад и попробуйте снова',
                link: new LinkComponent('a', {
                    linkText: 'Назад к чатам',
                    variant: 'primary',
                    size: 'l',
                    onClick: () => {
                        navigate(RouterPages.CHAT);
                    }
                })
            })
        });
    }

    render() {
        return this.compile(template);
    }
}
