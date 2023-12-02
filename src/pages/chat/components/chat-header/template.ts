// language=hbs
export const template = `
    <p class="chat-header_users">
	{{{ users }}} уч.{{#if onlineUsersCount}}, {{{ onlineUsersCount }}} онлайн{{/if}}
    </p>
    <div class="chat-header_info">
        <div class="chat-header_info-text">
            {{{ chatAvatar }}}
            <p class="chat-header_info-title">{{ title }}</p>
        </div>
        <p class="chat-header_info-description">{{ lastActivityTime }}</p>
    </div>
    <div class="chat-header_options">
        {{{ addUserButton }}}
        {{{ deleteUserButton }}}
        {{{ deleteChatButton }}}
    </div>
`;
