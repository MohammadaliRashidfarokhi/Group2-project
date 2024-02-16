import { Tables } from '@/model/dbTypes.ts'

export type PostDetail = Pick<Tables<'POST'>, 'id' | 'CONTENT' | 'PUBLISHED_AT'> &
  Pick<Tables<'USER'>, 'LAST_NAME' | 'FIRST_NAME' | 'USERNAME'>
