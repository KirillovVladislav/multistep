import { useFieldArray, useFormContext, Controller } from 'react-hook-form'
import { useEffect } from 'react'

import { Input } from '../../../components/ui/Input/Input'
import { Button } from '../../../components/ui/Button/Button'
import { InputCheck } from '../../../components/ui/InputCheck/InputCheck'

import Plus from '../../../assets/icons/Plus.svg'
import Delete from '../../../assets/icons/Delete.svg'
import { checkOptions } from '../../../shared/types/enums'
import { type Advdantages } from '../../../shared/types/form'

import s from './Advantages.module.scss'

interface FormData {
  advantages: Advdantages[]
  radio: number
  checkbox: string[]
}

export const AdvantagesStep = () => {
  const {
    register,
    control,
    formState: { errors }
  } = useFormContext<FormData>()
  const { fields, append, remove } = useFieldArray({
    name: 'advantages',
    control
  })

  useEffect(() => {
    if (fields.length === 0) {
      append([{ value: '' }, { value: '' }, { value: '' }])
    }
  }, [])

  const handleRemoveInput = (index: number) => {
    remove(index)
  }
  const addInput = () => {
    if (fields.length < 5) {
      append({ value: '' })
    }
  }
  return (
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
                className={s.addButton}
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
          className={s.button}
          id='button-add'
        >
          <img alt='plus' src={Plus} />
        </Button>
      </div>

      {
        <div className={s.checkContainer}>
          <span className={s.radio}>Checkbox group</span>
          {Object.entries(checkOptions).map(([key, value], index) => (
            <Controller
              key={key}
              control={control}
              name={`checkbox.${index}`}
              render={({ field }) => (
                <InputCheck
                  {...field}
                  type='checkbox'
                  label={key}
                  value={value}
                  id={`field-checkbox-group-option-${index + 1}`}
                />
              )}
            />
          ))}
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
  )
}
