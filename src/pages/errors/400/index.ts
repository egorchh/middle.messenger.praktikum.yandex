import Component from '../../../core/component';
import { template } from '../template';
import ErrorTemplateComponent from '../../../components/error-template/error-template';
import LinkComponent from '../../../components/link/link';

type Error400PageProps = {
    errorTemplate?: Component
};

const link = new LinkComponent(null, {
    href: '/src/pages/chat/index.html',
    linkText: 'Назад к чатам'
});

export default class Error400Page extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: Error400PageProps) {
        props = {
            errorTemplate: new ErrorTemplateComponent(null, {
                code: '404',
                text: 'Кажется вы попали не туда, вернитесь назад и попробуйте снова',
                link
            })
        };

        super(tagName, props)
    }

    render() {
        return this.compile(template);
    }
}
