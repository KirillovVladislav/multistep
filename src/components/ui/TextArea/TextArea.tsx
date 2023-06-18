import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { type FieldError } from 'react-hook-form'
import cn from 'classnames'

import s from './TextArea.module.scss'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  label?: string
  error?: FieldError
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ name, label, error, ...rest }, ref) => {
    return (
      <div className={s.textarea}>
        <label htmlFor={name}>{label}</label>
        <textarea
          ref={ref}
          className={cn(s.textarea, { [s.errors]: error })}
          {...rest}
          name={name}
        />
        {error != null && <span className={s.error}>{error.message}</span>}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'
