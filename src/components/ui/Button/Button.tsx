import cn from 'classnames'
import type { ButtonHTMLAttributes, FC } from 'react'

import s from './Button.module.scss'

type TypeButton = 'button' | 'submit'
type VariantButton = 'primary' | 'secondary' | 'outline' | 'error'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  type?: TypeButton
  variant?: VariantButton
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  type = 'button',
  variant = 'primary',
  ...rest
}) => {
  const buttonClass = cn(s.button, s[variant], className)

  return (
    <button className={buttonClass} type={type} {...rest}>
      <span>{children}</span>
    </button>
  )
}
