import { profilePlaceholder } from '@/static/images.ts'
import { User } from '@/model/user.ts'
import { Link } from 'react-router-dom'
import { APP_ROUTES } from '@/config/router/routes.ts'

type Props = {
  user: User
}
export const UserCard = (props: Props) => {
  const { user } = props

  return (
    <Link to={APP_ROUTES.user(user.id)}>
      <div className="flex gap-4 px-3.5 rounded-md py-3 hover:bg-slate-900 cursor-pointer">
        <img className="w-10 h-10 rounded-full bg-black" src={profilePlaceholder} alt="user profile picture" />
        <div>
          <p>
            {user.FIRST_NAME} {user.LAST_NAME}
          </p>
          <p className="text-gray-500">@{user.USERNAME}</p>
        </div>
      </div>
    </Link>
  )
}
