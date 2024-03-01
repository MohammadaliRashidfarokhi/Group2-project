import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { User } from '@/model/user.ts'

export type EditUserFormProps = Pick<User, 'USERNAME' | 'FIRST_NAME' | 'LAST_NAME'>

const editUserFormSchema: yup.ObjectSchema<EditUserFormProps> = yup.object({
  USERNAME: yup.string().required('required-field'),
  FIRST_NAME: yup.string().required('required-field'),
  LAST_NAME: yup.string().required('required-field'),
})

const defaults: EditUserFormProps = { FIRST_NAME: '', LAST_NAME: '', USERNAME: '' }

export const useEditUserForm = (defaultValues: EditUserFormProps = defaults) => {
  const { register, control, handleSubmit, setError, formState, setValue } = useForm<EditUserFormProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(editUserFormSchema),
  })

  return {
    register,
    handleSubmit,
    control,
    setValue,
    setError,
    errors: formState.errors,
    values: formState.defaultValues,
  }
}
