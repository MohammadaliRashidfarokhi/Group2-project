import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header/Header.tsx'

export const Layout = () => {
  return (
    <main className="flex w-full h-full overflow-hidden overflow-y-scroll bg-black justify-center">
      <div className={'min-w-[500px]'}>
        <Outlet />
      </div>
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
