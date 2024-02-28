import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Tables } from '@/model/dbTypes.ts'

export type AuthFormProps = Pick<Tables<'USER'>, 'FIRST_NAME' | 'LAST_NAME' | 'EMAIL' | 'USERNAME'> & {
  PASSWORD: string
}

const authFormSchema: yup.ObjectSchema<AuthFormProps> = yup.object({
  FIRST_NAME: yup.string().required('required-field'),
  LAST_NAME: yup.string().required('required-field'),
  EMAIL: yup.string().required('required-field').email('invalid-email'),
  USERNAME: yup.string().required('required-field'),
  PASSWORD: yup.string().required('required-field'),
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
