import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { type TaskForm } from '../types/form'

export const createTask = async (data: TaskForm) => {
  const response = await axios.post('https://api.sbercloud.ru/content/v1/bootcamp/frontend', data)
  return response.data
}

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  return useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries('tasks')
    },
    onError: (error) => {
      console.log(error)
    }
  })
}
