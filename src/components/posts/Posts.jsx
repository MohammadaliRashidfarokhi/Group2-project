import './posts.scss'
import { PostAct } from '@/components/postAct/PostAct.jsx'

export const Posts = () => {

  // TEMP - Placeholder for Posts component
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId:1,
      image: "../assets/post-office-1.png",
      post: "This is a post office",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId:1,
      image: "../assets/post-office-2.png",
      desc: "Justice Secretary Alex Chalk has met with senior judges to " +
        "discuss possible solutions to the Post Office IT scandal.",
    },
    {
      id: 1,
      name: "John Doe",
      userId:1,
      image: "../assets/post-office-1.png",
      post: "This is a post office",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId:1,
      image: "../assets/post-office-2.png",
      post: "This is a post",
    },
    {
      id: 3,
      name: "John Doe",
      userId:1,
      image: "../assets/post-office-1.png",
      post: "This is a post office",
    },
    {
      id: 4,
      name: "Jane Doe",
      userId:1,
      image: "../assets/post-office-2.png",
      post: "This is a post",
    },
    {
      id: 5,
      name: "John Doe",
      userId:1,
      image: "../assets/post-office-1.png",
      post: "This is a post office",
    },
    {
      id: 6,
      name: "Jane Doe",
      userId:1,
      image: "../assets/post-office-2.png",
      post: "This is a post",
    },
  ]




  return (
    <div className="posts">
      {posts.map(post => (
        <PostAct post={post} key={post.id}/>
      ))}
    </div>
  )
}
