import * as Yup from 'yup';

export const ValidationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zа-я -]+$/i, 'Для имени допустимы символы кириллицы, латиницы, пробел и дефис')
    .min(2, 'Мало символов')
    .max(20, 'Много символов')
    .required('Поле обязательно для заполнения'),
  email: Yup.string()
    .email('Неверный адрес электронной почты')
    .required('Поле обязательно для заполнения'),
  password: Yup.string()
    .min(6, 'Мало символов')
    .required('Поле обязательно для заполнения'),
});
