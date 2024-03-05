import { Tables } from '@/model/dbTypes.ts'
import { CommentDetail } from '@/model/comment.ts'

type PostBase = Pick<Tables<'POST'>, 'id' | 'CONTENT' | 'PUBLISHED_AT' | 'author'> &
  Pick<Tables<'USER'>, 'LAST_NAME' | 'FIRST_NAME' | 'USERNAME'>

export type Post = PostBase & {
  likes: string[]
  comments: number
}

export type PostDetail = PostBase & {
  likes: string[]
  comments: CommentDetail[]
}
