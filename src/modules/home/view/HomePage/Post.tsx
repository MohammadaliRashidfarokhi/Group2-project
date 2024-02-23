import { Card, CardContent } from '@/lib/shadcn-components/ui/card.tsx'
import { commentIcon, dotsIcon, heartIcon, profilePlaceholder } from '@/static/images.ts'
import { PostDetail } from '@/model/post.ts'
import { useState } from 'react'

type Props = {
  data: PostDetail
  onRemove: () => void
}

export const Post = (props: Props) => {
  const { data, onRemove } = props
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleRemove = () => {
    // Show the confirmation dialog
    setShowConfirmation(true)
  }

  const confirmRemove = () => {
    // Remove post and close the confirmation dialog
    onRemove()
    setShowConfirmation(false)
  }

  const cancelRemove = () => {
    // Cancel the removal and close the confirmation dialog
    setShowConfirmation(false)
  }

  return (
    <Card>
      <CardContent className={'text-white relative px-7 py-5 flex flex-col gap-2'}>
        <img src={dotsIcon} className={'top-6 right-6 absolute cursor-pointer'} alt="More" onClick={handleRemove} />

        {showConfirmation && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-4 rounded-md shadow-md">
            <p className="mb-4 font-bold text-white">Are you absolutely sure?</p>
            <span className="font-normal text-white">
              This action cannot be undone. This will permanently delete your post.
            </span>
            <div className="flex justify-between pt-4">
              <button onClick={confirmRemove} className="bg-red-600 text-white px-4 py-2 rounded-md">
                Remove
              </button>
              <button onClick={cancelRemove} className="bg-gray-600 text-white px-4 py-2 rounded-md">
                Cancel
              </button>
            </div>
          </div>
        )}

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
