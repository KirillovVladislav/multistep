import { type Sex } from './enums'

export interface InfoForm {
  email: string
  phone: string
}

export interface Advdantages {
  value: string
}

export interface CreateForm {
  nickname: string
  name: string
  sername: string
  sex: Sex
  advantages: Advdantages[]
  about: string
  radio: string
  checkbox: string[]
}

export interface TaskForm {
  nickname: string
  name: string
  sername: string
  sex: Sex
  advantages: string[]
  about: string
  radio: number
  checkbox: string[]
}
