import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../../components/ui/Button/Button'
import { Input } from '../../../components/ui/Input/Input'
import { InputMask } from '../../../components/ui/InputMask/InputMask'

import { mainSchema } from '../../../shared/lib/validation/mainSchema'
import { type InfoForm } from '../../../shared/types/form'
import { ERoutes } from '../../../shared/types/enums'

import s from './MainForm.module.scss'

const initialState = {
  phone: '+79528971785',
  email: 'js.kirillov@yandex.ru'
}

export const MainForm = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<InfoForm>({
    defaultValues: initialState,
    resolver: yupResolver(mainSchema)
  })

  const onSubmitHandler: SubmitHandler<InfoForm> = (data) => {
    if (isValid) {
      navigate(ERoutes.CREATE)
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={s.inputWrapper}>
        <InputMask
          {...register('phone')}
          error={errors.phone}
          name='phone'
          mask='+7 (999) 999-99-99'
          label='Номер телефона'
          id='phone'
          type='phone'
          disabled
        />
        <Input
          disabled
          {...register('email')}
          error={errors.email}
          label='Email'
          id='email'
          type='email'
        />
      </div>

      <Button className={s.button} type='submit' id='button-start'>
        Начать
      </Button>
    </form>
  )
}
