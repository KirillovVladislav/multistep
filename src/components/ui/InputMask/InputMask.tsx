import { forwardRef, type InputHTMLAttributes } from 'react'
import { type FieldError } from 'react-hook-form'
import ReactInputMask, { type Props as MaskProps } from 'react-input-mask'
import cn from 'classnames'

import s from './InputMask.module.scss'

interface MaskFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
  mask?: MaskProps['mask']
  error?: FieldError
  fill?: boolean
  name: string
}

export const InputMask = forwardRef<HTMLInputElement, Omit<MaskFieldProps, 'tag'>>(
  ({ label, fill = true, mask, error, className, name, ...rest }, ref) => {
    return (
      <div className={cn(s.inputField)}>
        <label htmlFor={name} className={s.label}>
          {label}
        </label>

        <ReactInputMask
          name={name}
          inputRef={ref}
          className={cn(s.input, { [s.fill]: fill })}
          mask={mask!}
          alwaysShowMask
          {...rest}
        />

        {error && <span className={s.error}>{error.message}</span>}
      </div>
    )
  }
)

InputMask.displayName = 'InputMask'
