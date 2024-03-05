import { Post } from '@/modules/home/view/HomePage/Post.tsx'
import { WritePost } from '@/modules/home/view/HomePage/WritePost.tsx'
import { userStore } from '@/store/authStore.ts'
import { useTranslation } from '@/locales/i18n.ts'
import { useUserFollowers } from '@/modules/common/data/useUserFollowers.ts'
import { useMemo } from 'react'
import { useUserPosts } from '@/modules/common/data/useUserPosts.ts'

export const HomePage = () => {
  const { t } = useTranslation()
  const { session } = userStore.useStore()
  const userId = session?.user?.id || ''

  const { followersMap } = useUserFollowers(userId, userId)
  const followingIds = useMemo(() => followersMap?.following.map((elem) => elem.FOLLOWING) || [], [followersMap])

  const { posts, handlePostCreation, removePost, handleLikeClick } = useUserPosts(userId, followingIds)

  return (
    <div className={'w-full flex flex-col'}>
      <WritePost onSubmit={handlePostCreation} />

      <div className={'flex flex-col gap-3.5 font-semibold mt-7'}>
        <span className={'text-white'}>{t('posts')}</span>
        {posts.length > 0 &&
          posts.map((post) => (
            <Post
              key={post.id}
              data={post}
              onRemove={post.author === userId ? removePost(post.id) : undefined}
              onLikeClick={handleLikeClick(post)}
              isLikedByCurrentUser={post.likes.some((like) => like === userId)}
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
  )
}
