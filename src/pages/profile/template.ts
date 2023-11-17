// language=hbs
export const template = `
    <div class="profile-page_container">
        {{{ avatar }}}
        <p class="profile-page_container-username">{{ username }}</p>
        <form class="profile-page_form">
            <fieldset {{#if disabledForm }} disabled {{/if}}>
                <ul class="profile-page_inputs">
                    {{{ inputs }}}
                </ul>
            </fieldset>
        </form>
        <ul class="profile-page_buttons">
            {{{ links }}}
        </ul>
        {{{ backLink }}}
    </div>
`;
