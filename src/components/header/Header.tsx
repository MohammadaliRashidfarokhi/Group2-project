import { useState } from 'react'
import { Input } from '@/lib/shadcn-components/ui/input'
import { socialLogo, profilePlaceholder, searchIcon } from '@/static/images'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { Link, useNavigate } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/lib/shadcn-components/ui/dropdown-menu.tsx'

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleProfile = () => {
    // Navigate to the profile page when "ProfilePage" is clicked
    navigate('/profile')
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
    <div className={'min-h-16 bg-black w-full px-7 py-2 flex justify-between items-center'}>
      <Link to="/" className="cursor-pointer">
        <img src={socialLogo} className="w-32" alt="Social Logo" />
      </Link>
      <div className="flex items-center w-80 gap-2.5">
        <img src={searchIcon} alt="Search Icon" />
        <Input placeholder="Search for User" />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <img src={profilePlaceholder} className="cursor-pointer" alt="Profile Placeholder" onClick={toggleDropdown} />
        </DropdownMenuTrigger>
        <DropdownMenuContent side={'bottom'} align={'start'} alignOffset={-80} sideOffset={10}>
          <DropdownMenuItem className={'cursor-pointer'} onClick={handleProfile}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className={'cursor-pointer'} onClick={handleLogout}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
