import * as yup from 'yup'

export const mainSchema = yup.object().shape({
  email: yup
    .string()
    .required('Обязательное поле')
    .matches(/^[^\s@]+@[^\s@]+\.(ru|com)$/i, 'Неверный формат email'),

  phone: yup
    .string()
    .required('Обязательное поле')
    .matches(
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm,
      'Введите корректный номер телефона'
    )
})
