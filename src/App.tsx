import { QueryClientProvider } from '@tanstack/react-query'
import { appQueryClient } from './config/reactQuery/queryClient'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/config/router/router.tsx'
import { AuthHandler } from '@/modules/auth/view/AuthHandler.tsx'
import { Toaster } from '@/lib/shadcn-components/ui/toaster.tsx'

export const App = () => {
  return (
    <QueryClientProvider client={appQueryClient}>
      <AuthHandler />
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
