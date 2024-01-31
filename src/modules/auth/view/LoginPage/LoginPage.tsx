import { supabase } from '@/config/supabase/supabaseClient.ts'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthForm } from '@/modules/auth/utils/useAuthForm.ts'
import { APP_ROUTES } from '@/config/router/routes.ts'
import { FormInput } from '@/components/form/FormInput.tsx'

export const LoginPage = () => {
  const navigate = useNavigate()
  const { handleSubmit, register, errors } = useAuthForm()

  const handleFormSubmit = handleSubmit((values) => {
    supabase.auth
      .signInWithPassword({
        email: values.email,
        password: values.password,
      })
      .then(() => {
        navigate(APP_ROUTES.home)
      })
  })

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={'flex flex-col gap-3.5'}>
        <FormInput label="Email" placeholder="Email" {...register('email')} error={errors.email?.message} />
        <FormInput
          label="Password"
          placeholder="Password"
          type="password"
          {...register('password')}
          error={errors.password?.message}
        />
        <Button className={'w-full'} type="submit">
          Login
        </Button>
        <Link to={APP_ROUTES.register}>
          <Button className={'w-full'} variant={'secondary'}>
            Don't have an account yet? Create an account
          </Button>
        </Link>
      </div>
    </form>
  )
}
