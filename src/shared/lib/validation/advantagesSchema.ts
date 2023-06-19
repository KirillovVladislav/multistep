import * as yup from 'yup'

export const advantagesSchema = yup.object().shape({
  advantages: yup
    .array()
    .of(
      yup.object().shape({
        value: yup.string().required('Обязательное поле').trim()
      })
    )
    .required('Обязательное поле'),
  checkbox: yup.array().of(yup.string()).min(1, 'Выберите хотя бы один вариант')
})
