import { backArrow } from '@/static/images'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDetailPost } from '../../data/useDetailPost'
import { PostDetail } from '@/model/post'
import { CommentDetail } from '@/model/comment'
import { usePostComments } from '../../data/usePostComments'
import { Post } from '../HomePage/Post'
import { Comment } from './Comment'

export const PostDetailPage = () => {
  const navigate = useNavigate()
  const {postId} = useParams()
  const [post, setPost] = useState<PostDetail>()
  const [comments, setComments] = useState<CommentDetail[]>()


  const handleBackArrow = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (postId === undefined) {
      navigate('/404')
    }
    const Id = postId === undefined ? '' : postId
    const post = useDetailPost(Id)
    setPost(post)

    const comments = usePostComments(Id)
    setComments(comments)
  })

  return (
    <div className="w-full px-7 flex flex-col items-center">
      <div className="w-full flex items-center justify-between">
        <Link to="/" className="cursor-pointer">
          <img src={backArrow} className="w-6" alt="back arrow" onClick={handleBackArrow} />
        </Link>
        <span className="text-white font-bold" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          {post === undefined ? <p></p> : <Post data={post}></Post>}
        </span>
      </div>

      <div>
        {comments?.map((comment) =>
          <Comment key={comment.id} data={comment}></Comment>
        )}
      </div>

      <div className="mt-4 w-full max-w-md flex flex-col">
        <hr className="my-2 border-gray-300 w-full" />
        <input
          className="w-full bg-black px-4 py-2 rounded-md text-white focus:outline-none"
          placeholder="Reply to thread"
        />

        <button className="bg-white text-black font-bold py-2 px-4 rounded mt-2 w-full">Send reply</button>
      </div>
    </div>
  )
}
