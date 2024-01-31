import { PropsWithChildren } from 'react'
import { userStore } from '@/store/authStore.ts'
import { Navigate } from 'react-router-dom'
import { APP_ROUTES } from '@/config/router/routes.ts'

export const WithAuth = (props: PropsWithChildren) => {
  const { isLogged } = userStore.useStore()

  if (!isLogged) {
    return <Navigate to={APP_ROUTES.login} />
  }

  return props.children
}
