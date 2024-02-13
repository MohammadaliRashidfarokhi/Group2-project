import { Card, CardContent } from '@/lib/shadcn-components/ui/card.tsx'
import { commentIcon, dotsIcon, heartIcon, profilePlaceholder } from '@/static/images.ts'
import { Link } from 'react-router-dom'

type Props = {
  data: {
    id: number
    name: string
    username: string
    text: string
    likes: number
    comments: number
  }
}

export const Post = (props: Props) => {
  const { data } = props

  return (
    <Card>
      <CardContent className={'text-white relative px-7 py-5 flex flex-col gap-2'}>
        <img src={dotsIcon} className={'top-6 right-6 absolute cursor-pointer'} alt="More" />

        <div className={'flex flex-row gap-2'}>
          <img src={profilePlaceholder} className={'w-10'} alt="user" />
          <Link to={`/follow`} className="flex flex-col gap-1" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className={'flex flex-col'}>
              <div className={'font-bold'}>{data.name}</div>
              <div className={'text-gray-500'}>{data.username}</div>
            </div>
          </Link>
        </div>

        <span>{data.text}</span>

        <div className={'flex flex-row gap-2 mt-2'}>
          <span className={'flex flex-row gap-1'}>
            <img className={'cursor-pointer'} src={heartIcon} alt="Likes" />
            <span>{data.likes}</span>
          </span>
          <span className={'flex flex-row gap-1'}>
            <img className={'cursor-pointer'} src={commentIcon} alt="Comments" />
            <span>{data.comments}</span>
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
