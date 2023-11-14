import Component from '../core/component';

function render(query: string, component: Component) {
    const root = document.getElementById(query);

    if (root) {
        root.innerHTML = '';
        root.appendChild(component.getContent()!);
    }

    component.dispatchComponentDidMount();

    return root;
}

export default render;
