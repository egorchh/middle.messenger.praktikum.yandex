// language=hbs
export const template = `
    {{#if back}}
        <a class="link-component_back" href="{{ href }}">
            <img class="link-component_back-icon" src="/src/components/link/assets/back-icon.svg" alt="Иконка: Стрелочка назад" />
            <p class="link-component_back-text">назад</p>
        </a>
    {{else}}
        <a href="{{ href }}" class="link-component link-{{ variant }} link-{{ size }}">
            {{ linkText }}
        </a>
    {{/if}}
`;
