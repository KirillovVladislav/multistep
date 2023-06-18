import * as yup from 'yup'

const nickNameRegExp = /^[а-яА-ЯёЁ0-9a-zA-Z]+$/
const nameRegExp = /^[а-яА-ЯёЁa-zA-Z]+$/
export const stepsSchema = [
  yup.object({
    nickname: yup
      .string()
      .required('Обязательное поле')
      .max(30, 'Максимальная длина 30 символов')
      .matches(nickNameRegExp, 'Только буквы и цифры'),
    name: yup
      .string()
      .required('Обязательное поле')
      .max(50, 'Максимальная длина 50 символов')
      .matches(nameRegExp, 'Только буквы'),
    sername: yup
      .string()
      .required('Обязательное поле')
      .max(50, 'Максимальная длина 50 символов')
      .matches(nameRegExp, 'Только буквы'),
    sex: yup.string().required('Обязательное поле')
  }),
  // validation for step2
  yup.object({
    advantages: yup
      .array()
      .of(
        yup.object().shape({
          value: yup.string().required('Обязательное поле').trim()
        })
      )
      .required('Обязательное поле')
  }),
  // validation for step3
  yup.object({
    about: yup.string().required('Обязательное поле').max(200, 'Максимальная длина 200 символов')
  })
]
