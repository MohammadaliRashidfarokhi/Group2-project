import { Input } from '@/lib/shadcn-components/ui/input'
import { socialLogo, profilePlaceholder } from '@/static/images'

export const Header = () => {
 
  return (
    <div className={'min-h-16 bg-amber-300 flex justify-between '}>
      <img src={socialLogo} className='w-40'/>
      <Input className='w-80'/>
      <img src={profilePlaceholder} className=''/> 

      
    </div>
  )
}
