import { useState } from 'react'
import { Input } from '@/lib/shadcn-components/ui/input'
import { socialLogo, profilePlaceholder, searchIcon } from '@/static/images'
import { supabase } from '@/config/supabase/supabaseClient.ts'

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
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
    <div className={'min-h-16 bg-black w-full px-4 py-2 flex justify-between items-center'}>
      <img src={socialLogo} className="w-32" alt="Social Logo" />

      <div className="flex items-center w-80 gap-2.5">
        <img src={searchIcon} alt="Search Icon" />
        <Input placeholder="Search for User" />
      </div>

      <div className="relative">
        <img src={profilePlaceholder} className="cursor-pointer" alt="Profile Placeholder" onClick={toggleDropdown} />
        {isDropdownOpen && (
          <div
            className="absolute right-0 mt-2 bg-white text-black shadow-md py-2 px-4 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </div>
        )}
      </div>
    </div>
  )
}
