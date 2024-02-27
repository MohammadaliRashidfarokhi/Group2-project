import { backArrow } from '@/static/images'
import { Link, useParams } from 'react-router-dom'
import { useDetailPost } from '../../data/useDetailPost'
import { usePostComments } from '../../data/usePostComments'
import { Post } from '../HomePage/Post'
import { Comment } from './Comment'
import { useState } from 'react'
import { APP_ROUTES } from '@/config/router/routes.ts'
import { userStore } from '@/store/authStore.ts'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { Textarea } from '@/lib/shadcn-components/ui/textarea.tsx'
import { Card, CardContent, CardFooter } from '@/lib/shadcn-components/ui/card.tsx'

export const PostDetailPage = () => {
  const { id } = useParams()
  const { session } = userStore.useStore()
  const [newComment, setNewComment] = useState<string>('')
  const post = useDetailPost(id || '')
  const { comments, handleCommentCreation, removeComment } = usePostComments(id || '')

  const postComment = () => {
    if (newComment === '') {
      return
    }

    handleCommentCreation(newComment).then(() => {
      setNewComment('')
    })
  }

  if (!post) {
    return <div className={'text-white'}>Loading...</div>
  }

  return (
    <div className="w-full flex flex-col gap-1.5">
      <div className="w-full flex items-center pb-2.5">
        <Link to={APP_ROUTES.home} className="cursor-pointer">
          <img src={backArrow} className="w-4 h-4" alt="back arrow" />
        </Link>
        <span className="text-white font-bold ml-auto mr-auto">Post</span>
      </div>

      <Post data={post} />

      <div className="flex flex-col w-full gap-2.5">
        {comments?.map((comment) => (
          <Comment
            key={comment.id}
            data={comment}
            onRemove={comment.author === session?.user.id ? removeComment(comment.id) : undefined}
          />
        ))}
      </div>

      <Card>
        <CardContent className={'text-white pt-6'}>
          <Textarea
            placeholder={'Reply to thread'}
            className={'bg-black min-h-12 text-md p-0 border-none ring-offset-black'}
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value === null ? '' : event.target.value)
            }}
          />
        </CardContent>
        <CardFooter>
          <Button className={'w-full'} onClick={postComment}>
            Send reply
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
