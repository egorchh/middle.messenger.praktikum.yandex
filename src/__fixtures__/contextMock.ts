
const context = {
    signup: {
        inputs: [
            { id: 'signup-email', placeholder: 'Почта', type: 'email', value: 'test@test.ru', label: 'Почта', error: undefined },
            { id: 'signup-login', placeholder: 'Логин', type: 'text', value: undefined, label: undefined, error: undefined },
            { id: 'signup-name', placeholder: 'Имя', type: 'text', value: undefined, label: undefined, error: 'Какая-то ошибка' },
            { id: 'signup-lastname', placeholder: 'Фамилия', type: 'text', value: undefined, label: undefined, error: undefined },
            { id: 'signup-tel', placeholder: 'Номер телефона', type: 'tel', value: undefined, label: undefined, error: undefined },
            { id: 'signup-password', placeholder: 'Пароль', type: 'password', value: undefined, label: undefined, error: 'А тут бы ввести пароль' },
            { id: 'signup-password-repeat', placeholder: 'Пароль (еще раз)', type: 'password', value: undefined, label: undefined, error: undefined }
        ]
    },
    signin: {
        inputs: [
            { id: 'signin-login', placeholder: 'Логин', type: 'text', value: 'egorchh', label: 'Логин', error: 'Пользователя с таким логином не существует' },
            { id: 'signin-password', placeholder: 'Пароль', type: 'password', value: undefined, label: undefined, error: undefined }
        ]
    },
    profile: {
        inputs: [
            { id: 'profile-email', type: 'email', value: 'pochta@yandex.ru', label: 'Почта' },
            { id: 'profile-login', type: 'text', value: 'egorchh', label: 'Логин' },
            { id: 'profile-name', type: 'text', value: 'Егор', label: 'Имя' },
            { id: 'profile-lastname', type: 'text', value: 'Подольский', label: 'Фамилия' },
            { id: 'profile-nickname', type: 'text', value: 'egorchh', label: 'Имя в чате' },
            { id: 'profile-tel', type: 'tel', value: '+7 (999) 999 99 99', label: 'Телефон' }
        ],
            buttons: [
            { text: 'Изменить данные', variant: 'primary' },
            { text: 'Изменить пароль', variant: 'primary' },
            { text: 'Выйти', variant: 'exit' }
        ]
    },
    chat: {
        friends: [
            {
                stub: true,
                name: 'Аня Работа',
                lastMessage: 'Ты сегодня не пришел на работу, болеешь?'
            },
            {
                stub: true,
                name: 'Павел',
                lastMessage: 'Привет, ну как прошло собеседование? Сложные алгоритмы давали?',
                numberOfUnreadMessages: 3
            },
            {
                stub: true,
                name: 'Пчелка Жум-Жум',
                lastMessage: 'Жужужу жууу жуж жужужужу'
            },
            {
                stub: true,
                name: 'Аня Работа',
                lastMessage: 'Ты сегодня не пришел на работу, болеешь?',
                numberOfUnreadMessages: 5
            },
            {
                stub: true,
                name: 'Павел',
                lastMessage: 'Привет, ну как прошло собеседование? Сложные алгоритмы давали?'
            },
            {
                stub: true,
                name: 'Пчелка Жум-Жум',
                lastMessage: 'Жужужу жууу жуж жужужужу'
            },
            {
                stub: true,
                name: 'Аня Работа',
                lastMessage: 'Ты сегодня не пришел на работу, болеешь?'
            },
            {
                stub: true,
                name: 'Павел',
                lastMessage: 'Привет, ну как прошло собеседование? Сложные алгоритмы давали?'
            },
            {
                stub: true,
                name: 'Пчелка Жум-Жум',
                lastMessage: 'Жужужу жууу жуж жужужужу'
            },
            {
                stub: true,
                name: 'Аня Работа',
                lastMessage: 'Ты сегодня не пришел на работу, болеешь?'
            },
            {
                stub: true,
                name: 'Павел',
                lastMessage: 'Привет, ну как прошло собеседование? Сложные алгоритмы давали?'
            },
            {
                stub: true,
                name: 'Пчелка Жум-Жум',
                lastMessage: 'Жужужу жууу жуж жужужужу'
            },
            {
                stub: true,
                name: 'Аня Работа',
                lastMessage: 'Ты сегодня не пришел на работу, болеешь?'
            },
            {
                stub: true,
                name: 'Павел',
                lastMessage: 'Привет, ну как прошло собеседование? Сложные алгоритмы давали?'
            },
            {
                stub: true,
                name: 'Пчелка Жум-Жум',
                lastMessage: 'Жужужу жууу жуж жужужужу'
            }
        ],
        messages: [
            { variant: undefined, username: 'Аня Работа', text: 'Ты сегодня не пришел на работу, заболел?', time: '09:59' },
            { variant: 'own', username: undefined, text: 'Да что-то да, температура 39,8! Никогда так плохо не было', time: '10:37', photoSrc: 'https://kazanfirst.ru/storage/posts/March2020/WuxhnpyKjtzoRQViSeSN-1060x600.jpg' },
            { variant: undefined, username: 'Аня Работа', text: 'Ужас, давай поправляйся скорее', time: '10:41' },
            { variant: undefined, username: 'Пашок', text: 'А я тебе говорил не бегать по лужам 😆😆😆', time: '10:46' },
            { variant: undefined, username: 'Пашок', text: 'Ну ты там не грусти, как раз Наруто досмотришь', time: '10:49' }
        ]
    },
    tooltips: [
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
}

export default context;
