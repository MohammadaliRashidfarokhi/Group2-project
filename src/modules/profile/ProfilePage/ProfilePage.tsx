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

export const ProfilePage = () => {
  return (
    <div className="Profile">
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
            <Button type="submit" className=" bg-black text-red-300 border border-white">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="images w-full h-50 bg-white flex items-end">
        <img
          className="profilePicture w-40 h-40 rounded-full transform translate-x-1/3 translate-y-1/2"
          src="src/assets/male_avatar.png"
          alt=""
        />
      </div>
      <div className="profileContainer mt-10 border border-solid border-gray-700 p-5 text-white">
        <div className="userInfo rounded-2xl p-1 bg-black text-whitesmoke flex items-center justify-between">
          <div className="center flex-3 text-sm text-gray-500 ml-12">
            <span className="text-2xl font-semibold text-white">Full name </span>
            <div className="info">
              <span className="text-sm text-gray-500">@username</span>
            </div>
          </div>
        </div>
        <div className="write flex mt-8 items-center justify-between gap-2 mb-5">
          <img className="w-12 h-12 rounded-full object-cover" src="../src/assets/male_avatar.png" alt="User Avatar" />
          <input
            className="flex-1 p-2 border border-solid border-gray-700 bg-transparent text-white"
            type="text"
            placeholder="Write a comment..."
          />
          <button className="p-2 px-8 border-none rounded-md bg-blue-500 text-white cursor-pointer">Post</button>
        </div>
      </div>
      <div className="posts mt-14 flex flex-col gap-2 justify-between">
        <span className="text-2xl font-semibold text-white">Posts</span>
      </div>
    </div>
  )
}
