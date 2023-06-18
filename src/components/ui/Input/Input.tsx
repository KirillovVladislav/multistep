import { type InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { type FieldError } from 'react-hook-form'
import cn from 'classnames'

import s from './Input.module.scss'

type TypeText = 'text' | 'email' | 'phone'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name: string
  error?: FieldError
  label?: string
  id?: string
  type?: TypeText
  disabled?: boolean
  placeholder?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, id, type, onChange, disabled, name, placeholder }, ref) => (
    <>
      <div className={s.inputField}>
        <label htmlFor={id} className={s.label}>
          {label}
        </label>
        <input
          ref={ref}
          className={cn(s.input)}
          disabled={disabled}
          id={id}
          placeholder={placeholder}
          name={name}
          type={type}
          onChange={onChange}
        />
        {error !== null && <div className={s.error}>{error?.message}</div>}
      </div>
    </>
  )
)
Input.displayName = 'Input'
