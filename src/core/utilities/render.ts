import Component from '../component';

function render(queryId: string, component: Component) {
    const root = document.getElementById(queryId);

    if (queryId === 'modal' && root) {
        root.innerHTML = '<div class="overlay"></div>';
        root.appendChild(component.getContent()!);
    } else if (root) {
        root.innerHTML = '';
        root.appendChild(component.getContent()!);
    }

    component.dispatchComponentDidMount();

    return root;
}

export default render;
