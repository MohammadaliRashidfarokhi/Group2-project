import { useState } from 'react'
import { Separator } from '@/lib/shadcn-components/ui/separator'
import { socialLogo, profilePlaceholder, searchIcon } from '@/static/images'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { Link, useNavigate } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/lib/shadcn-components/ui/dropdown-menu.tsx'
import { useTranslation } from '@/locales/i18n.ts'
import {
  Button
} from '@/lib/shadcn-components/ui/button.tsx'
import { GearIcon, HomeIcon, MagnifyingGlassIcon, PersonIcon } from '@radix-ui/react-icons'

export const Header = () => {
  const { t, i18n } = useTranslation()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleProfile = () => {
    // Navigate to the profile page when "ProfilePage" is clicked
    navigate('/profile')
  }

  const handleHome = () => {
    navigate('/')
  }

  const handleSearch = () => {
    navigate('/search')
  }

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
    <div className={'container mx-auto min-h-16 bg-black w-full px-7 py-2 flex justify-between items-center'}>
      <Link to="/" className="cursor-pointer">
        <img src={socialLogo} className="w-32" alt="Social Logo" />
      </Link>
        <div className="fixed left-0 bottom-0 w-full flex justify-evenly md:w-auto bg-black py-4 md:static text-white md:gap-4">
          <div className='flex gap-2' onClick={handleHome}>
            <HomeIcon className='w-6 h-6'/>
            <p className='hidden md:block'>{t('home')}</p>
          </div>
          <div className='flex gap-2' onClick={handleSearch}>
            <MagnifyingGlassIcon className='w-6 h-6'/>
            <p className='hidden md:block'>{t('search')}</p>
          </div>
          <div className='flex gap-2' onClick={handleProfile}>
            <PersonIcon className='w-6 h-6'/>
            <p className='hidden md:block'>{t('profile')}</p>
        </div>
      </div>
      
      <div className='w-32 flex justify-end'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <GearIcon className='text-white w-6 h-6'/>
          </DropdownMenuTrigger>
          <DropdownMenuContent side={'bottom'} align={'start'} alignOffset={-80} sideOffset={10}>
          <DropdownMenuItem
              className={'cursor-pointer'}
              onClick={() => {
                i18n.changeLanguage(i18n.language === 'en-US' ? 'sv-SE' : 'en-US')
              }}
            >
            {i18n.language === 'en-US' ? 'Swedish' : 'English'}
          </DropdownMenuItem>
            <DropdownMenuItem className={'cursor-pointer'} onClick={handleProfile}>
              {i18n.t('profile')}
            </DropdownMenuItem>
            <DropdownMenuItem className={'cursor-pointer'} onClick={handleLogout}>
              {i18n.t('logout')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
