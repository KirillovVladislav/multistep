import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../../../components/ui/Input/Input'
import { Select } from '../../../components/ui/Select/Select'
import { Button } from '../../../components/ui/Button/Button'

import { Sex } from '../../../shared/types/enums'
import { infoSchema } from '../../../shared/lib/validation/infoSchema'
import { type FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { updateFormData, type FormState } from '../../../store/slices/formSlice'

interface InfoStepProps {
  next: () => void
  back: () => void
}

export const InfoStep: FC<InfoStepProps> = ({ next, back }) => {
  const dispatch = useAppDispatch()
  const formData = useAppSelector((state) => state.form)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Partial<FormState>>({
    mode: 'onChange',
    resolver: yupResolver(infoSchema),
    defaultValues: formData
  })

  const onSubmitHandler: SubmitHandler<Partial<FormState>> = (data) => {
    console.log(data)
    dispatch(updateFormData(data))
    next()
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={'flex'}>
        <Input
          {...register('nickname')}
          type='text'
          name='nickname'
          id='field-nickname'
          label='Nickname'
          placeholder='Placeholder'
          error={errors.nickname}
        />
        <Input
          {...register('name')}
          type='text'
          id='field-name'
          label='Name'
          placeholder='Placeholder'
          name='name'
          error={errors.name}
        />
        <Input
          {...register('sername')}
          type='text'
          id='field-sername'
          label='SerName'
          placeholder='Placeholder'
          name='sername'
          error={errors.sername}
        />
        <Select
          {...register('sex')}
          options={Object.keys(Sex).map((key) => ({
            label: key,
            value: Sex[key as keyof typeof Sex],
            id: `field-sex-option-${key}`
          }))}
          name='sex'
          label='Sex'
          error={errors.sex}
          id='field-sex'
          placeholder='Не выбрано'
        />
      </div>

      <div className={'buttons'}>
        <Button variant='secondary' onClick={back}>
          Назад
        </Button>
        <Button type='submit'>Далее</Button>
      </div>
    </form>
  )
}
