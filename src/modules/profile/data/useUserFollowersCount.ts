import { supabase } from "@/config/supabase/supabaseClient"
import { useToast } from "@/lib/shadcn-components/ui/use-toast"
import { useTranslation } from "@/locales/i18n"
import { FollowersCount } from "@/model/followersCount"
import { useEffect, useState } from "react"

export const useUserFollowerCount = (userId: string) => {
    const { t } = useTranslation('toasts')
    const {toast} = useToast()

    const [userFollowersCount, setUserFollowersCount] = useState<FollowersCount>({
        id: userId,
        tot_followers: 0,
        tot_following: 0
    })

    useEffect(() => {
        function fetchCounter() {
            return supabase.from("followers_count").select('*').eq('id', userId)
        }

        fetchCounter().then((response) => {
            if (response.error) {
                toast({
                    variant: "destructive",
                    title: t('error'),
                    description: t('counts-fetch-error')
                })
            } else {
                setUserFollowersCount({
                    id: userId,
                    tot_followers: response?.data?.at(0)?.tot_followers || 0,
                    tot_following: response?.data?.at(0)?.tot_following || 0
                })
            }
        })
    }, [userId])

    const increaseFollowers = () => {
        setUserFollowersCount({
            id: userId,
            tot_followers: userFollowersCount.tot_followers + 1,
            tot_following: userFollowersCount.tot_following
        })
    }

    const decreaseFollowers = () => {
        setUserFollowersCount({
            id: userId,
            tot_followers: userFollowersCount.tot_followers - 1,
            tot_following: userFollowersCount.tot_following
        })
    }

    return {userFollowersCount, increaseFollowers, decreaseFollowers}
}