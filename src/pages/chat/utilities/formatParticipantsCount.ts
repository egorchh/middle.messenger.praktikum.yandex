export function formatParticipantsCount(count: number) {
	const pluralRules = new Intl.PluralRules('ru-RU');
	const pluralForm = pluralRules.select(count);
	let result;

	switch (pluralForm) {
		case 'one':
			result = `${count} участник`;
			break;
		case 'few':
			result = `${count} участника`;
			break;
		case 'many':
			result = `${count} участников`;
			break;
		default:
			result = `${count} участников`;
	}

	return result;
}
