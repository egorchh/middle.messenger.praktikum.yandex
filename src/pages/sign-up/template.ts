// language=hbs
export const template = `
    <div class="card">
        <form name="sing-up">
            <fieldset>
                <legend class="visually-hidden">Форма регистрации</legend>
                {{{ inputs }}}
            </fieldset>
            {{{ button }}}
        </form>
        <div class="registration-page_link">
            {{{ link }}}
        </div>
    </div>
`;
