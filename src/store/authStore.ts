import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { Session } from '@supabase/supabase-js'

type AuthStoreType = {
  isLogged: boolean
  session: Session | null
}

const initState: AuthStoreType = {
  isLogged: false,
  session: null,
}

const useStore = create(
  persist<AuthStoreType>(() => initState, {
    name: 'authStore',
    storage: createJSONStorage(() => localStorage),
  }),
)

export const userStore = {
  setLogged: (isLogged: boolean, session: Session): void => {
    useStore.setState(() => ({ isLogged, session }))
  },
  clearStore: (): void => {
    useStore.setState(initState)
  },
  useStore,
}
