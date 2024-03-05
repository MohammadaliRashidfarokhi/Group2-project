import { socialLogo } from '@/static/images'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { Link, useLocation } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/lib/shadcn-components/ui/dropdown-menu.tsx'
import { useTranslation } from '@/locales/i18n.ts'
import { GearIcon, HomeIcon, MagnifyingGlassIcon, PersonIcon } from '@radix-ui/react-icons'
import { APP_ROUTES } from '@/config/router/routes.ts'
import { HeaderLink } from '@/modules/common/components/header/HeaderLink.tsx'

export const Header = () => {
  const { t, i18n } = useTranslation()
  const { pathname } = useLocation()

  const handleLogout = () => {
    supabase.auth
      .signOut()
      .then(() => {
        console.log('successfully logged out!')
      })
      .catch((error) => {
        console.error('error logging out', error)
      })
  }

  return (
    <div className={'container mx-auto min-h-16 bg-zinc-950 w-full px-7 py-2 flex justify-between items-center'}>
      <Link to={APP_ROUTES.home} className="cursor-pointer">
        <img src={socialLogo} className="w-32" alt="Social Logo" />
      </Link>
      <div className="w-full flex justify-evenly md:w-auto py-4 text-white md:gap-6">
        <HeaderLink
          isSelected={pathname === APP_ROUTES.home}
          to={APP_ROUTES.home}
          icon={<HomeIcon className="w-6 h-6" />}
          label={t('home')}
        />
        <HeaderLink
          isSelected={pathname === APP_ROUTES.search}
          to={APP_ROUTES.search}
          icon={<MagnifyingGlassIcon className="w-6 h-6" />}
          label={t('search')}
        />
        <HeaderLink
          isSelected={pathname === APP_ROUTES.profile}
          to={APP_ROUTES.profile}
          icon={<PersonIcon className="w-6 h-6" />}
          label={t('profile')}
        />
      </div>

      <div className="w-32 flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <GearIcon className="text-white w-6 h-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side={'bottom'} align={'start'} alignOffset={-80} sideOffset={10}>
            <DropdownMenuItem
              className={'cursor-pointer flex justify-between'}
              onClick={() => {
                i18n.changeLanguage(i18n.language === 'en-US' ? 'sv-SE' : 'en-US')
              }}
            >
              {i18n.language === 'en-US' ? 'Swedish' : 'English'}
              <ReactCountryFlag
                svg
                title={i18n.language === 'en-US' ? 'Swedish' : 'English'}
                countryCode={i18n.language === 'en-US' ? 'SE' : 'GB'}
              />
            </DropdownMenuItem>
            <DropdownMenuItem className={'cursor-pointer'} onClick={handleLogout}>
              {t('logout')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
