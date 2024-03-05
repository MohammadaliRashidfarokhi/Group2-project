import { profilePlaceholder } from '@/static/images.ts'
import { useParams } from 'react-router-dom'
import { Post } from '@/modules/home/view/HomePage/Post.tsx'
import { useTranslation } from '@/locales/i18n.ts'
import { useUserFollowers } from '@/modules/common/data/useUserFollowers.ts'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { userStore } from '@/store/authStore.ts'
import { useUserData } from '@/modules/common/data/useUserData.ts'
import { useUserPosts } from '@/modules/common/data/useUserPosts.ts'

export const ProfileFollow = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const { user } = useUserData(String(id))

  const { session } = userStore.useStore()
  const currentUserId = String(session?.user?.id)

  const { followersMap, handleFollowButtonClick } = useUserFollowers(String(id), currentUserId)

  const { posts } = useUserPosts(String(id))

  return (
    <div className={'w-full flex flex-col'}>
      <div className="w-full min-h-32 bg-white flex items-end rounded-md relative">
        <Button
          variant="outline"
          className="flex items-center bg-black text-white bg-contain transform w-fit absolute top-2 left-2"
          onClick={handleFollowButtonClick}
        >
          {!followersMap?.followers.find((elem) => elem.follower === currentUserId) ? t('follow') : t('following')}
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
            <Post key={post.id} data={post} />
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
  )
}
