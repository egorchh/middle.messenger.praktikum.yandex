// language=hbs
export const template = `
    {{#each items}}
        <li><a href="{{ url }}">{{ title }}</a></li>
    {{/each}}
`;
