import { userStore } from '@/store/authStore.ts'
import { useEffect, useState } from 'react'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { CommentDetail } from '@/model/comment'
import { useToast } from '@/lib/shadcn-components/ui/use-toast.ts'
import { User } from '@/model/user'

export const usePostComments = (postId: string) => {
  const { session } = userStore.useStore()
  const [comments, setComments] = useState<CommentDetail[]>([])
  const { toast } = useToast()

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
          likes: comment.likes || 0,
          author: comment.author || ''
        })) || []

      setComments(mappedComments || [])

      return
    })
  }, [session?.user.id])

  const handleCommentCreation = async (content: string, user: User): Promise<void> => {
    supabase
      .from('COMMENT')
      .insert({ author: user.id, CONTENT: content, PUBLISHED_AT: new Date().toISOString().toLocaleString(), COMMENT_TO: postId })
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

        const newPost: CommentDetail = {
          id: data?.[0].id || '',
          CONTENT: data?.[0].CONTENT || '',
          PUBLISHED_AT: data?.[0].PUBLISHED_AT || '',
          USERNAME: user?.USERNAME || '',
          FIRST_NAME: user?.FIRST_NAME || '',
          LAST_NAME: user?.LAST_NAME || '',
          author: user.id,
          likes: 0
        }

        setComments([newPost, ...comments])

        toast({
          variant: 'success',
          title: 'Success',
          description: 'Post created successfully',
        })
      })
  }
  const removeComment = (commentId: string) => async () => {
    // If the current user is the author, delete the post
    const { error: deletionError } = await supabase.from('COMMENT').delete().eq('id', commentId)

    if (deletionError) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An error occurred while removing the post',
      })
      return
    }

    // If the deletion is successful, update the state
    setComments((prevPosts) => prevPosts.filter((post) => post.id !== postId))

    toast({
      variant: 'success',
      title: 'Success',
      description: 'Post removed successfully',
    })
  }

  return {comments, handleCommentCreation, removeComment}
}
