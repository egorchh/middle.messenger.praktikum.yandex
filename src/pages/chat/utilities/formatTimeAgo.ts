export function formatTimeAgo(isoString: string) {
	const timestamp = new Date(isoString).getTime();
	const minutesAgo = Math.floor((Date.now() - timestamp) / (1000 * 60));
	const hoursAgo = Math.floor(minutesAgo / 60);
	const remainingMinutes = minutesAgo % 60;

	const minutesWord = getPluralWord(minutesAgo, [ 'минута', 'минуты', 'минут' ]);
	const hoursWord = getPluralWord(hoursAgo, [ 'час', 'часа', 'часов' ]);

	if (hoursAgo === 0) {
		return `${minutesAgo} ${minutesWord} назад`;
	} else {
		return `${hoursAgo} ${hoursWord} и ${remainingMinutes} ${minutesWord} назад`;
	}
}

function getPluralWord(count: number, words: string[]) {
	const pluralRules = new Intl.PluralRules('ru-RU');
	const pluralForm = pluralRules.select(count);
	switch (pluralForm) {
		case 'one':
			return words[0];
		case 'few':
			return words[1];
		default:
			return words[2];
	}
}
