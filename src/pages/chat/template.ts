// language=hbs
export const template = `
    <aside class="sidebar">
        <!--     Поиск     -->
        <div class="sidebar_search">
            {{{ searchBar }}}
        </div>
        <!--     Список друзей     -->
        <ul class="sidebar_friends">
            {{{ chats }}}
        </ul>
        <!--      Всплывашка с профилем      -->
        {{{ bottomSheet }}}
    </aside>
    <section class="chat">
        <!--      Хедер чата      -->
        {{{ header }}}
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
