import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export enum Sex {
  man = 'man',
  woman = 'woman'
}
export interface formData {
  phone: string
  email: string
  nickname: string
  name: string
  sername: string
  sex: Sex
  advantages: string[]
  radio: number
  checkbox: number[]
  about: string
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.sbercloud.ru/content/v1/bootcamp/fronten' }),
  endpoints: (builder) => ({
    submitForm: builder.mutation<formData, formData>({
      query: (formData) => ({
        url: '/',
        method: 'POST',
        body: formData
      })
    })
  })
})

export const { useSubmitFormMutation } = api
