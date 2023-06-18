import { type InputHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'

import s from './InputCheck.module.scss'

type TypeCheck = 'checkbox' | 'radio'

interface InputCheckProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  type: TypeCheck
}

export const InputCheck = forwardRef<HTMLInputElement, InputCheckProps>(
  ({ className, label, type, ...rest }, ref) => {
    return (
      <label className={cn(s.label, className)}>
        <input ref={ref} className={s.check} type={type} {...rest} />
        {type === 'radio' && <span className={s.checked} />}
        <span className={s.text}>{label}</span>
      </label>
    )
  }
)

InputCheck.displayName = 'InputCheck'
