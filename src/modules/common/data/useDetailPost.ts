import { supabase } from '@/config/supabase/supabaseClient'
import { useEffect, useState } from 'react'
import { Post } from '@/model/post.ts'
import { useToast } from '@/lib/shadcn-components/ui/use-toast.ts'
import { useTranslation } from '@/locales/i18n.ts'

export const useDetailPost = (postId: string): Post | undefined => {
  const { t } = useTranslation('toasts')
  const [post, setPost] = useState<Post>()
  const { toast } = useToast()

  useEffect(() => {
    async function fetchPost(id: string) {
      return supabase
        .from('POST')
        .select('*, POST_LIKES (liker, liked ), COMMENT (id), USER!POST_author_fkey( USERNAME, FIRST_NAME, LAST_NAME)')
        .eq('id', id)
        .single()
    }

    fetchPost(postId).then((response) => {
      const { data, error } = response

      if (error) {
        toast({
          variant: 'destructive',
          title: t('error'),
          description: t('post-fetch-error'),
        })
        return
      }

      const postDetail: Post = {
        id: data?.id || '',
        CONTENT: data?.CONTENT || '',
        PUBLISHED_AT: data?.PUBLISHED_AT || '',
        USERNAME: data?.USER?.USERNAME || '',
        FIRST_NAME: data?.USER?.FIRST_NAME || '',
        LAST_NAME: data?.USER?.LAST_NAME || '',
        likes: data?.POST_LIKES?.map((like) => like.liker) || [],
        comments: data?.COMMENT?.length || 0,
        author: data?.author || '',
      }

      setPost(postDetail)
    })
  }, [postId, t])

  return post
}
