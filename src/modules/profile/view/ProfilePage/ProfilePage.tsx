import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/lib/shadcn-components/ui/dialog.tsx'
import { Input } from '@/lib/shadcn-components/ui/input.tsx'
import { Settings } from 'lucide-react'
import { profilePlaceholder } from '@/static/images.ts'
import { useTranslation } from '@/locales/i18n'
import { userStore } from '@/store/authStore'
import { useUserFollowerCount } from '../../data/useUserFollowersCount'

export const ProfilePage = () => {

  const { t } = useTranslation()
  const {session} = userStore.useStore()
  const userId = session?.user?.id || ''
  const {userFollowersCount} = useUserFollowerCount(userId)

  return (
    <div className={'w-full'}>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center bg-black text-white bg-contain transform translate-x-2.5 translate-y-12"
          >
            <Settings className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] bg-zinc-950 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 ">
            <div className="grid grid-cols-4 items-center gap-4">
              <p className="text-white">Name</p>
              <Input id="name" value="" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <p className="text-white">Username</p>
              <Input id="username" value="" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="w-full h-32 bg-white flex items-end rounded-md" />
      <div className={'flex gap-3 px-5'}>
        <img
          className="w-20 h-20 rounded-full relative top-[-30px] bg-zinc-950"
          src={profilePlaceholder}
          alt="user profile picture"
        />
        <div className="text-sm text-gray-500 flex flex-col">
          <span className="text-xl font-semibold text-white">Full name</span>
          <span className="text-sm text-muted-foreground">@username</span>
        </div>
        <div className='flex flex-col text-gray-500 items-end grow justify-items-center justify-center'>
          <span className='text-sm text-gray-500 content-end'>{t('followers')}: {userFollowersCount.tot_followers}</span>
          <span className='text-sm text-gray-500 content-end'>{t('following')}: {userFollowersCount.tot_following}</span>
        </div>
      </div>
    </div>
  )
}
