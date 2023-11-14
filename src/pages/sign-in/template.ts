// language=hbs
export const template = `
    <div class="card">
        <div class="auth-page_hello">
            <img
                    width="190px"
                    height="63px"
                    src="{{ imageSrc }}"
                    alt="Изображение: 'Привет'"
            />
        </div>
        <form name="sing-in">
            <fieldset class="auth-page_fieldset">
                <legend class="visually-hidden">Форма авторизации</legend>
                {{{ inputs }}}
            </fieldset>
            {{{ button }}}
        </form>
        {{{ link }}}
    </div>
`;
