import { supabase } from '@/config/supabase/supabaseClient'
import { useEffect, useState } from 'react'
import { PostDetail } from '@/model/post.ts'
import { useToast } from '@/lib/shadcn-components/ui/use-toast.ts'

export const useDetailPost = (postId: string): PostDetail | undefined => {
  const [post, setPost] = useState<PostDetail>()
  const { toast } = useToast()

  useEffect(() => {
    async function fetchPost(id: string) {
      const data = await supabase.from('home_page_posts').select('*').eq('id', id)

      return data
    }

    fetchPost(postId).then((response) => {
      const { data, error } = response

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'An error occurred while fetching the post',
        })
        return
      }

      if (!data?.[0].id) {
        return
      }

      // add some checks for undefined somewhere
      const postDetail: PostDetail = {
        id: data?.at(0)?.id || '',
        CONTENT: data?.at(0)?.CONTENT || '',
        PUBLISHED_AT: data?.at(0)?.PUBLISHED_AT || '',
        USERNAME: data?.at(0)?.USERNAME || '',
        FIRST_NAME: data?.at(0)?.FIRST_NAME || '',
        LAST_NAME: data?.at(0)?.LAST_NAME || '',
        likes: data?.at(0)?.likes || 0,
        comments: data?.at(0)?.comments || 0,
        author: data?.at(0)?.author || '',
      }

      setPost(postDetail)
    })
  }, [postId])

  return post
}
