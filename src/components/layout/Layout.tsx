import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header/Header.tsx'

export const Layout = () => {
  return (
    <main className="flex w-full h-full overflow-hidden overflow-y-scroll bg-black justify-center">
      <div className={'md:w-[500px] md:py-10 flex px-4 md:px-0'}>
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
