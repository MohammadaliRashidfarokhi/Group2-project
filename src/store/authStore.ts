import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type AuthStoreType = {
  isLogged: boolean
}

const initState: AuthStoreType = {
  isLogged: false,
}

const useStore = create(
  persist<AuthStoreType>(() => initState, {
    name: 'authStore',
    storage: createJSONStorage(() => localStorage),
  }),
)

export const userStore = {
  setLogged: (isLogged: boolean): void => {
    useStore.setState(() => ({ isLogged }))
  },
  clearStore: (): void => {
    useStore.setState(initState)
  },
  useStore,
}
