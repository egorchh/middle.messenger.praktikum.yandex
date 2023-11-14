import Component from '../../../core/component';
import { template } from '../template';
import ErrorTemplateComponent from '../../../components/error-template/error-template';
import LinkComponent from '../../../components/link/link';

type Error500PageProps = {
    errorTemplate?: Component
};

const link = new LinkComponent(null, {
    href: '/src/pages/chat/index.html',
    linkText: 'Назад к чатам'
});

export default class Error500Page extends Component {
    constructor(tagName: keyof HTMLElementTagNameMap | null, props: Error500PageProps) {
        props = {
            errorTemplate: new ErrorTemplateComponent(null, {
                code: '500',
                text: 'Упс, кажется что-то пошло не так. Приходите позже',
                link
            })
        };

        super(tagName, props)
    }

    render() {
        return this.compile(template);
    }
}
