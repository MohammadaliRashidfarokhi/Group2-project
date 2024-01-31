import { Input } from '@/lib/shadcn-components/ui/input.tsx'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { useAuthForm } from '@/modules/auth/utils/useAuthForm.ts'
import { Link } from 'react-router-dom'
import { APP_ROUTES } from '@/config/router/routes.ts'

export const RegisterPage = () => {
  const { register, handleSubmit, errors } = useAuthForm()

  const handleFormSubmit = handleSubmit((values) => {
    supabase.auth
      .signUp({
        email: values.email,
        password: values.password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  })

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>Register</h1>
        <Input placeholder="Email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
        <Input placeholder="Password" {...register('password')} />
        {errors.password && <span>{errors.password.message}</span>}
        <Button type="submit">Register</Button>
      </form>
      <Link to={APP_ROUTES.login}>
        <span>Login</span>
      </Link>
    </div>
  )
}
