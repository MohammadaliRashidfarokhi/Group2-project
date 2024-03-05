import { Outlet } from 'react-router-dom'
import { cn } from '@/lib/shadcn-util.ts'
import { useTranslation } from '@/locales/i18n.ts'
import ReactCountryFlag from 'react-country-flag'
import { Header } from '@/modules/common/components/header/Header.tsx'

type Props = {
  variant?: 'compact' | 'full'
}

export const Layout = (props: Props) => {
  const { variant = 'full' } = props

  return (
    <main className="flex w-full h-full overflow-hidden overflow-y-scroll justify-center">
      <div
        className={cn('container w-full md:w-[500px] md:py-10 flex px-4 md:px-0', {
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

export const LayoutWithHeaderCompact = () => {
  const { i18n } = useTranslation()

  return (
    <>
      <span
        className={'cursor-pointer text-white bg-zinc-950 pl-5 pt-2'}
        onClick={() => {
          i18n.changeLanguage(i18n.language === 'en-US' ? 'sv-SE' : 'en-US')
        }}
      >
        <ReactCountryFlag
          style={{
            width: '2em',
            height: '2em',
          }}
          svg
          title={i18n.language === 'en-US' ? 'Swedish' : 'English'}
          countryCode={i18n.language === 'en-US' ? 'SE' : 'GB'}
        />
      </span>
      <Layout variant={'compact'} />
    </>
  )
}
