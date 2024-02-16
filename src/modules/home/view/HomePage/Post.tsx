import { Card, CardContent } from '@/lib/shadcn-components/ui/card.tsx'
import { commentIcon, dotsIcon, heartIcon, profilePlaceholder } from '@/static/images.ts'
import { PostDetail } from '@/model/post.ts'

type Props = {
  data: PostDetail
}

export const Post = (props: Props) => {
  const { data } = props

  return (
    <Card>
      <CardContent className={'text-white relative px-7 py-5 flex flex-col gap-2'}>
        <img src={dotsIcon} className={'top-6 right-6 absolute cursor-pointer'} alt="More" />

        <div className={'flex flex-row gap-2'}>
          <img src={profilePlaceholder} className={'w-10'} alt="user" />
          <div className={'flex flex-col'}>
            <div className={'font-bold'}>{`${data.FIRST_NAME} ${data.LAST_NAME}`}</div>
            <div className={'text-gray-500'}>@{data.USERNAME}</div>
          </div>
        </div>

        <span>{data.CONTENT}</span>

        <div className={'flex flex-row gap-2 mt-2'}>
          <span className={'flex flex-row gap-1'}>
            <img className={'cursor-pointer'} src={heartIcon} alt="Likes" />
            <span>{0}</span>
          </span>
          <span className={'flex flex-row gap-1'}>
            <img className={'cursor-pointer'} src={commentIcon} alt="Comments" />
            <span>{0}</span>
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
