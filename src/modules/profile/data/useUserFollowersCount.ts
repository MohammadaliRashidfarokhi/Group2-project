import { supabase } from "@/config/supabase/supabaseClient"
import { FollowersCount } from "@/model/followersCount"
import { useEffect, useState } from "react"

export const useUserFollowerCount = (userId: string) => {
    const [userFollowerCount, setUserFollowerCount] = useState<FollowersCount>()

    useEffect(() => {
        function fetchCounter() {
            return supabase.from("followers_count").select('*').eq('id', userId)
        }

        fetchCounter().then((response) => {
            if (response.error) {
                setUserFollowerCount({id: userId, tot_followers: 0, tot_following: 0})
            } else {
                setUserFollowerCount({
                    id: userId,
                    tot_followers: response.data?.at(0)?.tot_followers || 0,
                    tot_following: response?.data?.at(0)?.tot_following || 0
                })
            }
        })
    }, [userId])

    return {userFollowerCount}
}