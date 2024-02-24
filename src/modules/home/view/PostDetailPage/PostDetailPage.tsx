import { backArrow } from '@/static/images'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDetailPost } from '../../data/useDetailPost'
import { usePostComments } from '../../data/usePostComments'
import { Post } from '../HomePage/Post'
import { Comment } from './Comment'
import { useState } from 'react'
import { useUser } from '../../data/useUser'
import { CommentDetail } from '@/model/comment'
import { supabase } from '@/config/supabase/supabaseClient'

export const PostDetailPage = () => {
  const user = useUser()
  const navigate = useNavigate()
  const { id } = useParams()
  const [newComment, setNewComment] = useState<string>('')
  if (id === undefined) {
    navigate('/')
    return
  }
  const post = useDetailPost(id)
  const [comments, setComments] = usePostComments(id)


  const handleBackArrow = () => {
    navigate(-1)
  }

  const postComment = (text: string) => {
    if (text === '') {
      console.log("Empty comment")
      return
    }

    let newCommentDetail: CommentDetail = {
      id: '', // this is a bad idea need to figure out a better solution
      CONTENT: text,
      PUBLISHED_AT: new Date().getTime().toString(),
      USERNAME: user.USERNAME,
      FIRST_NAME: user.FIRST_NAME,
      LAST_NAME: user.LAST_NAME,
      likes: 0
    }

    let copyComments = comments
    copyComments.push(newCommentDetail)

    setComments(copyComments)

    supabase.from("COMMENT").insert({ author: user.id, COMMENT_TO: id, CONTENT: text }).then(() => {
      setNewComment('')
    }) // add the new comment to database
  }

  return (
    <div className="w-full px-7 flex flex-col items-center">
      <div className="w-full flex items-center justify-between mb-2">
        <Link to="/" className="cursor-pointer">
          <img src={backArrow} className="w-6" alt="back arrow" onClick={handleBackArrow} />
        </Link>
        <span className="text-white font-bold" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          POST
        </span>
      </div>

      <span className="text-white font-bold w-full mb-1" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          {post === undefined ? <p></p> : <Post data={post}></Post>}
        </span>

      <div className='flex-grow w-full gap-1'>
        {comments?.length === 0 ?
          <div className={'flex flex-col gap-3.5 text-white mt-10'}>
            <span className={'text-center text-xl font-bold'}>No Comments found</span>
            <p className={'text-center text'}>There are no comments for this post. Please write one</p>
          </div> : comments?.map((comment) =>
            <span className='flex-grow'><Comment key={comment.id} data={comment}></Comment></span>
          )}
      </div>

      <div className="w-full flex flex-col">
        <hr className="my-2 border-gray-300 w-full" />
        <input
          value={newComment}
          className="w-full bg-black py-2 rounded-md text-white focus:outline-none"
          placeholder="Post a comment"
          onChange={(event) => {
            setNewComment(event.target.value === null ? '' : event.target.value)
          }}
        />

        <button className="bg-white text-black font-bold py-2 px-4 rounded mt-2 w-full" onClick={() => postComment(newComment)}>Send reply</button>
      </div>
    </div>
  )
}
