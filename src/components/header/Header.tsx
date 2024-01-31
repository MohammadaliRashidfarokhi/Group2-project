import { supabase } from '@/config/supabase/supabaseClient.ts'

export const Header = () => {
  const handleLogout = () => {
    supabase.auth.signOut()
  }
  return (
    <div className={'min-h-16 bg-amber-300'}>
      <span>Header</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
