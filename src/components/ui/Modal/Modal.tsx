import { type FC, type ReactNode } from 'react'
import ReactDOM from 'react-dom'

import s from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  children: ReactNode
}

export const Modal: FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) {
    return null
  }

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) {
    return null
  }

  return ReactDOM.createPortal(
    <div className={s.overlay}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot
  )
}
