import * as yup from 'yup'

export const aboutSchema = yup.object().shape({
  about: yup.string().required('Обязательное поле').max(200, 'Максимальная длина 200 символов')
})
