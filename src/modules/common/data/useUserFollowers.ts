import { supabase } from '@/config/supabase/supabaseClient'
import { useToast } from '@/lib/shadcn-components/ui/use-toast'
import { useTranslation } from '@/locales/i18n'
import { useEffect, useState } from 'react'
import { FollowersMap } from '@/model/follower.ts'

export const useUserFollowers = (userId: string, currentUserId: string) => {
  const { toast } = useToast()
  const { t } = useTranslation('toasts')

  const [followersMap, setFollowersMap] = useState<FollowersMap>()

  useEffect(() => {
    async function fetchFollowing() {
      return supabase.from('FOLLOWER').select('*').or(`follower.eq.${userId},FOLLOWING.eq.${userId}`)
    }

    fetchFollowing().then((response) => {
      const { data, error } = response

      if (error) {
        toast({
          variant: 'destructive',
          title: t('error'),
          description: t('followers-fetch-error'),
        })
        return
      }

      setFollowersMap({
        followers: data.filter((elem) => elem.FOLLOWING === userId),
        following: data.filter((elem) => elem.follower === userId),
      })
    })
  }, [userId, t])

  const startFollow = (followingId: string) => {
    supabase
      .from('FOLLOWER')
      .insert({ follower: currentUserId, FOLLOWING: followingId })
      .then(
        (response) => {
          if (response.error) {
            toast({
              variant: 'destructive',
              title: t('error'),
              description: t('unable-to-follow'),
            })
            return
          }

          setFollowersMap({
            followers: [...(followersMap?.followers || []), { follower: currentUserId, FOLLOWING: followingId }],
            following: followersMap?.following || [],
          })
        },
        () => {
          toast({
            variant: 'destructive',
            title: t('error'),
            description: t('unable-to-follow'),
          })
        },
      )
  }

  const unFollow = (unfollowingId: string) => {
    supabase
      .from('FOLLOWER')
      .delete()
      .eq('follower', currentUserId)
      .eq('FOLLOWING', unfollowingId)
      .then(
        (response) => {
          if (response.error) {
            toast({
              variant: 'destructive',
              title: t('error'),
              description: t('unable-to-unfollow'),
            })
            return
          }

          setFollowersMap({
            followers: followersMap?.followers.filter((elem) => elem.follower !== currentUserId) || [],
            following: followersMap?.following || [],
          })
        },
        () => {
          toast({
            variant: 'destructive',
            title: t('error'),
            description: t('unable-to-unfollow'),
          })
        },
      )
  }

  const handleFollowButtonClick = () => {
    if (!followersMap?.followers.find((elem) => elem.follower === currentUserId)) {
      startFollow(userId)
      return
    }

    unFollow(userId)
  }

  return { followersMap, handleFollowButtonClick }
}
