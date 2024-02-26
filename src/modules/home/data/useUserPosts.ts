import { useEffect, useState } from 'react'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { PostDetail } from '@/model/post.ts'
import { useUserData } from '@/data/useUserData.ts'
import { useToast } from '@/lib/shadcn-components/ui/use-toast.ts'

export const useUserPosts = (userId: string) => {
  const [posts, setPosts] = useState<PostDetail[]>([])

  const { toast } = useToast()

  const { user } = useUserData(userId)

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase.from('home_page_posts').select('*').eq('author', userId)

      return data
    }

    fetchPosts().then((data) => {
      const mappedPosts: PostDetail[] =
        data?.map((post) => ({
          id: post.id || '',
          CONTENT: post.CONTENT || '',
          PUBLISHED_AT: post.PUBLISHED_AT || '',
          USERNAME: post.USERNAME || '',
          FIRST_NAME: post.FIRST_NAME || '',
          LAST_NAME: post.LAST_NAME || '',
          likes: post.likes || 0,
          comments: post.comments || 0,
          author: post.author || ''
        })) || []

      setPosts(mappedPosts || [])

      return
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
          author: userId,
        }

        setPosts([newPost, ...posts])

        toast({
          variant: 'success',
          title: 'Success',
          description: 'Post created successfully',
        })
      })
  }
  const removePost = (postId: string) => async () => {
    // If the current user is the author, delete the post
    const { error: deletionError } = await supabase.from('POST').delete().eq('id', postId)

    if (deletionError) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An error occurred while removing the post',
      })
      return
    }

    // If the deletion is successful, update the state
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId))

    toast({
      variant: 'success',
      title: 'Success',
      description: 'Post removed successfully',
    })
  }

  return {
    posts,
    handlePostCreation,
    removePost,
  }
}
