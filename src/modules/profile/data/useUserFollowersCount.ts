import { supabase } from "@/config/supabase/supabaseClient"
import { FollowersCount } from "@/model/followersCount"
import { useEffect, useState } from "react"

export const useUserFollowerCount = (userId: string) => {
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
                setUserFollowersCount({id: userId, tot_followers: 0, tot_following: 0})
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