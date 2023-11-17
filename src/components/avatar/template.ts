// language=hbs
export const template = `
        {{#if stub}}
            <div
                    class="avatar-component_stub"
                    style="width: {{ size }}px; height: {{ size }}px;"
            >
                {{#if stubSrc}}
                    <img
                            width="{{ size }}px"
                            height="{{ size }}px"
                            class="avatar-component_stub-icon"
                            src="{{ stubSrc }}"
                            alt="Иконка: заглушка"
                    >
                {{/if}}
            </div>
        {{else}}
            <img
                    class="avatar-component_image"
                    src="{{ src }}"
                    width="{{ size }}px"
                    height="{{ size }}px"
                    alt="Изображение: Изображение профиля"
            />
        {{/if}}
`;
