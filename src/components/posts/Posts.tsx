import { PostAct } from '@/components/postAct/PostAct.tsx'

export const Posts = () => {

  // TEMP - Placeholder for Posts component
  const posts = [
    {
      id: 1,
      name: 'S. ONeill',
      userId: 1,
      profilePic: '../src/assets/male_avatar.svg',
      desc: 'This is a post office',
      img: '../src/assets/post-office-1.png',
    },
    {
      id: 2,
      name: 'M. Jordan',
      userId: 2,
      profilePic: '../src/assets/male_avatar.svg',
      desc:
        'Justice Secretary Alex Chalk has met with senior judges to ' +
        'discuss possible solutions to the Post Office IT scandal.',
      img: '../src/assets/post-office-2.png',
    },
  ]

  return (
    <div className="flex flex-col gap-3 bg-black">
      {posts.map((post) => (
        <PostAct key={post.id} post={post} />
      ))}
    </div>
  )
}
