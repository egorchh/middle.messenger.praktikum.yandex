// language=hbs
export const template = `
    <p class="chat-header_users">
	{{ users }}
    </p>
    <div class="chat-header_info">
        <div class="chat-header_info-text">
            {{{ chatAvatar }}}
            <p class="chat-header_info-title">{{ title }}</p>
        </div>
		{{#if lastActivityTime}}
        	<p class="chat-header_info-description">{{ lastActivityTime }}</p>
		{{/if}}
    </div>
    <div class="chat-header_options">
        {{{ addUserButton }}}
        {{{ deleteUserButton }}}
        {{{ deleteChatButton }}}
    </div>
`;
