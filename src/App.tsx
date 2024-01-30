import { QueryClientProvider } from '@tanstack/react-query'
import { appQueryClient } from './config/reactQuery/queryClient'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/config/router/router.tsx'

export const App = () => {
  return (
    <QueryClientProvider client={appQueryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
