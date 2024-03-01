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
import { Settings } from 'lucide-react'
import { profilePlaceholder } from '@/static/images.ts'
import { useTranslation } from '@/locales/i18n'
import { userStore } from '@/store/authStore'
import { useUserFollowers } from '@/modules/common/data/useUserFollowers.ts'
import { useUserData } from '@/data/useUserData.ts'
import { Post } from '@/modules/home/view/HomePage/Post.tsx'
import { useUserPosts } from '@/modules/home/data/useUserPosts.ts'
import { useEditUserForm } from '@/modules/profile/view/ProfilePage/util/useEditUserForm.ts'
import { FormInput } from '@/components/form/FormInput.tsx'
import { useEffect } from 'react'

export const ProfilePage = () => {
  const { t } = useTranslation()
  const { session } = userStore.useStore()
  const userId = String(session?.user?.id)

  const { user, handleUpdateUser } = useUserData(userId)

  const { followersMap } = useUserFollowers(userId, userId)

  const { posts, handleLikeClick } = useUserPosts(userId)

  const { handleSubmit, register, errors, setValue } = useEditUserForm(user)

  useEffect(() => {
    setValue('USERNAME', String(user?.USERNAME))
    setValue('FIRST_NAME', String(user?.FIRST_NAME))
    setValue('LAST_NAME', String(user?.LAST_NAME))
  })

  const onSubmit = handleSubmit((data) => {
    handleUpdateUser(data)
  })

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
            <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <FormInput label="Username" error={errors.USERNAME?.message} {...register('USERNAME')} />
            <FormInput label="First Name" error={errors.FIRST_NAME?.message} {...register('FIRST_NAME')} />
            <FormInput label="Last Name" error={errors.LAST_NAME?.message} {...register('LAST_NAME')} />
          </div>
          <DialogFooter>
            <Button onClick={onSubmit}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="w-full h-32 bg-white flex items-end rounded-md" />
      <div className={'flex gap-3 px-5'}>
        <img
          className="w-20 h-20 rounded-full relative top-[-30px] bg-black"
          src={profilePlaceholder}
          alt="user profile picture"
        />
        <div className="text-sm text-gray-500 flex flex-col mt-1.5">
          <span className="text-xl font-semibold text-white">{`${user?.FIRST_NAME} ${user?.LAST_NAME}`}</span>
          <span className="text-sm text-gray-500">{user?.USERNAME}</span>
        </div>
        <div className="flex flex-col text-gray-500 items-end grow justify-items-center justify-center">
          <span className="text-sm text-gray-500 content-end">
            {t('followers')}: {followersMap?.followers.length}
          </span>
          <span className="text-sm text-gray-500 content-end">
            {t('following')}: {followersMap?.following.length}
          </span>
        </div>
      </div>

      <div className={'flex flex-col gap-3.5 font-semibold mt-5'}>
        <span className={'text-white'}>{t('posts')}</span>

        <div className={'flex flex-col gap-3.5'}>
          {posts.map((post) => (
            <Post key={post.id} data={post} onLikeClick={handleLikeClick(post)} />
          ))}
        </div>
      </div>
    </div>
  )
}
