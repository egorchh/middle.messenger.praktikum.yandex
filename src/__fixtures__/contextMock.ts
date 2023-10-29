
const context = {
    signup: {
        inputs: [
            { id: 'signup-email', placeholder: 'Почта', type: 'email', value: 'test@test.ru', label: 'Почта', error: undefined, name: 'email' },
            { id: 'signup-login', placeholder: 'Логин', type: 'text', value: undefined, label: undefined, error: undefined, name: 'login' },
            { id: 'signup-name', placeholder: 'Имя', type: 'text', value: undefined, label: undefined, error: 'Какая-то ошибка', name: 'first_name' },
            { id: 'signup-lastname', placeholder: 'Фамилия', type: 'text', value: undefined, label: undefined, error: undefined, name: 'second_name' },
            { id: 'signup-tel', placeholder: 'Номер телефона', type: 'tel', value: undefined, label: undefined, error: undefined, name: 'phone' },
            { id: 'signup-password', placeholder: 'Пароль', type: 'password', value: undefined, label: undefined, error: 'А тут бы ввести пароль', name: 'password' },
            { id: 'signup-password-repeat', placeholder: 'Пароль (еще раз)', type: 'password', value: undefined, label: undefined, error: undefined, name: 'password' }
        ]
    },
    signin: {
        inputs: [
            { id: 'signin-login', placeholder: 'Логин', type: 'text', value: 'egorchh', label: 'Логин', error: 'Пользователя с таким логином не существует', name: 'login' },
            { id: 'signin-password', placeholder: 'Пароль', type: 'password', value: undefined, label: undefined, error: undefined, name: 'password' }
        ]
    }, name: '',
    profile: {
        inputs: [
            { id: 'profile-email', type: 'email', value: 'pochta@yandex.ru', label: 'Почта', name: 'email', disable: true },
            { id: 'profile-login', type: 'text', value: 'egorchh', label: 'Логин', name: 'login', disable: true },
            { id: 'profile-name', type: 'text', value: 'Егор', label: 'Имя', name: 'first_name', disable: true },
            { id: 'profile-lastname', type: 'text', value: 'Подольский', label: 'Фамилия', name: 'second_name', disable: true },
            { id: 'profile-nickname', type: 'text', value: 'egorchh', label: 'Имя в чате', name: 'display_name', disable: true },
            { id: 'profile-tel', type: 'tel', value: '+7 (999) 999 99 99', label: 'Телефон', name: 'phone', disable: true }
        ],
            links: [
            { linkText: 'Изменить данные', variant: 'primary', size: 'l', href: '/src/pages/change-data/index.html' },
            { linkText: 'Изменить пароль', variant: 'primary', size: 'l', href: '/src/pages/change-password/index.html' },
            { linkText: 'Выйти', variant: 'exit', size: 'l', href: '/src/pages/chat/index.html' }
        ]
    },
    'change-data': {
        inputs: [
            { id: 'change-email', type: 'email', value: 'pochta@yandex.ru', label: 'Почта', name: 'email', disable: false },
            { id: 'change-login', type: 'text', value: 'egorchh', label: 'Логин', name: 'login', disable: false },
            { id: 'change-name', type: 'text', value: 'Егор', label: 'Имя', name: 'first_name', disable: false },
            { id: 'change-lastname', type: 'text', value: 'Подольский', label: 'Фамилия', name: 'second_name', disable: false },
            { id: 'change-nickname', type: 'text', value: 'egorchh', label: 'Имя в чате', name: 'display_name', disable: false },
            { id: 'change-tel', type: 'tel', value: '+7 (999) 999 99 99', label: 'Телефон', name: 'phone', disable: false }
        ]
    },
    'change-password': {
        inputs: [
            { id: 'old-password', placeholder: '•••••••••', type: 'password', value: undefined, label: 'Старый пароль', name: 'oldPassword', disable: false },
            { id: 'new-password', placeholder: '•••••••••', type: 'password', value: undefined, label: 'Новый пароль', name: 'newPassword', disable: false },
            { id: 'new-password-repeat', placeholder: '•••••••••', type: 'password', value: undefined, label: 'Новый пароль (еще раз)', name: 'newPassword', disable: false }
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
