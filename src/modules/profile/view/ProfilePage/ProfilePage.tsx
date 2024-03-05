import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/lib/shadcn-components/ui/dialog.tsx'
import { profilePlaceholder } from '@/static/images.ts'
import { useTranslation } from '@/locales/i18n'
import { userStore } from '@/store/authStore'
import { useUserFollowers } from '@/modules/common/data/useUserFollowers.ts'
import { Post } from '@/modules/home/view/HomePage/Post.tsx'
import { useEditUserForm } from '@/modules/profile/view/ProfilePage/util/useEditUserForm.ts'
import { useEffect, useState } from 'react'
import { GearIcon } from '@radix-ui/react-icons'
import { useUserData } from '@/modules/common/data/useUserData.ts'
import { useUserPosts } from '@/modules/common/data/useUserPosts.ts'
import { FormInput } from '@/modules/common/components/form/FormInput.tsx'

export const ProfilePage = () => {
  const { t } = useTranslation(['common', 'forms'])
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const { session } = userStore.useStore()
  const userId = String(session?.user?.id)

  const { user, handleUpdateUser } = useUserData(userId)

  const { followersMap } = useUserFollowers(userId, userId)

  const { posts, handleLikeClick, removePost } = useUserPosts(userId)

  const { handleSubmit, register, errors, setValue } = useEditUserForm(user)

  useEffect(() => {
    setValue('USERNAME', String(user?.USERNAME))
    setValue('FIRST_NAME', String(user?.FIRST_NAME))
    setValue('LAST_NAME', String(user?.LAST_NAME))
  }, [user])

  const onSubmit = handleSubmit((data) => {
    handleUpdateUser(data).then(() => {
      setDialogOpen(false)
    })
  })

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[600px] bg-zinc-950 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">{t('edit-profile')}</DialogTitle>
            <DialogDescription>{t('edit-profile-placeholder')}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <FormInput label={t('username')} error={errors.USERNAME?.message} {...register('USERNAME')} />
            <FormInput label={t('name')} error={errors.FIRST_NAME?.message} {...register('FIRST_NAME')} />
            <FormInput label={t('surname')} error={errors.LAST_NAME?.message} {...register('LAST_NAME')} />
          </div>
          <DialogFooter>
            <Button onClick={onSubmit}>{t('save')}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className={'w-full'}>
        <div className="w-full h-32 bg-white flex items-end rounded-md relative">
          <Button
            variant="outline"
            className="flex items-center bg-black text-white bg-contain transform absolute top-2 left-2"
            onClick={() => setDialogOpen(true)}
          >
            <GearIcon className="mr-2 h-4 w-4" /> {t('edit-profile')}
          </Button>
        </div>
        <div className={'flex gap-3 px-5'}>
          <img
            className="w-20 h-20 rounded-full relative top-[-30px] bg-black"
            src={profilePlaceholder}
            alt="user profile picture"
          />
          <div className={'mt-1.5 flex justify-between w-full'}>
            <div className="text-sm text-gray-500 flex flex-col">
              <span className="text-xl font-semibold text-white">{`${user?.FIRST_NAME} ${user?.LAST_NAME}`}</span>
              <span className="text-sm text-gray-500">{user?.USERNAME}</span>
            </div>
            <div className="flex flex-col text-gray-500 text-nowrap">
              <span className="text-sm text-gray-500">
                {t('followers')}: {followersMap?.followers.length}
              </span>
              <span className="text-sm text-gray-500">
                {t('following')}: {followersMap?.following.length}
              </span>
            </div>
          </div>
        </div>

        <div className={'flex flex-col gap-3.5 font-semibold mt-5'}>
          <span className={'text-white'}>{t('posts')}</span>

          <div className={'flex flex-col gap-3.5'}>
            {posts.map((post) => (
              <Post key={post.id} data={post} onLikeClick={handleLikeClick(post)} onRemove={removePost(post.id)}               isLikedByCurrentUser={post.likes.includes(userId)}
              />
            ))}
            {posts.length === 0 && (
              <div className={'flex flex-col gap-3.5 text-white mt-10'}>
                <span className={'text-center text-xl font-bold'}>{t('no-posts-found')}</span>
                <p className={'text-center text'}>{t('no-posts-found-message')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
