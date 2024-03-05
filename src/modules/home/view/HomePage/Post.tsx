import { Card, CardContent } from '@/lib/shadcn-components/ui/card.tsx'
import { commentIcon, heartIcon, profilePlaceholder } from '@/static/images.ts'
import { PostDetail } from '@/model/post.ts'
import { TrashIcon } from '@radix-ui/react-icons'
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
import { useTranslation } from '@/locales/i18n.ts'

type Props = {
  data: PostDetail
  onRemove?: () => void
  onLikeClick?: () => void
}

export const Post = (props: Props) => {
  const { data, onRemove, onLikeClick } = props
  const [showConfirmation, setShowConfirmation] = useState(false)
  const { t } = useTranslation();

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
      <CardContent className={'text-white relative px-6 py-4 flex flex-col gap-2'}>
        {onRemove && (
          <AlertDialog open={showConfirmation}>
            <AlertDialogTrigger>
              <TrashIcon className={'top-7 right-5 absolute w-5 h-5'} onClick={handleRemove}/>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>{t('delete-post')}</AlertDialogHeader>
              <AlertDialogDescription>
                {t('delete-post-description')}
              </AlertDialogDescription>
              <AlertDialogFooter>
                <Button onClick={cancelRemove} variant={'secondary'}>
                  {t('cancel')}
                </Button>
                <Button onClick={confirmRemove} variant={'destructive'}>
                  {t('delete')}
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}

        <div className={'flex flex-row gap-2'}>
          <img src={profilePlaceholder} className={'w-10'} alt="user" />
          <div className={'flex flex-col'}>
            <div className={'font-bold'}>{`${data.FIRST_NAME} ${data.LAST_NAME}`}</div>
            <div className={'text-muted-foreground'}>@{data.USERNAME}</div>
          </div>
        </div>

        <span>{data.CONTENT}</span>

        <div className={'flex flex-row gap-3.5 mt-2'}>
          <span className={'flex flex-row gap-1 cursor-pointer'} onClick={onLikeClick}>
            <img className={'text-gray-500 hover:text-white'} src={heartIcon} alt="Likes" />
            <span>{data.likes.length}</span>
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
