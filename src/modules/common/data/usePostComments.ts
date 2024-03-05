import { useEffect, useState } from 'react'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { CommentDetail } from '@/model/comment'
import { useToast } from '@/lib/shadcn-components/ui/use-toast.ts'
import { userStore } from '@/store/authStore.ts'
import { useTranslation } from '@/locales/i18n.ts'
import { useUserData } from '@/modules/common/data/useUserData.ts'

export const usePostComments = (postId: string) => {
  const { t } = useTranslation('toasts')
  const { session } = userStore.useStore()
  const userId = String(session?.user?.id)
  const { user } = useUserData(userId)
  const { toast } = useToast()

  const [comments, setComments] = useState<CommentDetail[]>([])

  useEffect(() => {
    async function fetchPosts() {
      return supabase
        .from('COMMENT')
        .select('*, COMMENT_LIKES (liker, liked), USER!COMMENT_author_fkey(USERNAME, FIRST_NAME, LAST_NAME)')
        .eq('COMMENT_TO', postId)
        .order('PUBLISHED_AT', { ascending: true })
    }

    fetchPosts().then((response) => {
      const { data, error } = response

      if (error) {
        toast({
          variant: 'destructive',
          title: t('error'),
          description: t('comments-fetch-error'),
        })
        return
      }

      const mappedComments: CommentDetail[] =
        data?.map((comment) => ({
          id: comment.id || '',
          CONTENT: comment.CONTENT || '',
          PUBLISHED_AT: comment.PUBLISHED_AT || '',
          USERNAME: comment.USER?.USERNAME || '',
          FIRST_NAME: comment.USER?.FIRST_NAME || '',
          LAST_NAME: comment.USER?.LAST_NAME || '',
          likes: comment.COMMENT_LIKES.map((like) => like.liker) || [],
          author: comment.author || '',
        })) || []

      setComments(mappedComments || [])

      return
    })
  }, [postId, t])

  const handleCommentCreation = async (content: string): Promise<void> => {
    supabase
      .from('COMMENT')
      .insert({
        author: userId,
        CONTENT: content,
        PUBLISHED_AT: new Date().toISOString().toLocaleString(),
        COMMENT_TO: postId,
      })
      .select('*')
      .then((response) => {
        const { data, error } = response

        if (error) {
          toast({
            variant: 'destructive',
            title: t('error'),
            description: t('comment-create-error'),
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
          author: userId,
          likes: [],
        }

        setComments([newPost, ...comments])

        toast({
          variant: 'success',
          title: t('success'),
          description: t('comment-create-success'),
        })
      })
  }
  const removeComment = (commentId: string) => async () => {
    // If the current user is the author, delete the post
    const { error: deletionError } = await supabase.from('COMMENT').delete().eq('id', commentId)

    if (deletionError) {
      toast({
        variant: 'destructive',
        title: t('error'),
        description: t('comment-remove-error'),
      })
      return
    }

    // If the deletion is successful, update the state
    setComments((prevComment) => prevComment.filter((comment) => comment.id !== commentId))

    toast({
      variant: 'success',
      title: t('success'),
      description: t('comment-remove-success'),
    })
  }

  const likeComment = (commentId: string) => {
    supabase
      .from('COMMENT_LIKES')
      .insert({ liked: commentId, liker: userId })
      .then((response) => {
        const { error } = response

        if (error) {
          toast({
            variant: 'destructive',
            title: t('error'),
            description: t('like-comment-error'),
          })
          return
        }

        setComments((prevComments) =>
          prevComments.map((comment) => {
            if (comment.id === commentId) {
              return {
                ...comment,
                likes: [...comment.likes, userId],
              }
            }
            return comment
          }),
        )
      })
  }

  const unLikeComment = (commentId: string) => {
    supabase
      .from('COMMENT_LIKES')
      .delete()
      .eq('liked', commentId)
      .eq('liker', userId)
      .then((response) => {
        const { error } = response
        if (error) {
          toast({
            variant: 'destructive',
            title: t('error'),
            description: t('like-comment-error'),
          })
          return
        }

        setComments((prevComments) =>
          prevComments.map((comment) => {
            if (comment.id === commentId) {
              return {
                ...comment,
                likes: comment.likes.filter((like) => like !== userId),
              }
            }
            return comment
          }),
        )
      })
  }

  const handleLikeClick = (commentId: string) => () => {
    const isLiked = comments.find((comment) => comment.id === commentId)?.likes.includes(userId)

    if (isLiked) {
      unLikeComment(commentId)
      return
    }

    return likeComment(commentId)
  }

  return { comments, handleCommentCreation, removeComment, handleLikeClick }
}
