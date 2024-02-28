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

export const ProfilePage = () => {
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
        <DialogContent className="sm:max-w-[600px] bg-black text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Edit profile</DialogTitle>
            <DialogDescription className="text-white">
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 ">
            <div className="grid grid-cols-4 items-center gap-4">
              <p className="text-white">Name</p>
              <Input id="name" value="" className="col-span-3 bg-black text-white" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <p className="text-white">Username</p>
              <Input id="username" value="" className="col-span-3 bg-black text-white" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-black text-red-300 border border-white">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="w-full  h-32 bg-white flex items-end rounded-md" />
      <div className={'flex gap-3 px-5'}>
        <img
          className="w-20 h-20 rounded-full relative top-[-30px] bg-black"
          src={profilePlaceholder}
          alt="user profile picture"
        />
        <div className="text-sm text-gray-500 flex flex-col">
          <span className="text-xl font-semibold text-white">Full name</span>
          <span className="text-sm text-gray-500">@username</span>
        </div>
      </div>
    </div>
  )
}
