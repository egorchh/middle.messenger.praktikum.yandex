// language=hbs
export const template = `
    <h3 class="photo-picker-component_title">{{ title }}</h3>
    <div class="photo-picker-component_input">
        <label class="photo-picker-component_label" for="photo-picker_input">{{ label }}</label>
        {{{ inputField }}}
        <img class="photo-picker-component_placeholder visually-hidden" src="" width="100xp" height="100px" alt="Изображение: Аватар пользователя" />
    </div>
    {{{ button }}}
`;
