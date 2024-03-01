import { profilePlaceholder } from '@/static/images.ts'
import { useUserData } from '@/data/useUserData.ts'
import { useParams } from 'react-router-dom'
import { useUserPosts } from '@/modules/home/data/useUserPosts.ts'
import { Post } from '@/modules/home/view/HomePage/Post.tsx'
import { useTranslation } from '@/locales/i18n.ts'
import { useUserFollowers } from '@/modules/common/data/useUserFollowers.ts'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { userStore } from '@/store/authStore.ts'

export const ProfileFollow = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const { user } = useUserData(String(id))

  const { session } = userStore.useStore()
  const currentUserId = String(session?.user?.id)

  const { followersMap, handleFollowButtonClick } = useUserFollowers(String(id), currentUserId)

  const { posts } = useUserPosts(String(id))

  return (
    <div className={'w-full flex-col'}>
      <Button
        variant="outline"
        className="flex items-center bg-black text-white bg-contain transform translate-x-2.5 translate-y-12"
        onClick={handleFollowButtonClick}
      >
        {!followersMap?.followers.find((elem) => elem.follower === currentUserId) ? t('follow') : t('following')}
      </Button>
      <div className="w-full min-h-32 bg-white flex items-end rounded-md" />
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
            <Post key={post.id} data={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
