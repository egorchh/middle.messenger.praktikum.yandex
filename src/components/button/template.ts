// language=hbs
export const template = `
    {{#if iconButton}}
        <img class="{{ imageClass }}" src="{{ src }}" alt="Иконка: {{ alt }}" height="{{ iconSize }}px" width="{{ iconSize }}px" />
    {{else}}
        <button class="button-component" type="{{ type }}" {{#if disabled}} disabled {{/if}} >
            {{ text }}
        </button>
    {{/if}}
`;
