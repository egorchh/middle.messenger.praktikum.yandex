import ButtonSandbox from './components/button-sandbox/Button.js';
import renderDOM from '../utils/render';
import NavSandbox from './components/nav-sandbox/Nav.js';
import LinkSandbox from './components/link-sandbox/Link.js';
import PageSandbox from './components/page-sandbox/Page.js';
import LayoutSandbox from './components/layout-sandbox/Layout.js';

// const button = new ButtonSandbox({ className: 'button', child: 'HELLO MAFAKA' });
//
// renderDOM('app', button);
//
// setTimeout(() => {
//     button.setProps({
//         child: '<div>HELLO</div>'
//     });
// }, 1000);

const nav = new NavSandbox(
    'ul',
    {
        // items: [
        //     { url: '/', title: 'Главная страница' },
        //     { url: '/form', title: 'Страница формы' }
        // ],
        items: [
            new LinkSandbox('li', { url: '/', title: 'Главная страница', classNames: [ 'liClass' ], attributes: { id: 'sdsdsdsadsd' } }),
            new LinkSandbox('li', { url: '/form', title: 'Страница формы' })
        ],
        events: {
            click: e => {
                console.log('Nav link clicked');
                e.preventDefault();
                e.stopPropagation();
            }
        },
        classNames: [ 'ulClass' ],
        attributes: {
            ['data-ul']: '122313123'
        }
    }
)

const content = new PageSandbox(
    'div',
    {
        text: 'Некий текст содержимого страницы'
    }
)

console.log(nav.getContent())
console.log(content.getContent())

const page = new LayoutSandbox(
    'div',
    {
        nav,
        title: 'Заголовок мощщщный',
        content,
        classNames: [ 'class1', { class2: Math.random() > 0.5 } ],
        attributes: {
            id: '122313123'
        }
    }
)

window.page = page;
window.content = content;
window.changePageContent = () => {
    const newContent = new PageSandbox(
        'div',
        {
            text: 'Совсем другой текст вот так вот'
        }
    )

    page.setProps({ content: newContent })
}

renderDOM('app', page);
