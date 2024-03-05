import { useEffect, useState } from 'react'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { Post } from '@/model/post.ts'
import { useToast } from '@/lib/shadcn-components/ui/use-toast.ts'
import { useTranslation } from '@/locales/i18n.ts'
import { useUserData } from '@/modules/common/data/useUserData.ts'

export const useUserPosts = (currentUserId: string, followerIds?: string[]) => {
  const { t } = useTranslation('toasts')
  const [posts, setPosts] = useState<Post[]>([])
  const { toast } = useToast()

  const { user } = useUserData(currentUserId)

  useEffect(() => {
    const userIdsInput = [currentUserId, ...(followerIds || [])]

    async function fetchPosts() {
      return supabase
        .from('POST')
        .select('*, POST_LIKES (liker, liked ), COMMENT (id), USER!POST_author_fkey( USERNAME, FIRST_NAME, LAST_NAME)')
        .in('author', userIdsInput)
        .order('PUBLISHED_AT', { ascending: false })
    }

    fetchPosts().then((response) => {
      const { data, error } = response

      if (error) {
        toast({
          variant: 'destructive',
          title: t('error'),
          description: t('posts-fetch-error'),
        })
        return
      }

      const mappedPosts: Post[] =
        data?.map((post) => ({
          id: post.id || '',
          CONTENT: post.CONTENT || '',
          PUBLISHED_AT: post.PUBLISHED_AT || '',
          USERNAME: post?.USER?.USERNAME || '',
          FIRST_NAME: post?.USER?.FIRST_NAME || '',
          LAST_NAME: post?.USER?.LAST_NAME || '',
          likes: post.POST_LIKES?.map((like) => like.liker) || [],
          comments: post.COMMENT?.length || 0,
          author: post.author || '',
        })) || []

      setPosts(mappedPosts || [])
    })
  }, [currentUserId, followerIds, t, toast])

  const handlePostCreation = async (content: string) => {
    supabase
      .from('POST')
      .insert({ author: currentUserId, CONTENT: content, PUBLISHED_AT: new Date().toISOString().toLocaleString() })
      .select('*')
      .then((response) => {
        const { data, error } = response
        console.log(response)

        if (error) {
          toast({
            variant: 'destructive',
            title: t('error'),
            description: t('post-creation-error'),
          })
          return
        }

        const newPost: Post = {
          id: data?.[0].id || '',
          CONTENT: data?.[0].CONTENT || '',
          PUBLISHED_AT: data?.[0].PUBLISHED_AT || '',
          USERNAME: user?.USERNAME || '',
          FIRST_NAME: user?.FIRST_NAME || '',
          LAST_NAME: user?.LAST_NAME || '',
          author: currentUserId,
          likes: [],
          comments: 0,
        }

        setPosts([newPost, ...posts])

        toast({
          variant: 'success',
          title: t('success'),
          description: t('post-create-success'),
        })
      })
  }
  const removePost = (postId: string) => async () => {
    // If the current user is the author, delete the post
    const { error: deletionError } = await supabase.from('POST').delete().eq('id', postId)

    if (deletionError) {
      toast({
        variant: 'destructive',
        title: t('error'),
        description: t('post-remove-error'),
      })
      return
    }

    // If the deletion is successful, update the state
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId))

    toast({
      variant: 'success',
      title: t('success'),
      description: t('post-remove-success'),
    })
  }

  const handlePostLike = (postId: string) => {
    supabase
      .from('POST_LIKES')
      .insert({ liker: currentUserId, liked: postId })
      .then((response) => {
        const { error } = response
        if (error) {
          toast({
            variant: 'destructive',
            title: t('error'),
            description: t('unable-to-like'),
          })
          return
        }

        setPosts((prevPosts) =>
          prevPosts.map((post) => {
            if (post.id === postId) {
              return {
                ...post,
                likes: [...post.likes, currentUserId],
              }
            }

            return post
          }),
        )
      })
  }

  const handlePostUnlike = (postId: string) => {
    supabase
      .from('POST_LIKES')
      .delete()
      .eq('liker', currentUserId)
      .eq('liked', postId)
      .then((response) => {
        const { error } = response
        if (error) {
          toast({
            variant: 'destructive',
            title: t('error'),
            description: t('unable-to-unlike'),
          })
          return
        }

        setPosts((prevPosts) =>
          prevPosts.map((post) => {
            if (post.id === postId) {
              return {
                ...post,
                likes: post.likes.filter((like) => like !== currentUserId),
              }
            }

            return post
          }),
        )
      })
  }

  const handleLikeClick = (post: Post) => () => {
    if (post.likes.includes(currentUserId)) {
      handlePostUnlike(post.id)
      return
    }

    handlePostLike(post.id)
  }

  return {
    posts,
    handlePostCreation,
    removePost,
    handleLikeClick,
  }
}
