import { Input } from '@/lib/shadcn-components/ui/input'
import { socialLogo, profilePlaceholder, searchIcon } from '@/static/images'

export const Header = () => {
  return (
    <div className={'min-h-16 bg-black flex justify-between items-center text-white px-4'}>
      <div className="flex items-center">
        <img src={socialLogo} className="w-40" />
      </div>

      <div className="flex items-center">
        <img src={searchIcon} className="place-items-start" />
        <div className="flex flex-col items-center ml-2">
          <Input className="w-80 mt-2" placeholder="Search for User" />
        </div>
      </div>

      <img src={profilePlaceholder} className="w-16" />
    </div>
  )
}
