// language=hbs
export const template = `
    <div class="profile-page_container">
        {{{ avatar }}}
        <p class="profile-page_container-username">{{ username }}</p>
        {{{ form }}}
        <ul class="profile-page_buttons">
            {{{ links }}}
        </ul>
        {{{ backLink }}}
    </div>
`;
