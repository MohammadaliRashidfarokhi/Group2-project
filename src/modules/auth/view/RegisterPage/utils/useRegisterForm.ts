import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Tables } from '@/model/dbTypes.ts'

export type AuthFormProps = Pick<Tables<'USER'>, 'FIRST_NAME' | 'LAST_NAME' | 'EMAIL' | 'USERNAME'> & {
  PASSWORD: string
}

const authFormSchema: yup.ObjectSchema<AuthFormProps> = yup.object({
  FIRST_NAME: yup.string().required('First name is required'),
  LAST_NAME: yup.string().required('Last name is required'),
  EMAIL: yup.string().required('Email is required').email('This is not a valid email'),
  USERNAME: yup.string().required('Username is required'),
  PASSWORD: yup.string().required('Password is required'),
})

const defaults: AuthFormProps = {
  FIRST_NAME: '',
  LAST_NAME: '',
  EMAIL: '',
  USERNAME: '',
  PASSWORD: '',
}

export const useRegisterForm = (defaultValues: AuthFormProps = defaults) => {
  const { register, control, handleSubmit, formState, setValue } = useForm<AuthFormProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(authFormSchema),
  })

  return {
    register,
    handleSubmit,
    control,
    setValue,
    errors: formState.errors,
    values: formState.defaultValues,
  }
}
