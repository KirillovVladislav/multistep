import { useFormContext } from 'react-hook-form'
import { Input } from '../../../components/ui/Input/Input'
import { Select } from '../../../components/ui/Select/Select'
import { Sex } from '../../../shared/types/enums'

interface FormDaata {
  nickname: string
  name: string
  sername: string
  sex: string
}

export const InfoStep = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext<FormDaata>()

  console.log(errors)
  return (
    <div className={'flex'}>
      <Input
        {...register('nickname')}
        type='text'
        name='nickname'
        id='field-nickname'
        label='Nickname'
        placeholder='Placeholder'
        error={errors.nickname}
      />
      <Input
        {...register('name')}
        type='text'
        id='field-name'
        label='Name'
        placeholder='Placeholder'
        name='name'
        error={errors.name}
      />
      <Input
        {...register('sername')}
        type='text'
        id='field-sername'
        label='SerName'
        placeholder='Placeholder'
        name='sername'
        error={errors.sername}
      />
      <Select
        {...register('sex')}
        options={Object.keys(Sex).map((key) => ({
          label: key,
          value: Sex[key as keyof typeof Sex],
          id: `field-sex-option-${key}`
        }))}
        name='sex'
        label='Sex'
        error={errors.sex}
        id='field-sex'
        placeholder='Не выбрано'
      />
    </div>
  )
}
