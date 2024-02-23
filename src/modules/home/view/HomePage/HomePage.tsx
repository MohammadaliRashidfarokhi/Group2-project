import { Post } from '@/modules/home/view/HomePage/Post.tsx'
import { useHomePagePosts } from '@/modules/home/data/useHomePagePosts.ts'
import { WritePost } from '@/modules/home/view/HomePage/WritePost.tsx'

export const HomePage = () => {
  const { posts, handlePostCreation, removePost } = useHomePagePosts()

  return (
    <div className={'w-full'}>
      <div className={'flex flex-col gap-7'}>
        <WritePost onSubmit={handlePostCreation} />
        {posts.length > 0 &&
          posts.map((post) => <Post key={post.id} data={post} onRemove={() => removePost(post.id)} />)}
        {posts.length === 0 && (
          <div className={'flex flex-col gap-3.5 text-white mt-10'}>
            <span className={'text-center text-xl font-bold'}>No posts found</span>
            <p className={'text-center text'}>There are no posts available at the moment. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  )
}
