import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../../components/ui/Button/Button'
import { Input } from '../../../components/ui/Input/Input'
import { InputMask } from '../../../components/ui/InputMask/InputMask'

import { mainSchema } from '../../../shared/lib/validation/mainSchema'
import { ERoutes } from '../../../shared/types/enums'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { updateFormData, type FormState } from '../../../store/slices/formSlice'

import s from './MainForm.module.scss'

export const MainForm = () => {
  const dispatch = useAppDispatch()
  const formData = useAppSelector((state) => state.form)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormState>({
    defaultValues: formData,
    resolver: yupResolver(mainSchema)
  })

  const onSubmitHandler: SubmitHandler<FormState> = (data) => {
    dispatch(updateFormData(data))
    if (isValid) {
      navigate(ERoutes.CREATE)
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={s.inputWrapper}>
        <InputMask
          disabled
          {...register('phone')}
          error={errors.phone}
          name='phone'
          mask='+7 (999) 999-99-99'
          label='Номер телефона'
          id='phone'
          type='phone'
          defaultValue={formData.phone}
        />
        <Input
          disabled
          {...register('email')}
          error={errors.email}
          defaultValue={7952893232}
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
