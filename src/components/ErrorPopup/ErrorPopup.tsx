import { type FC } from 'react'

import { Button } from '../ui/Button/Button'
import CloseModal from '../../assets/icons/ClodeModal.svg'
import Error from '../../assets/icons/Error.svg'
import s from './ErrorPopup.module.scss'

interface ErrorPopupProps {
  onClose: () => void
}

export const ErrorPopup: FC<ErrorPopupProps> = ({ onClose }) => {
  return (
    <div className={s.popup}>
      <div className={s.errors}>
        <span>Ошибка</span>
        <Button variant='error' name='button' id='close-button' onClick={onClose}>
          <img src={CloseModal} alt='close modal' />
        </Button>
      </div>

      <div className={s.content}>
        <div className={s.circle}>
          <img src={Error} alt='success' />
        </div>
      </div>

      <div className={s.button}>
        <Button id='button-close' onClick={onClose}>
          Закрыть
        </Button>
      </div>
    </div>
  )
}
