import { type FC, forwardRef, type Ref } from 'react'

import s from './Select.module.scss'
import { type FieldError } from 'react-hook-form'

interface SelectOption {
  value: string
  label: string
  id: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  options: SelectOption[]
  error?: FieldError
  label?: string
  placeholder?: string
}

export const Select: FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { name, options, error, label, placeholder, ...rest },
    ref: Ref<HTMLSelectElement>
  ): JSX.Element => {
    return (
      <div className={s.container}>
        <label className={s.label}>{label}</label>
        <select name={name} ref={ref} {...rest} className={s.select}>
          <option value='' hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className={s.option} id={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <div className={s.error}>{error.message}</div>}
      </div>
    )
  }
)

Select.displayName = 'Select'
