// language=hbs
export const template = `
    <div class="friend-component">
        {{{ avatar }}}
        <div class="friend-component_info">
            <p class="friend-component_info-name">{{ name }}</p>
            <p class="friend-component_info-description">{{ lastMessage }}</p>
        </div>
        {{# if numberOfUnreadMessages}}
            <div class="friend-component_unread-message">
                <p class="friend-component_unread-message-text">{{ numberOfUnreadMessages }}</p>
            </div>
        {{/if}}
    </div>
`;