// language=hbs
export const template = `
    {{#if label}}
        <label class="input-component_label" for="{{ id }}">{{ label }}</label>
    {{/if}}
    {{{ inputField }}}
    {{#if error}}
        <p class="input-component_error-text">{{ error }}</p>
    {{/if}}
`;
