import { FC } from 'react'
import Success from '../../assets/icons/SuccessPopup.svg'
import s from './SuccessPopup.module.scss'
import { Button } from '../ui/Button/Button'
import { useNavigate } from 'react-router-dom'

interface SuccessPopupProps {}

export const SuccessPopup: FC<SuccessPopupProps> = () => {
  const navigate = useNavigate()
  return (
    <div className={s.popup}>
      <h2 className={s.text}>Форма успешно отправлена</h2>

      <div className={s.content}>
        <div className={s.circle}>
          <img src={Success} alt='success' />
        </div>
      </div>

      <Button onClick={() => navigate('/')} id='button-to-main'>
        На главную
      </Button>
    </div>
  )
}
