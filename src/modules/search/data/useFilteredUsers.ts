import { User } from '@/model/user.ts'
import { useEffect, useState } from 'react'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { useToast } from '@/lib/shadcn-components/ui/use-toast.ts'
import { useTranslation } from '@/locales/i18n.ts'

export const useFilteredUsers = (searchValue: string) => {
  const { t } = useTranslation('toasts')
  const [users, setUsers] = useState<User[]>([])
  const { toast } = useToast()

  useEffect(() => {
    async function fetchUsers() {
      return supabase.from('USER').select('*').ilike('USERNAME', `%${searchValue}%`)
    }

    fetchUsers().then((response) => {
      const { data, error } = response

      if (error) {
        toast({
          variant: 'destructive',
          title: t('error'),
          description: t('users-fetch-error'),
        })
        return
      }

      setUsers(data || [])
    })
  }, [searchValue, t, toast])

  return users
}
