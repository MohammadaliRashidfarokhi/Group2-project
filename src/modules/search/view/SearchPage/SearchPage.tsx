import { Input } from '@/lib/shadcn-components/ui/input'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { UserCard } from '@/modules/search/view/SearchPage/UserCard.tsx'
import { useFilteredUsers } from '@/modules/search/data/useFilteredUsers.ts'
import { useState } from 'react'

export const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const users = useFilteredUsers(searchValue)

  return (
    <div className="container mx-auto text-white flex flex-col gap-8">
      <div className="flex gap-3">
        <MagnifyingGlassIcon className="w-10 h-10" />
        <Input placeholder={'Enter username...'} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      </div>
      <div className={'flex flex-col gap-4'}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}
