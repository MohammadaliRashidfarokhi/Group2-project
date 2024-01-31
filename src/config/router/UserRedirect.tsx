import { userStore } from '@/store/authStore.ts'
import { Navigate } from 'react-router-dom'
import { APP_ROUTES } from '@/config/router/routes.ts'

export const UserRedirect = () => {
  const { isLogged } = userStore.useStore()

  if (!isLogged) {
    return <Navigate to={APP_ROUTES.register} />
  }

  return <Navigate to={APP_ROUTES.home} />
}
