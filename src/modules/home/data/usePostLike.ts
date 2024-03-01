import { supabase } from '@/config/supabase/supabaseClient.ts'
import { useEffect, useState } from 'react'
export const usePostLike = (userId: string, postId: string) => {
  const [liked, setLiked] = useState<boolean>(false)
  // Check if the entry already exists
  useEffect(() => {
    async function fetchLiked() {
      return supabase.from('POST_LIKES').select('*').eq('liker', userId).eq('liked', postId)
    }

    fetchLiked().then((response) => {
      const { data, error } = response

      if (error) {
        return
      }
      if (data && data.length > 0) {
        setLiked(true)
      } else {
        setLiked(false)
      }
    })
  }, [])

  const LikeCreation = async () => {
    // Entry doesn't exist, insert it
    await supabase.from('POST_LIKES').insert({ liker: userId, liked: postId })
  }

  const removeLike = async () => {
    // Entry already exists, remove it
    await supabase.from('POST_LIKES').delete().eq('liker', userId).eq('liked', postId)
  }

  return {
    liked,
    LikeCreation,
    removeLike,
  }
}
