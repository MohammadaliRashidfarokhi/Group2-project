import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Posts } from '../../../components/posts/Posts'

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
// import { Label } from '@/lib/shadcn-components/ui/label.tsx.'

export const Profile = () => {

  return (
    <div className="Profile bg-black p-1">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" className="bg-black transform translate-x-2.5 translate-y-12">
            Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] dark:bg-black dark:text-white">
          <DialogHeader>
            <DialogTitle className="dark:text-white">Edit profile</DialogTitle>
            <DialogDescription className="dark:text-gray-300">
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 ">
            <div className="grid grid-cols-4 items-center gap-4">
              <p className="dark:text-gray-300">Name</p>
              <Input id="name" value="" className="col-span-3 dark:dark:bg-gray-800 dark:text-white" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <p className="dark:text-gray-300">Username</p>
              <Input id="username" value="" className="col-span-3 dark:bg-gray-800 dark:text-white" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="dark:bg-black dark:text-white">
              Save changes
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
          <div className="left mt-auto flex gap-2 ml-10 text-gray-500">
            <a href="https://www.facebook.com">
              <FacebookTwoToneIcon fontSize="small" />
            </a>
            <a href="https://www.facebook.com">
              <InstagramIcon fontSize="small" />
            </a>
            <a href="https://www.facebook.com">
              <TwitterIcon fontSize="small" />
            </a>
            <a href="https://www.facebook.com">
              <LinkedInIcon fontSize="small" />
            </a>
            <a href="https://www.facebook.com">
              <PinterestIcon fontSize="small" />
            </a>
          </div>
          <div className="center flex-3 text-sm text-gray-500 ml-12">
            <span className="text-2xl font-semibold text-white">Ediz Genc </span>
            <div className="info">
              <span className="text-sm text-gray-500">@ediz.genc</span>
            </div>
          </div>
          <div className="right flex-1 flex items-center justify-end">
            <EmailOutlinedIcon />
            <MoreVertIcon />
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
      <div className="posts mt-16 flex flex-wrap gap-2 justify-between ">
        <span className="text-2xl font-semibold text-white">Posts</span>
        <Posts />
      </div>
    </div>
  )
}
