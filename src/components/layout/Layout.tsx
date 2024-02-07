import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header/Header.tsx'
import { cn } from '@/lib/shadcn-util.ts'

type Props = {
  variant?: 'compact' | 'full'
}

export const Layout = (props: Props) => {
  const { variant = 'full' } = props

  return (
    <main className="flex w-full h-full overflow-hidden overflow-y-scroll bg-black justify-center">
      <div
        className={cn('md:w-[500px] md:py-10 flex px-4 md:px-0', {
          'md:w-[700px]': variant === 'full',
        })}
      >
        <Outlet />
      </div>
    </main>
  )
}

export const LayoutWithHeader = () => {
  return (
    <>
      <Header />
      <Layout variant={'full'} />
    </>
  )
}
