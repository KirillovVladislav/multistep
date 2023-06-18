import { useNavigate } from 'react-router-dom'
import { useForm, type SubmitHandler, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { InfoStep } from './InfoStep/InfoStep'
import { AboutStep } from './AboutStep/AbouStep'
import { AdvantagesStep } from './AdvantagesStep/Advantages'
import { Button } from '../../components/ui/Button/Button'
import { Stepper } from '../../components/Stepper/Stepper'
import { ErrorPopup } from '../../components/ErrorPopup/ErrorPopup'
import { SuccessPopup } from '../../components/SuccessPopup/SuccessPopup'
import { Modal } from '../../components/ui/Modal/Modal'

import { useModal } from '../../shared/hooks/useModal'
import { type CreateForm } from '../../shared/types/form'
import { ERoutes } from '../../shared/types/enums'
import { useMultistepForm } from '../../shared/hooks/useMultistepForm'
import { useCreateTask } from '../../shared/services/api'

import s from './CreatePage.module.scss'

export const CreatePage = () => {
  const successModal = useModal()
  const errorModal = useModal()
  const createTask = useCreateTask()
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
    const newData = {
      ...data,
      advantages: data.advantages?.map((el) => el.value),
      radio: Number(data.radio)
    }
    console.log(data)
    if (!isLastStep) {
      next()
    } else {
      createTask.mutate(newData, {
        onSuccess: () => {
          successModal.open()
        },
        onError: () => {
          errorModal.open()
        }
      })
    }
  }

  const onClickBack = () => {
    if (isFirtsStep) {
      navigate(ERoutes.MAIN)
    }
    back()
  }

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

      <Modal isOpen={successModal.isOpen}>
        <SuccessPopup />
      </Modal>
      <Modal isOpen={errorModal.isOpen}>
        <ErrorPopup onClose={errorModal.close} />
      </Modal>
    </div>
  )
}
