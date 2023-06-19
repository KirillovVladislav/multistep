import { type FC } from 'react'

import s from './ErrorField.module.scss'

interface ErrorFieldProps {
  error?: any
}

export const ErrorField: FC<ErrorFieldProps> = ({ error }) => {
  return error && <span className={s.error}>{error.message}</span>
}
