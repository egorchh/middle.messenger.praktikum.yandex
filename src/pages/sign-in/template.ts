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
        {{{ form }}}
        <div class="auth-page_link">
            {{{ link }}}
        </div>
    </div>
`;
