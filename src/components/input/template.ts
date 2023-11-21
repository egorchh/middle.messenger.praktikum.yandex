// language=hbs
export const template = `
    {{#if label}}
        <label class="{{#if variant }}{{ variant }}-{{/if}}input-component_label" for="{{ id }}">{{ label }}</label>
    {{/if}}
    {{{ inputField }}}
    {{#if error}}
        <p id="error-text-native" class="{{#if variant }}{{ variant }}-{{/if}}input-component_error-text">{{ error }}</p>
    {{/if}}
    <p id="error-text-placeholder{{#if orderNumber }}-{{ orderNumber }}{{/if}}" class="visually-hidden"></p>
`;
