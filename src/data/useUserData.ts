import { useEffect, useState } from 'react'
import { User } from '@/model/user.ts'
import { supabase } from '@/config/supabase/supabaseClient.ts'

export const useUserData = (id: string) => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    async function fetchUser() {
      const { data } = await supabase.from('USER').select('*').eq('id', id)

      return data
    }

    fetchUser().then((data) => {
      setUser(data?.[0])
    })
  }, [id])

  return {
    user,
  }
}
