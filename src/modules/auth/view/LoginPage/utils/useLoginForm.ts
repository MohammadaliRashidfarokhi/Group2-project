import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export type AuthFormProps = {
  email: string
  password: string
}

const authFormSchema: yup.ObjectSchema<AuthFormProps> = yup.object({
  email: yup.string().required('required-field').email('invalid-email'),
  password: yup.string().required('required-field'),
})

export const useLoginForm = (defaultValues: AuthFormProps = { email: '', password: '' }) => {
  const { register, control, handleSubmit, setError, formState, setValue } = useForm<AuthFormProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(authFormSchema),
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
