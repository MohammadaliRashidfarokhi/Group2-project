import { userStore } from '@/store/authStore.ts'
import { useEffect, useState } from 'react'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { CommentDetail } from '@/model/comment'

export const usePostComments = (postId : string): CommentDetail[] => {
  const { session } = userStore.useStore()
  const [comments, setComments] = useState<CommentDetail[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase
        .from('COMMENT')
        .select('*, USER!COMMENT_author_fkey ( * )')
          .eq('COMMENT_TO', postId)

      return data
    }

    fetchPosts().then((data) => {
      const mappedComments: CommentDetail[] =
        data?.map((comment) => ({
          id: comment.id,
          CONTENT: comment.CONTENT,
          PUBLISHED_AT: comment.PUBLISHED_AT,
          USERNAME: comment.USER?.USERNAME || '',
          FIRST_NAME: comment.USER?.FIRST_NAME || '',
          LAST_NAME: comment.USER?.LAST_NAME || '',
        })) || []

      setComments(mappedComments || [])
    })
  }, [session?.user.id])

  return comments
}
