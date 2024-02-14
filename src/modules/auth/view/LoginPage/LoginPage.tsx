import { supabase } from '@/config/supabase/supabaseClient.ts'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '@/config/router/routes.ts'
import { FormInput } from '@/components/form/FormInput.tsx'
import { useLoginForm } from '@/modules/auth/view/LoginPage/utils/useLoginForm.ts'
import { socialLogo } from '@/static/images.ts'

export const LoginPage = () => {
  const navigate = useNavigate()
  const { handleSubmit, register, errors } = useLoginForm()

  const handleFormSubmit = handleSubmit((values) => {
    supabase.auth
      .signInWithPassword({
        email: values.email,
        password: values.password,
      })
      .then(() => {
        navigate(APP_ROUTES.home)
      })
      .catch((err) => console.error(err))
  })

  return (
    <form onSubmit={handleFormSubmit} className={'flex flex-col gap-7 self-center w-full'}>
      <img alt={'social logo'} src={socialLogo} className={'w-1/2 self-center'} />
      <div className={'flex flex-col gap-3.5'}>
        <FormInput label="Email" placeholder="Enter email" {...register('email')} error={errors.email?.message} />
        <FormInput
          label="Password"
          placeholder="******"
          type="password"
          {...register('password')}
          error={errors.password?.message}
        />
      </div>

      <div className={'flex w-full gap-3.5 md:flex-row-reverse flex-col-reverse'}>
        <Button className={'md:flex-1'} type="submit">
          Login
        </Button>
        <Link to={APP_ROUTES.register} className={'md:w-[75%]'}>
          <Button className={'w-full'} variant={'secondary'}>
            Don't have an account yet? Create an account
          </Button>
        </Link>
      </div>
    </form>
  )
}
