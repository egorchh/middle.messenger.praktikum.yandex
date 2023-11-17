import { navigate } from '../router/router';
import { RouterPages } from '../pages/types';

const context = {
    signup: {
        inputs: [
            { id: 'signup-email', placeholder: 'Почта', type: 'email', value: undefined, label: 'Почта', error: undefined, name: 'email' },
            { id: 'signup-login', placeholder: 'Логин', type: 'text', value: undefined, label: 'Логин', error: undefined, name: 'login' },
            { id: 'signup-name', placeholder: 'Имя', type: 'text', value: undefined, label: 'Имя', error: undefined, name: 'first_name' },
            { id: 'signup-lastname', placeholder: 'Фамилия', type: 'text', value: undefined, label: 'Фамилия', error: undefined, name: 'second_name' },
            { id: 'signup-tel', placeholder: 'Номер телефона', type: 'tel', value: undefined, label: 'Номер телефона', error: undefined, name: 'phone' },
            { id: 'signup-password', placeholder: 'Пароль', type: 'password', value: undefined, label: 'Пароль', error: undefined, name: 'password' },
            { id: 'signup-password-repeat', placeholder: 'Пароль (еще раз)', type: 'password', value: undefined, label: 'Пароль (еще раз)', error: undefined, name: 'password' }
        ]
    },
    signin: {
        inputs: [
            { id: 'signin-login', placeholder: 'Логин', type: 'text', value: undefined, label: 'Логин', error: undefined, name: 'login' },
            { id: 'signin-password', placeholder: 'Пароль', type: 'password', value: undefined, label: 'Пароль', error: undefined, name: 'password' }
        ]
    }, name: '',
    profile: {
        inputs: [
            { id: 'profile-email', placeholder: 'Почта', type: 'email', value: 'test@email.ru', error: undefined, label: 'Почта', name: 'email', variant: 'profile' },
            { id: 'profile-login', placeholder: 'Логин', type: 'text', value: 'egorch_', error: undefined, label: 'Логин', name: 'login', variant: 'profile' },
            { id: 'profile-name', placeholder: 'Имя', type: 'text', value: 'Егор', error: undefined, label: 'Имя', name: 'first_name', variant: 'profile' },
            { id: 'profile-lastname', placeholder: 'Фамилия', type: 'text', value: 'Подольский', error: undefined, label: 'Фамилия', name: 'second_name', variant: 'profile' },
            { id: 'profile-nickname', placeholder: 'Имя в чате', type: 'text', value: 'egorch_', error: undefined, label: 'Имя в чате', name: 'display_name', variant: 'profile' },
            { id: 'profile-tel', placeholder: 'Номер телефона', type: 'tel', value: '+7 (981) 305 39-44', error: undefined, label: 'Телефон', name: 'phone', variant: 'profile' }
        ],
            links: [
            {
                linkText: 'Изменить данные',
                variant: 'primary',
                size: 'l',
                onClick: () => {
                    navigate(RouterPages.CHANGE_DATA)
                }
            },
            {
                linkText: 'Изменить пароль',
                variant: 'primary',
                size: 'l',
                onClick: () => {
                    navigate(RouterPages.CHANGE_PASSWORD)
                }
            },
            {
                linkText: 'Выйти',
                variant: 'exit',
                size: 'l',
                onClick: (event: Event | undefined) => {
                    event?.preventDefault();

                    navigate(RouterPages.CHAT);
                }
            }
        ]
    },
    'change-data': {
        inputs: [
            { id: 'change-email', type: 'email', value: 'pochta@yandex.ru', label: 'Почта', name: 'email', disable: false, variant: 'profile' },
            { id: 'change-login', type: 'text', value: 'egorchh', label: 'Логин', name: 'login', disable: false, variant: 'profile' },
            { id: 'change-name', type: 'text', value: 'Егор', label: 'Имя', name: 'first_name', disable: false, variant: 'profile' },
            { id: 'change-lastname', type: 'text', value: 'Подольский', label: 'Фамилия', name: 'second_name', disable: false, variant: 'profile' },
            { id: 'change-nickname', type: 'text', value: 'egorchh', label: 'Имя в чате', name: 'display_name', disable: false, variant: 'profile' },
            { id: 'change-tel', type: 'tel', value: '+7 (999) 999 99 99', label: 'Телефон', name: 'phone', disable: false, variant: 'profile' }
        ]
    },
    'change-password': {
        inputs: [
            { id: 'old-password', placeholder: '•••••••••', type: 'password', value: undefined, label: 'Старый пароль', name: 'oldPassword', disable: false, variant: 'profile' },
            { id: 'new-password', placeholder: '•••••••••', type: 'password', value: undefined, label: 'Новый пароль', name: 'newPassword', disable: false, variant: 'profile' },
            { id: 'new-password-repeat', placeholder: '•••••••••', type: 'password', value: undefined, label: 'Новый пароль (еще раз)', name: 'newPassword', disable: false, variant: 'profile' }
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
            { variant: undefined, username: 'Пашок', text: 'Ну ты там не грусти, как раз Наруто досмотришь', time: '10:49' },
            { variant: 'own', username: undefined, text: 'Спасибо за поддержку, ребят', time: '10:55' }
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
