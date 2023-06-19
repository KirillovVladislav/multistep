import { type InputHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'
import { type FieldError } from 'react-hook-form'

import s from './InputCheck.module.scss'

type TypeCheck = 'checkbox' | 'radio'

interface InputCheckProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  type: TypeCheck
  error?: FieldError
}

export const InputCheck = forwardRef<HTMLInputElement, InputCheckProps>(
  ({ className, label, type, error, ...rest }, ref) => {
    return (
      <label className={cn(s.label, className)}>
        <input ref={ref} className={s.check} type={type} {...rest} />
        <span className={s.text}>{label}</span>
        {error && <span>{error?.message}</span>}
      </label>
    )
  }
)

InputCheck.displayName = 'InputCheck'
