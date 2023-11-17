import {
    UPPERCASE_LETTERS,
    LATIN_LETTERS,
    NUMBERS,
    ONLY_NUMBERS,
    SPECIAL_SYMBOLS,
    EMAIL,
    PHONE
} from './contants';

export const validateNotNumbers = (value?: string) => {
    if (!value) return;
    if (ONLY_NUMBERS.test(value.trim())) return 'Поле не может состоять только из цифр';
};

const validateEmail = (value?: string) => {
    if (!value) return;
    const trimmed = value.trim();
    if (!EMAIL.test(trimmed)) return 'Некорректный email';
};

const validatePassword = (value?: string) => {
    if (!value) return;
    const trimmed = value.trim();
    if (trimmed.length > 40 || trimmed.length < 8) return 'Длина пароля должна быть от 8 до 40 символов';
    if (!NUMBERS.test(trimmed)) return 'В пароле должно быть хотя бы одно число';
    if (!UPPERCASE_LETTERS.test(trimmed)) return 'В пароле должна быть хотя бы одна заглавная буква';
};

const validateLogin = (value?: string) => {
    if (!value) return;
    const valueWithoutSpaces = value.trim();
    if (valueWithoutSpaces.length > 20 || valueWithoutSpaces.length < 3) return 'Длина логина должна быть от 3 до 20 символов';
    const notNumbersError = validateNotNumbers(valueWithoutSpaces);
    if (notNumbersError) return notNumbersError;
    if (SPECIAL_SYMBOLS.test(valueWithoutSpaces)) return 'Поле не должно содержать спецсимволы';
    if (LATIN_LETTERS.test(valueWithoutSpaces)) return 'Поле должно быть написано латиницей';
};

const validateName = (value?: string) => {
    if (!value) return;
    const valueWithoutSpaces = value.trim();
    if (SPECIAL_SYMBOLS.test(valueWithoutSpaces) || NUMBERS.test(valueWithoutSpaces)) return 'Поле не должно содержать спецсимволы или цифры';
    if (!UPPERCASE_LETTERS.test(valueWithoutSpaces)) return 'Поле должно начинаться с большой буквы';
};

const validatePhone = (value?: string) => {
    if (!value) return;
    const valueWithoutSpaces = value.trim();
    if (valueWithoutSpaces.length > 15 || valueWithoutSpaces.length < 10) return 'Длина телефона должна быть от 10 до 15 символов';
    if (!PHONE.test(valueWithoutSpaces)) return 'Поле должно состоять только из цифр';
};

const validateNickname = (value?: string) => {
    if (!value) return;
    const valueWithoutSpaces = value.trim();
    if (valueWithoutSpaces.length < 3) return 'Длина никнейма должна быть больше 3 символов';
    const notNumbersError = validateNotNumbers(valueWithoutSpaces);
    if (notNumbersError) return notNumbersError;
    if (SPECIAL_SYMBOLS.test(valueWithoutSpaces)) return 'Поле не должно содержать спецсимволы';
};

const validateMessage = (value?: string) => {
    if (!value) return 'Сообщение не может быть пустым';
}

export const validateTargetValue = (name: string, value: string) => {
    switch (name) {
        case 'email':
            return validateEmail(value);
        case 'login':
            return validateLogin(value);
        case 'first_name':
        case 'second_name':
            return validateName(value);
        case 'phone':
            return validatePhone(value);
        case 'password':
        case 'newPassword':
        case 'oldPassword':
            return validatePassword(value);
        case 'display_name':
            return validateNickname(value);
        case 'message':
            return validateMessage(value);
        default:
            return;
    }
}
