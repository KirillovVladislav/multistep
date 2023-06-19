import { useNavigate } from 'react-router-dom'

import { InfoStep } from './InfoStep/InfoStep'
import { AboutStep } from './AboutStep/AbouStep'
import { AdvantagesStep } from './AdvantagesStep/Advantages'

import { Stepper } from '../../components/Stepper/Stepper'
import { ErrorPopup } from '../../components/ErrorPopup/ErrorPopup'
import { SuccessPopup } from '../../components/SuccessPopup/SuccessPopup'
import { Modal } from '../../components/ui/Modal/Modal'
import { ERoutes } from '../../shared/types/enums'
import { useModal } from '../../shared/hooks/useModal'

import s from './CreatePage.module.scss'
import { useState } from 'react'

export const CreatePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const successModal = useModal()
  const errorModal = useModal()
  const navigate = useNavigate()
  const next = () => {
    setCurrentIndex((prev) => prev + 1)
  }
  const back = () => {
    if (currentIndex === 0) {
      navigate(ERoutes.MAIN)
    } else {
      setCurrentIndex((prev) => prev - 1)
    }
  }
  return (
    <div className={s.container}>
      <Stepper currentIndex={currentIndex} steps={[1, 2, 3]} />
      {currentIndex === 0 && <InfoStep next={next} back={back} />}
      {currentIndex === 1 && <AdvantagesStep next={next} back={back} />}
      {currentIndex === 2 && <AboutStep next={next} back={back} />}
      <Modal isOpen={successModal.isOpen}>
        <SuccessPopup />
      </Modal>
      <Modal isOpen={errorModal.isOpen}>
        <ErrorPopup onClose={errorModal.close} />
      </Modal>
    </div>
  )
}
