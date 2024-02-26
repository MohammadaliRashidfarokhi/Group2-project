import { Input } from '@/lib/shadcn-components/ui/input'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import React from 'react'
import { User } from '@/model/user'
import { profilePlaceholder } from '@/static/images.ts'

export const SearchPage = () => {
  const users: User[] = [
    {
      BACKGROUND_COLOR: 'blue',
      FIRST_NAME: 'Felix',
      LAST_NAME: 'Brunnegård',
      USERNAME: 'felixbrunnegard',
      EMAIL: 'felix.brunnegard@gmail.com',
      id: '1',
    },
    {
      BACKGROUND_COLOR: 'blue',
      FIRST_NAME: 'Felix',
      LAST_NAME: 'Brunnegård',
      USERNAME: 'felixbrunnegard',
      EMAIL: 'felix.brunnegard@gmail.com',
      id: '2',
    },
    {
      BACKGROUND_COLOR: 'blue',
      FIRST_NAME: 'Felix',
      LAST_NAME: 'Brunnegård',
      USERNAME: 'felixbrunnegard',
      EMAIL: 'felix.brunnegard@gmail.com',
      id: '3',
    },
  ]

  const UserCard: React.FC<{ user: User; className?: string }> = ({ user, className }) => {
    return (
      <div className="flex gap-4 my-2">
        <img className="w-10 h-10 rounded-full bg-black" src={profilePlaceholder} alt="user profile picture" />
        <div>
          <p>
            {user.FIRST_NAME} {user.LAST_NAME}
          </p>
          <p className="text-gray-500">@{user.USERNAME}</p>
        </div>
      </div>
    )
  }
  return (
    <div className="container mx-auto text-white">
      <div className="flex gap-4 mb-4">
        <MagnifyingGlassIcon className="w-10 h-10" />
        <Input />
      </div>
      {users.map((user) => {
        return <UserCard user={user} />
      })}
    </div>
  )
}
