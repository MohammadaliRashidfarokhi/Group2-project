import { supabase } from "@/config/supabase/supabaseClient"
import { useEffect, useState } from "react"
import { PostDetail } from '@/model/post.ts'

export const useDetailPost = (postId: string): PostDetail | undefined => {
    const [post, setPost] = useState<PostDetail>()

    useEffect(() => {
        async function fetchPost(id: string) {
            const data = await supabase.
                from('home_page_posts')
                .select('*')
                .eq('id', id)

            return data
        }

        fetchPost(postId).then((data) => {
            // add some checks for undefined somewhere
            const postDetail: PostDetail = {
                id: data?.data?.at(0)?.id || '',
                CONTENT: data?.data?.at(0)?.CONTENT || '',
                PUBLISHED_AT: data?.data?.at(0)?.PUBLISHED_AT || '',
                USERNAME: data?.data?.at(0)?.USERNAME || '',
                FIRST_NAME: data?.data?.at(0)?.FIRST_NAME || '',
                LAST_NAME: data?.data?.at(0)?.LAST_NAME || '',
                likes: data?.data?.at(0)?.likes || 0,
                comments: data?.data?.at(0)?.comments || 0
            }

            setPost(postDetail || undefined)
        })
    })

    return post
}