import { type Advdantages } from '../../shared/types/form'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
  phone: string
  email: string
  nickname: string
  name: string
  sername: string
  sex: Sex
  advantages: Advdantages[]
  radio: string
  checkbox: string[]
  about: string
}
export enum Sex {
  man = 'man',
  woman = 'woman'
}
const initialState: FormState = {
  phone: '+79528971785',
  email: 'js.kirillov@yandex.ru',
  nickname: '',
  name: '',
  sername: '',
  sex: Sex.man,
  advantages: [{ value: '' }, { value: '' }, { value: '' }],
  checkbox: [],
  radio: '',
  about: ''
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<FormState>>) => {
      return { ...state, ...action.payload }
    }
  }
})

export const { updateFormData } = formSlice.actions

export default formSlice.reducer
