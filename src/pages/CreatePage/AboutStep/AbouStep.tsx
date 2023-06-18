import { useFormContext } from 'react-hook-form'

import { TextArea } from '../../../components/ui/TextArea/TextArea'
import { type ChangeEvent } from 'react'

import s from './About.module.scss'

interface FormData {
  about: string
}

export const AboutStep = () => {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext<FormData>()

  const lengthChars = watch('about')?.replace(/\s/g, '').length

  return (
    <div className={s.container}>
      <TextArea
        {...register('about')}
        name='about'
        label='About'
        id='field-about'
        placeholder='Placeholder'
        error={errors.about}
      />
      <div className={s.lengthChars}>{lengthChars}</div>
    </div>
  )
}
