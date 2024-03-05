import { Tables } from '@/model/dbTypes.ts'

export type PostDetail = Pick<Tables<'POST'>, 'id' | 'CONTENT' | 'PUBLISHED_AT' | 'author'> &
  Pick<Tables<'USER'>, 'LAST_NAME' | 'FIRST_NAME' | 'USERNAME'> & {
    likes: string[]
    comments: number
  }
