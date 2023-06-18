import { useNavigate } from 'react-router-dom'
import { useForm, type SubmitHandler, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { InfoStep } from './InfoStep/InfoStep'
import { AboutStep } from './AboutStep/AbouStep'
import { AdvantagesStep } from './AdvantagesStep/Advantages'
import { Button } from '../../components/ui/Button/Button'
import { Stepper } from '../../components/Stepper/Stepper'
import { Modal } from '../../components/ui/Modal/Modal'

import { type CreateForm } from '../../shared/types/form'
import { ERoutes } from '../../shared/types/enums'
import { useMultistepForm } from '../../shared/hooks/useMultistepForm'

import s from './CreatePage.module.scss'
import { useState } from 'react'

import { ErrorPopup } from '../../components/ErrorPopup/ErrorPopup'

export const CreatePage = () => {
  const navigate = useNavigate()
  const {
    steps,
    isFirtsStep,
    currentValidationSchema,
    currentStepIndex,
    step,
    isLastStep,
    next,
    back
  } = useMultistepForm([<InfoStep />, <AdvantagesStep />, <AboutStep />])

  const methods = useForm<CreateForm>({
    resolver: yupResolver(currentValidationSchema),
    mode: 'onChange'
  })
  const { handleSubmit } = methods
  const onSubmitHandler: SubmitHandler<CreateForm> = (data) => {
    // const newData = {
    //   ...data,
    //   advantages: data.advantages?.map((el) => el.value)
    // }
    console.log(data)
    if (!isLastStep) {
      next()
    } else {
      alert('Successful Account Creation')
    }
  }

  const onClickBack = () => {
    if (isFirtsStep) {
      navigate(ERoutes.MAIN)
    }
    back()
  }
  const [openModal, setIsOpenModal] = useState(false)
  return (
    <div className={s.container}>
      <Stepper currentIndex={currentStepIndex} steps={steps} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmitHandler)} className={s.form}>
          {step}
          <div className={s.buttons}>
            <Button type='button' onClick={onClickBack} variant='secondary' id='button-back'>
              Назад
            </Button>
            <Button type='submit' id={isLastStep ? 'button-send' : 'button-next'}>
              {isLastStep ? 'Отправить' : 'Далее'}
            </Button>
          </div>
        </form>
      </FormProvider>
      <Button onClick={() => setIsOpenModal(true)}>openModal</Button>
      <Modal isOpen={openModal}>
        <ErrorPopup onClose={() => setIsOpenModal(false)} />
      </Modal>
    </div>
  )
}
