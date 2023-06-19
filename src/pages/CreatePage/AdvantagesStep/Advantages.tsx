import { useFieldArray, useForm, type SubmitHandler } from 'react-hook-form'
import { type FC } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import cn from 'classnames'

import { Input } from '../../../components/ui/Input/Input'
import { Button } from '../../../components/ui/Button/Button'
import { InputCheck } from '../../../components/ui/InputCheck/InputCheck'
import { ErrorField } from '../../../components/ui/ErrorField/ErrorField'

import Plus from '../../../assets/icons/Plus.svg'
import Delete from '../../../assets/icons/Delete.svg'
import { checkOptions } from '../../../shared/types/enums'
import { advantagesSchema } from '../../../shared/lib/validation/advantagesSchema'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux'
import { updateFormData, type FormState } from '../../../store/slices/formSlice'

import s from './Advantages.module.scss'

interface AdvdantagesStepProps {
  next: () => void
  back: () => void
}

export const AdvantagesStep: FC<AdvdantagesStepProps> = ({ next, back }) => {
  const dispatch = useAppDispatch()
  const formData = useAppSelector((state) => state.form)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormState>({
    mode: 'onChange',
    resolver: yupResolver(advantagesSchema),
    defaultValues: formData
  })
  const { fields, append, remove } = useFieldArray({
    name: 'advantages',
    control
  })

  const handleRemoveInput = (index: number) => {
    remove(index)
  }
  const addInput = () => {
    append({ value: '' })
  }
  const onSubmitHandler: SubmitHandler<FormState> = (data) => {
    dispatch(updateFormData(data))
    next()
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className='flex'>
        <div>
          <span className={s.label}>Advantages</span>
          {fields.map(({ id }, index) => (
            <>
              <div key={id} className={s.flex}>
                <div>
                  <Input
                    {...register(`advantages.${index}.value`)}
                    placeholder='Placeholder...'
                    name={`advantages.${index}.value`}
                    id={`field-advantages-${index + 1}`}
                    error={errors.advantages?.[index]?.value}
                  />
                </div>

                <Button
                  className={cn(s.addButton, { [s.error]: errors.advantages?.[index]?.value })}
                  variant='outline'
                  onClick={() => {
                    handleRemoveInput(index)
                  }}
                  id={`button-remove-${index + 1}`}
                >
                  <img src={Delete} alt='delete'></img>
                </Button>
              </div>
            </>
          ))}

          <Button
            onClick={addInput}
            type='button'
            variant='secondary'
            className={s.delete}
            id='button-add'
          >
            <img alt='plus' src={Plus} />
          </Button>
        </div>

        {
          <div className={s.checkContainer}>
            <span className={s.radio}>Checkbox group</span>
            {Object.entries(checkOptions).map(([key, value], index) => (
              <InputCheck
                {...register('checkbox')}
                key={value}
                type='checkbox'
                label={key}
                value={value}
                id={`field-checkbox-group-option-${index + 1}`}
              />
            ))}
            <ErrorField error={errors.checkbox} />
          </div>
        }

        <div className={s.checkContainer}>
          <span className={s.radio}>Radio group</span>
          {Object.entries(checkOptions).map(([key, value], index) => (
            <InputCheck
              {...register('radio')}
              type='radio'
              key={key}
              name='radio'
              label={key}
              value={value}
              id={`field-radio-group-option-${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className={'buttons'}>
        <Button variant='secondary' onClick={back}>
          Назад
        </Button>
        <Button type='submit'>Далее</Button>
      </div>
    </form>
  )
}
