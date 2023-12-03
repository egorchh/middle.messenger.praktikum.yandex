export const tooltips = [
	{
		styles: {
			top: '-150%',
			left: '100%',
			width: '200px'
		},
		position: 'top-right',
		tooltipItems: [
			{ text: 'Медиа файл', src: '/src/pages/tooltips/assets/media-icon.svg' },
			{ text: 'Файл', src: '/src/pages/tooltips/assets/file-icon.svg' },
			{ text: 'Локация', src: '/src/pages/tooltips/assets/path-icon.svg' }
		]
	},
	{
		styles: {
			top: '-80px',
			right: '100%',
			width: '170px'
		},
		position: 'top-left',
		tooltipItems: [
			{ text: 'Удалить чат', red: true, src: '/src/pages/tooltips/assets/trash-bin-icon.svg' }
		]
	},
	{
		styles: {
			bottom: '-80px',
			left: '100%',
			width: '200px'
		},
		position: 'bottom-right',
		tooltipItems: [
			{ text: 'Добавить чат', src: '/src/pages/tooltips/assets/user-plus-icon.svg' }
		]
	},
	{
		styles: {
			bottom: '-70px',
			right: '100%',
			width: '150px'
		},
		position: 'bottom-left',
		tooltipItems: [
			{ text: 'Без картинки' }
		]
	}
]
