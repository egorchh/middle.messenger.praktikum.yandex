// language=hbs
export const template = `
    <div class="{{#if variant}}{{ variant }}{{else}}friend{{/if}}-message-component">
        <div class="{{#if variant}}{{ variant }}{{else}}friend{{/if}}-message-component_avatar">
            {{{ avatar }}}
        </div>
        <div class="{{#if variant}}{{ variant }}{{else}}friend{{/if}}-message-component_bubble">
            <p class="{{#if variant}}{{ variant }}{{else}}friend{{/if}}-message-component_bubble-username">
                {{ username }}
            </p>
            <p class="{{#if variant}}{{ variant }}{{else}}friend{{/if}}-message-component_bubble-text">
                {{ content }}
            </p>
            {{#if photoSrc}}
                <img class="message_photo" src="{{ photoSrc }}" alt="Изображение: Фото в чате"/>
            {{/ if}}
            <p class="{{#if variant}}{{ variant }}{{else}}friend{{/if}}-message-component_bubble-time">{{ time }}</p>
        </div>
    </div>
`;
