// language=hbs
export const template = `
    <p class="chat-header_users">
        4 участника, 2 онлайн
    </p>
    <div class="chat-header_info">
        <div class="chat-header_info-text">
            {{{ chatAvatar }}}
            <p class="chat-header_info-title">Братцы кролики</p>
        </div>
        <p class="chat-header_info-description">45 минут назад</p>
    </div>
    <div class="chat-header_options">
        <button class="chat-header_options-button">
            <img class="chat-header_options-icon" width="20px" height="20px" src="/src/pages/chat/assets/kebab-icon.svg" alt="Иконка: Действия чата">
        </button>
    </div>
`;
