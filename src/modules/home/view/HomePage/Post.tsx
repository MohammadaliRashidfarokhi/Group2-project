import { Card, CardContent } from '@/lib/shadcn-components/ui/card.tsx'
import { commentIcon, profilePlaceholder } from '@/static/images.ts'
import { PostDetail } from '@/model/post.ts'
import { HeartFilledIcon, TrashIcon } from '@radix-ui/react-icons'
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
import { cx } from 'class-variance-authority'
import * as dayjs from 'dayjs'

type Props = {
  data: PostDetail
  onRemove?: () => void
  onLikeClick?: () => void
  isLikedByCurrentUser?: boolean
}

export const Post = (props: Props) => {
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
    <Card>
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

        <div className={'flex flex-row gap-2'}>
          <img src={profilePlaceholder} className={'w-10'} alt="user" />
          <div className={'flex flex-col'}>
            <div className={'font-bold'}>{`${data.FIRST_NAME} ${data.LAST_NAME}`}</div>
            <div className={'text-muted-foreground'}>@{data.USERNAME}</div>
          </div>
        </div>

        <span>{data.CONTENT}</span>

        <div className={'flex flex-row justify-between items-end'}>
          <div className={'flex flex-row gap-3.5 mt-2'}>
            <span className={'flex flex-row gap-1 cursor-pointer items-center'} onClick={onLikeClick}>
              <HeartFilledIcon
                className={cx('w-5 h-5 text-gray-400 hover:text-red-500', { 'text-red-500': isLikedByCurrentUser })}
              />
              <span>{data.likes.length}</span>
            </span>

            <Link to={APP_ROUTES.comments(data.id)}>
              <span className={'flex flex-row gap-1 cursor-pointer'}>
                <img src={commentIcon} alt="Comments" />
                <span>{data.comments}</span>
              </span>
            </Link>
          </div>
          <div className={'text-gray-400 text-sm'}>
            {dayjs(new Date(data.PUBLISHED_AT)).format('YYYY-MM-DD h:m').toString()}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
