import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header/Header.tsx'

export const Layout = () => {
  return (
    <main className="flex w-full h-full overflow-hidden bg-gray-100 overflow-y-scroll">
      <Outlet />
    </main>
  )
}

export const LayoutWithHeader = () => {
  return (
    <>
      <Header />
      <Layout />
    </>
  )
}
