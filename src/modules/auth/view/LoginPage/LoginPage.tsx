import { supabase } from '@/config/supabase/supabaseClient.ts'
import { Input } from '@/lib/shadcn-components/ui/input.tsx'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { userStore } from '@/store/authStore.ts'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthForm } from '@/modules/auth/utils/useAuthForm.ts'
import { APP_ROUTES } from '@/config/router/routes.ts'

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
        userStore.setLogged(true)
        navigate(APP_ROUTES.home)
      })
      .catch((err) => console.log(err))
  })

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <Input placeholder="Email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
        <Input placeholder="Password" type="password" {...register('password')} />
        {errors.password && <span>{errors.password.message}</span>}
        <Button type="submit">Login</Button>
      </form>
      <Link to={APP_ROUTES.register}>
        <span>Register</span>
      </Link>
    </div>
  )
}
