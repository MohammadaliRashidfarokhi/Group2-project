import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { profilePlaceholder } from '@/static/images.ts'

export const ProfileFollow = () => {
  const handleFollow = () => {
    console.log('Followed')
  }

  return (
    <div className="Follow">
      <Button
        className="flex items-center bg-black text-white bg-contain transform translate-x-2.5 translate-y-12"
        variant="outline"
        onClick={handleFollow}
      >
        Follow
      </Button>
      <div className="images w-full h-50 bg-white flex items-end">
        <img
          className="profilePicture w-40 h-40 rounded-full transform translate-x-1/3 translate-y-1/2"
          src={profilePlaceholder}
          alt="user profile picture"
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
      </div>
      <div className="posts mt-14 flex flex-col gap-2 justify-between">
        <span className="text-2xl font-semibold text-white">Posts</span>
      </div>
    </div>
  )
}
