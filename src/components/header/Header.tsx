import React, { useState } from 'react'
import { Input } from '@/lib/shadcn-components/ui/input'
import { socialLogo, profilePlaceholder, searchIcon } from '@/static/images'

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    // Implement logout logic
    console.log('Logout clicked')
  }

  return (
    <div className={'min-h-16 bg-black fixed w-full top-0'}>
      <div className="container mx-auto px-4 flex justify-between items-center text-white">
        <div className="flex items-center">
          <img src={socialLogo} className="w-40" alt="Social Logo" />
        </div>

        <div className="flex items-center">
          <img src={searchIcon} className="place-items-start" alt="Search Icon" />
          <div className="flex flex-col items-center ml-2">
            <Input className="w-80 mt-2" placeholder="Search for User" />
          </div>
        </div>

        <div className="relative">
          <img
            src={profilePlaceholder}
            className="w-16 cursor-pointer"
            alt="Profile Placeholder"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white text-black shadow-md">
              <div className="py-2 px-4 cursor-pointer" onClick={handleLogout}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
