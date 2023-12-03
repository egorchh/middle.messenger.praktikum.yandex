export const convertTimeToHoursAndMinutes = (datetime: string): string => new Date(datetime).toLocaleTimeString([], {
	hour: '2-digit',
	minute: '2-digit'
});
