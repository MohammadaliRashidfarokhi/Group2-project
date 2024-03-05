import { CommentDetail } from '@/model/comment'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { Card, CardContent } from '@/lib/shadcn-components/ui/card.tsx'
import { profilePlaceholder } from '@/static/images.ts'
import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from '@/lib/shadcn-components/ui/alert-dialog.tsx'
import { useTranslation } from '@/locales/i18n.ts'
import { HeartFilledIcon, TrashIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'
import { APP_ROUTES } from '@/config/router/routes.ts'
import { cx } from 'class-variance-authority'
import * as dayjs from 'dayjs'

type Props = {
  isLikedByCurrentUser?: boolean
  data: CommentDetail
  onRemove?: () => void
  onLikeClick?: () => void
}

export const Comment = (props: Props) => {
  const { data, onRemove, onLikeClick, isLikedByCurrentUser = false } = props
  const [showConfirmation, setShowConfirmation] = useState(false)
  const { t } = useTranslation()

  const handleRemove = () => {
    setShowConfirmation(true)
  }

  const confirmRemove = () => {
    onRemove?.()
    setShowConfirmation(false)
  }

  const cancelRemove = () => {
    setShowConfirmation(false)
  }

  return (
    <Card className="flex-grow bg-transparent">
      <CardContent className={'text-white relative px-6 py-4 flex flex-col gap-2'}>
        {onRemove && (
          <AlertDialog open={showConfirmation}>
            <AlertDialogTrigger>
              <TrashIcon className={'top-7 right-5 absolute w-5 h-5'} onClick={handleRemove} />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>{t('delete-post')}</AlertDialogHeader>
              <AlertDialogDescription>{t('delete-post-description')}</AlertDialogDescription>
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

        <Link to={APP_ROUTES.user(data.author)}>
          <div className={'flex flex-row gap-2 w-fit'}>
            <img src={profilePlaceholder} className={'w-10'} alt="user" />
            <div className={'flex flex-col'}>
              <div className={'font-bold'}>{`${data.FIRST_NAME} ${data.LAST_NAME}`}</div>
              <div className={'text-muted-foreground'}>@{data.USERNAME}</div>
            </div>
          </div>
        </Link>

        <span>{data.CONTENT}</span>

        <div className={'flex flex-row justify-between items-end'}>
          <div className={'flex flex-row gap-3.5 mt-2'}>
            <span className={'flex flex-row gap-1 cursor-pointer items-center'} onClick={onLikeClick}>
              <HeartFilledIcon
                className={cx('w-5 h-5 text-gray-400 hover:text-red-500', { 'text-red-500': isLikedByCurrentUser })}
              />
              <span>{data.likes.length}</span>
            </span>
          </div>
          <div className={'text-gray-400 text-sm'}>{dayjs(data.PUBLISHED_AT).format('YYYY-MM-DD h:m')}</div>
        </div>
      </CardContent>
    </Card>
  )
}
