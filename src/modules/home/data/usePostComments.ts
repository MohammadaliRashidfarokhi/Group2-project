import { userStore } from '@/store/authStore.ts'
import { useEffect, useState } from 'react'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { CommentDetail } from '@/model/comment'

export const usePostComments = (postId : string): [CommentDetail[], React.Dispatch<React.SetStateAction<CommentDetail[]>>] => {
  const { session } = userStore.useStore()
  const [comments, setComments] = useState<CommentDetail[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase
        .from('post_comments')
        .select('*')
          .eq('COMMENT_TO', postId)

      return data
    }

    fetchPosts().then((data) => {
      const mappedComments: CommentDetail[] =
        data?.map((comment) => ({
          id: comment.id || '',
          CONTENT: comment.CONTENT || '',
          PUBLISHED_AT: comment.PUBLISHED_AT || '',
          USERNAME: comment.USERNAME || '',
          FIRST_NAME: comment.FIRST_NAME || '',
          LAST_NAME: comment.LAST_NAME || '',
          likes: comment.likes || 0
        })) || []

      setComments(mappedComments || [])

      return
    })
  }, [session?.user.id])

  return [comments, setComments]
}
