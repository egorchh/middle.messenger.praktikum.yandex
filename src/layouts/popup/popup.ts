import { HelperOptions } from 'handlebars';

export default function tooltip(this: object, { fn }: HelperOptions): string {
    // language=hbs
    return `
        <div class="overlay"></div>
        <div class="popup">
            <button class="popup_cross-button">
                <img class="popup_cross-icon" src="/src/layouts/popup/assets/cross-icon.svg" alt="Иконка: Крестик закрытия" />
            </button>
            ${fn(this)}
        </div>
    `
}
