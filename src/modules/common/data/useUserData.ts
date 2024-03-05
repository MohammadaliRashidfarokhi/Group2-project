import { useEffect, useState } from 'react'
import { User } from '@/model/user.ts'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { useToast } from '@/lib/shadcn-components/ui/use-toast.ts'
import { useTranslation } from '@/locales/i18n.ts'
import { EditUserFormProps } from '@/modules/profile/view/ProfilePage/util/useEditUserForm.ts'

export const useUserData = (id: string) => {
  const { t } = useTranslation('toasts')
  const [user, setUser] = useState<User>()
  const { toast } = useToast()

  useEffect(() => {
    async function fetchUser() {
      return supabase.from('USER').select('*').eq('id', id)
    }

    fetchUser().then((response) => {
      const { data, error } = response

      if (error) {
        toast({
          variant: 'destructive',
          title: t('error'),
          description: t('user-fetch-error'),
        })
        return
      }

      setUser(data?.[0])
    })
  }, [id])

  const handleUpdateUser = async (formData: EditUserFormProps) => {
    supabase
      .from('USER')
      .update(formData)
      .eq('id', id)
      .select('*')
      .then((response) => {
        const { data, error } = response

        if (error) {
          toast({
            variant: 'destructive',
            title: t('error'),
            description: t('user-update-error'),
          })
          return
        }

        if (data) {
          setUser(data[0])
        }
      })
  }

  return {
    user,
    handleUpdateUser,
  }
}
