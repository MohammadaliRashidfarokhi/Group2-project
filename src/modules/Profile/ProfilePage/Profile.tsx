import './profile.scss'
import { Stories } from '@/components/stories/Stories'
import { Posts } from '@/components/posts/Posts'


export const Profile = () => {


  return (
    <div className="Profile">
      <Stories />
      <Posts />
    </div>
  )
}
