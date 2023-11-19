// language=hbs
export const template = `
    <img
            class="search-component_icon"
            width="{{ iconSize }}px"
            height="{{ iconSize }}px"
            src="{{ searchIconSrc }}"
            alt="Иконка: Лупа"
    >
    {{{ inputField }}}
    {{{ crossButton }}}
`;
