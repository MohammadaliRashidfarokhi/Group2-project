import {Tables} from '@/model/dbTypes.ts'

export type CommentDetail = Pick<Tables<'COMMENT'>, 'id' | 'CONTENT' | 'PUBLISHED_AT'> &
    Pick<Tables<'USER'>, 'LAST_NAME' | 'FIRST_NAME' | 'USERNAME'>