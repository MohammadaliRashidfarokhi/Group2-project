import { supabase } from '@/config/supabase/supabaseClient.ts'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { Link } from 'react-router-dom'
import { APP_ROUTES } from '@/config/router/routes.ts'
import { FormInput } from '@/components/form/FormInput.tsx'
import { useRegisterForm } from './utils/useRegisterForm'
import { socialLogo } from '@/static/images.ts'
import { Tables } from '@/model/database.types.ts'

export const RegisterPage = () => {
  const { register, handleSubmit, errors } = useRegisterForm()

  const handleFormSubmit = handleSubmit((values) => {
    supabase.auth
      .signUp({
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        if (!res.data.user?.id) return

        const user: Tables<'USER'> = {
          id: String(res.data.user.id),
          USERNAME: String(values.username),
          DISPLAY_NAME: String(res.data.user.email),
          BACKGROUND_COLOR: 'white',
        }

        return supabase.from('USER').insert(user)
      })
      .catch((err) => console.log(err))
  })

  return (
    <form onSubmit={handleFormSubmit} className={'flex flex-col gap-7 self-center w-full'}>
      <img alt={'social logo'} src={socialLogo} className={'w-1/2 self-center'} />
      <div className={'flex flex-col gap-3.5'}>
        <FormInput label="Email" placeholder="Enter email" {...register('email')} error={errors.email?.message} />
        <FormInput
          label="Username"
          placeholder="Enter username"
          {...register('username')}
          error={errors.username?.message}
        />
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
          Register
        </Button>
        <Link to={APP_ROUTES.login} className={'md:w-[75%]'}>
          <Button className={'w-full'} variant={'secondary'}>
            Already have an account? Log in here
          </Button>
        </Link>
      </div>
    </form>
  )
}
