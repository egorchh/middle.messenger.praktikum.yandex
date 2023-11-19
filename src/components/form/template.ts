// language=hbs
export const template = `
	<fieldset class="{{ fieldsetClass }}" {{#if disabled}} disabled {{/if}}>
		<legend class="visually-hidden">{{ legend }}</legend>
		{{{ inputs }}}
	</fieldset>
	{{#if button}}
		{{{ button }}}
	{{/if}}
`;
