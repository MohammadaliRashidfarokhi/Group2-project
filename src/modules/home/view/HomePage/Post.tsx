import { Card, CardContent } from '@/lib/shadcn-components/ui/card.tsx'
import { commentIcon, dotsIcon, heartIcon, profilePlaceholder } from '@/static/images.ts'
import { PostDetail } from '@/model/post.ts'
import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from '@/lib/shadcn-components/ui/alert-dialog.tsx'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { Link } from 'react-router-dom'
import { APP_ROUTES } from '@/config/router/routes.ts'

type Props = {
  data: PostDetail
  onRemove?: () => void
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
    onRemove?.()
    setShowConfirmation(false)
  }

  const cancelRemove = () => {
    // Cancel the removal and close the confirmation dialog
    setShowConfirmation(false)
  }

  return (
    <Card>
      <CardContent className={'text-white relative px-7 py-5 flex flex-col gap-2'}>
        {onRemove && (
          <AlertDialog open={showConfirmation}>
            <AlertDialogTrigger>
              <img
                src={dotsIcon}
                className={'top-6 right-6 absolute cursor-pointer p-2'}
                alt="More"
                onClick={handleRemove}
              />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>Do You Want to remove this post?</AlertDialogHeader>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your post.
              </AlertDialogDescription>
              <AlertDialogFooter>
                <Button onClick={cancelRemove} variant={'default'}>
                  Cancel
                </Button>
                <Button onClick={confirmRemove} variant={'secondary'}>
                  Remove
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}

        <div className={'flex flex-row gap-2'}>
          <img src={profilePlaceholder} className={'w-10'} alt="user" />
          <div className={'flex flex-col'}>
            <div className={'font-bold'}>{`${data.FIRST_NAME} ${data.LAST_NAME}`}</div>
            <div className={'text-gray-500'}>@{data.USERNAME}</div>
          </div>
        </div>

        <span>{data.CONTENT}</span>

        <div className={'flex flex-row gap-3.5 mt-2'}>
          <span className={'flex flex-row gap-1 cursor-pointer'}>
            <img className={'text-gray-500 hover:text-white'} src={heartIcon} alt="Likes" />
            <span>{data.likes}</span>
          </span>

          <Link to={APP_ROUTES.comments(data.id)}>
            <span className={'flex flex-row gap-1 cursor-pointer'}>
              <img src={commentIcon} alt="Comments" />
              <span>{data.comments}</span>
            </span>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
