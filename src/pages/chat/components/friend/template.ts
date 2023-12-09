// language=hbs
export const template = `
    <div class="friend-component">
        {{{ avatarComponent }}}
        <div class="friend-component_info">
            <p class="friend-component_info-name">{{  title  }}</p>
            <p class="friend-component_info-description">{{ last_message }}</p>
        </div>
        {{# if numberOfUnreadMessages}}
            <div class="friend-component_unread-message">
                <p class="friend-component_unread-message-text">{{ numberOfUnreadMessages }}</p>
            </div>
        {{/if}}
    </div>
`;
