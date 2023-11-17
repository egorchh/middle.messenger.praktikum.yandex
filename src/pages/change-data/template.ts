// language=hbs
export const template = `
    <div class="change-data-page_container">
        <h1>Смена данных профиля</h1>
        <form class="change-data-page_form" method="POST">
            <fieldset>
                <ul class="change-data-page_inputs">
                    {{{ inputs }}}
                </ul>
            </fieldset>
            {{{ button }}}
        </form>
        {{{ backLink }}}
    </div>
`;
