import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../../store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
