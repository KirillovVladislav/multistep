import { type FC } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { TextArea } from '../../../components/ui/TextArea/TextArea'
import { Button } from '../../../components/ui/Button/Button'
import { SuccessPopup } from '../../../components/SuccessPopup/SuccessPopup'
import { Modal } from '../../../components/ui/Modal/Modal'
import { ErrorPopup } from '../../../components/ErrorPopup/ErrorPopup'

import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { updateFormData, type FormState, resetFormData } from '../../../store/slices/formSlice'
import { aboutSchema } from '../../../shared/lib/validation/aboutSchema'
import { useSubmitFormMutation } from '../../../shared/services/api'
import { useModal } from '../../../shared/hooks/useModal'

import s from './About.module.scss'

interface AboutStepProps {
  next?: () => void
  back: () => void
}

export const AboutStep: FC<AboutStepProps> = ({ back, next }) => {
  const successModal = useModal()
  const errorModal = useModal()
  const [submitForm] = useSubmitFormMutation()
  const dispatch = useAppDispatch()
  const formData = useAppSelector((state) => state.form)
  const {
    register,
    handleSubmit,

    watch,
    formState: { errors }
  } = useForm<FormState>({
    mode: 'onChange',
    resolver: yupResolver(aboutSchema),
    defaultValues: formData
  })

  const lengthChars = watch('about')?.replace(/\s/g, '').length
  const watchedValues = watch()
  const handleBack = () => {
    dispatch(updateFormData(watchedValues))
    back()
  }

  const onSubmitHandler: SubmitHandler<FormState> = async (data) => {
    dispatch(updateFormData(data))
    const newData = {
      ...data,
      advantages: data.advantages?.map((el) => el.value),
      radio: Number(data.radio),
      checkbox: data.checkbox?.map((el) => Number(el))
    }
    try {
      await submitForm(newData).unwrap()
      dispatch(resetFormData())
      successModal.open()
    } catch (error) {
      console.log(error)
      errorModal.open()
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
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

          <div className={'buttons'}>
            <Button variant='secondary' onClick={handleBack}>
              Назад
            </Button>
            <Button type='submit'>Далее</Button>
          </div>
        </div>
      </form>
      <Modal isOpen={successModal.isOpen}>
        <SuccessPopup />
      </Modal>
      <Modal isOpen={errorModal.isOpen}>
        <ErrorPopup onClose={errorModal.close} />
      </Modal>
    </>
  )
}
