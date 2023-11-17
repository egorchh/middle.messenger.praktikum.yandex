// language=hbs
export const template = `
    <div class="change-data-page_container">
        <h1>Смена пароля</h1>
        <form name="change-password" class="change-data-page_form">
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
