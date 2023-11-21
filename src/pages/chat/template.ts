// language=hbs
export const template = `
    <aside class="sidebar">
        <!--     Поиск     -->
        <div class="sidebar_search">
            {{{ searchBar }}}
        </div>
        <!--     Список друзей     -->
        <ul class="sidebar_friends">
            {{{ friends }}}
        </ul>
        <!--      Всплывашка с профилем      -->
        {{{ bottomSheet }}}
    </aside>
    <section class="chat">
        <!--      Хедер чата      -->
        <div class="chat-header">
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
        </div>
        <!--      Тело чата      -->
        <div class="chat-body">
            <ul class="chat-body_messages">
                {{{ messages }}}
            </ul>
        </div>
        <!--      Ввод сообщения      -->
        {{{ messageInput }}}
    </section>
`;
