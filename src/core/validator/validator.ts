import {
    REG_EXP_CHECK_BIG_LETTERS,
    REG_EXP_CHECK_LATIN_LETTERS,
    REG_EXP_CHECK_NUMBERS,
    REG_EXP_CHECK_ONLY_NUMBERS,
    REG_EXP_CHECK_SPECIAL_SYMBOLS,
    REG_EXP_EMAIL,
    REG_EXP_PHONE_CHECK
} from './contants';

// TODO: переписать украденное (то есть все))))

export const requiredValidate = (value?: string) => {
    if (!value?.trim()) return 'Поле является обязательным';
};

export const notEmptyValidate = (value?: string) => {
    if (!value?.trim()) return 'Поле не должно быть пустым';
};

export const notNumbersValidate = (value?: string) => {
    if (!value) return;
    if (REG_EXP_CHECK_ONLY_NUMBERS.test(value.trim())) return 'Поле не может состоять только из цифр';
};

export const isStringMatchValidate = (value?: string, value2?: string) => {
    if (value !== value2) return 'Пароли должны совпадать';
};

export const emailValidate = (value?: string) => {
    if (!value) return;
    const trimmed = value.trim();
    if (!REG_EXP_EMAIL.test(trimmed)) return 'Некорректный email';
};

export const passwordValidate = (value?: string) => {
    if (!value) return;
    const trimmed = value.trim();
    if (trimmed.length > 40 || trimmed.length < 8) return 'Длина пароля должна быть от 8 до 40 символов';
    if (!REG_EXP_CHECK_NUMBERS.test(trimmed)) return 'В пароле должно быть хотя бы одно число';
    if (!REG_EXP_CHECK_BIG_LETTERS.test(trimmed)) return 'В пароле должна быть хотя бы одна заглавная буква';
};

export const loginValidate = (value?: string) => {
    if (!value) return;
    const trimmed = value.trim();
    if (trimmed.length > 20 || trimmed.length < 3) return 'Длина логина должна быть от 3 до 20 символов';
    const notNumbersError = notNumbersValidate(trimmed);
    if (notNumbersError) return notNumbersError;
    if (REG_EXP_CHECK_SPECIAL_SYMBOLS.test(trimmed)) return 'Поле не должно содержать спецсимволы';
    if (REG_EXP_CHECK_LATIN_LETTERS.test(trimmed)) return 'Поле должно быть написано латиницей';
};

export const checkNameValidate = (value?: string) => {
    if (!value) return;
    const trimmed = value.trim();
    if (REG_EXP_CHECK_SPECIAL_SYMBOLS.test(trimmed) || REG_EXP_CHECK_NUMBERS.test(trimmed)) return 'Поле не должно содержать спецсимволы или цифры';
    if (!REG_EXP_CHECK_BIG_LETTERS.test(trimmed)) return 'Поле должно начинаться с большой буквы';
};

export const phoneValidate = (value?: string) => {
    if (!value) return;
    const trimmed = value.trim();
    if (trimmed.length > 15 || trimmed.length < 10) return 'Длина телефона должна быть от 10 до 15 символов';
    if (!REG_EXP_PHONE_CHECK.test(trimmed)) return 'Поле должно состоять только из цифр';
};

export const validateForm = (values: object): boolean => {
    let isValueCorrect = true;

    const checkInvalid = (value?: boolean | string) => value === false && typeof value === 'boolean';
    Object.entries(values).forEach(([ _, value ]) => {
        if (checkInvalid(value)) isValueCorrect = false;
    });

    return isValueCorrect;
};
