import { userStore } from '@/store/authStore.ts'
import { useEffect, useState } from 'react'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { PostDetail } from '@/model/post.ts'
import { useUserData } from '@/data/useUserData.ts'
import { useToast } from '@/lib/shadcn-components/ui/use-toast.ts'

export const useHomePagePosts = () => {
  const [posts, setPosts] = useState<PostDetail[]>([])

  const { toast } = useToast()

  const { session } = userStore.useStore()
  const userId = String(session?.user.id)

  const { user } = useUserData(userId)

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase.from('POST').select('*, USER!POST_author_fkey ( * )').eq('author', userId)

      return data
    }

    fetchPosts().then((data) => {
      const mappedPosts: PostDetail[] =
        data?.map((post) => ({
          id: post.id,
          CONTENT: post.CONTENT,
          PUBLISHED_AT: post.PUBLISHED_AT,
          USERNAME: post.USER?.USERNAME || '',
          FIRST_NAME: post.USER?.FIRST_NAME || '',
          LAST_NAME: post.USER?.LAST_NAME || '',
        })) || []

      setPosts(mappedPosts || [])
    })
  }, [userId])

  const handlePostCreation = async (content: string) => {
    supabase
      .from('POST')
      .insert({ author: userId, CONTENT: content, PUBLISHED_AT: new Date().toISOString().toLocaleString() })
      .select('*')
      .then((response) => {
        const { data, error } = response
        console.log(response)

        if (error) {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: 'An error occurred while creating the post',
          })
          return
        }

        const newPost: PostDetail = {
          id: data?.[0].id || '',
          CONTENT: data?.[0].CONTENT || '',
          PUBLISHED_AT: data?.[0].PUBLISHED_AT || '',
          USERNAME: user?.USERNAME || '',
          FIRST_NAME: user?.FIRST_NAME || '',
          LAST_NAME: user?.LAST_NAME || '',
        }

        setPosts([newPost, ...posts])

        toast({
          variant: 'success',
          title: 'Success',
          description: 'Post created successfully',
        })
      })
  }

  return {
    posts,
    handlePostCreation,
  }
}
