import { supabase } from '@/config/supabase/supabaseClient'
import { useToast } from '@/lib/shadcn-components/ui/use-toast'
import { useTranslation } from '@/locales/i18n'
import { useEffect, useState } from 'react'
import { userStore } from '@/store/authStore.ts'

export const useFollowingUsers = () => {
  const { toast } = useToast()
  const { t } = useTranslation('toasts')

  const { session } = userStore.useStore()
  const userId = String(session?.user?.id)

  const [following, setFollowing] = useState<string[]>([])

  useEffect(() => {
    async function fetchFollowing() {
      return supabase.from('FOLLOWER').select('FOLLOWING').eq('follower', userId)
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

      const following = data?.map((res) => res.FOLLOWING) || []

      setFollowing(following)
    })
  }, [userId, t])

  const startFollow = (followingId: string) => {
    supabase
      .from('FOLLOWER')
      .insert({ follower: userId, FOLLOWING: followingId })
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

          setFollowing([...following, followingId])
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
      .eq('follower', userId)
      .eq('FOLLOWING', unfollowingId)
      .then(
        () => {
          setFollowing(following.filter((elem) => elem !== unfollowingId))
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

  return { following, startFollow, unFollow }
}
