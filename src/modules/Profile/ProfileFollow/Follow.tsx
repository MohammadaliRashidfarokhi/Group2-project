import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { PersonAddAltSharp } from '@mui/icons-material'
import { toast, Toaster } from 'sonner'

export const Follow = () => {

  return (
    <div className="Follow">
      <Button
        className="flex items-center bg-black text-white bg-contain transform translate-x-2.5 translate-y-12"
        variant="outline"
        onClick={() => {
          const currentDateTime = new Date().toLocaleString()
          toast('You are following <the person/:id> now', {
            description: `${currentDateTime}`,
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }}
      >
        <PersonAddAltSharp className="mr-2 h-4 w-4" /> Follow
      </Button>
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
            <span className="text-2xl font-semibold text-white">Full name </span>
            <div className="info">
              <span className="text-sm text-gray-500">@username</span>
            </div>
          </div>
          <div className="right flex-1 flex items-center justify-end">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className="posts mt-14 flex flex-col gap-2 justify-between">
        <span className="text-2xl font-semibold text-white">Posts</span>
      </div>
      <Toaster />
    </div>
  )
}
