import { backArrow } from '@/static/images'
import { Link, useParams } from 'react-router-dom'
import { useDetailPost } from '../../data/useDetailPost'
import { usePostComments } from '../../data/usePostComments'
import { Post } from '../HomePage/Post'
import { Comment } from './Comment'
import { APP_ROUTES } from '@/config/router/routes.ts'
import { userStore } from '@/store/authStore.ts'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { Card, CardContent, CardFooter } from '@/lib/shadcn-components/ui/card.tsx'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useTranslation } from '@/locales/i18n.ts'
import { FormTextArea } from '@/components/form/FormTextArea.tsx'

const schema = yup.object().shape({
  content: yup.string().required('required-field'),
})

export const PostDetailPage = () => {
  const { id } = useParams()
  const { t } = useTranslation(['common', 'forms'])
  const { session } = userStore.useStore()
  const post = useDetailPost(id || '')
  const { comments, handleCommentCreation, removeComment } = usePostComments(id || '')
  const { handleSubmit, register, formState } = useForm<{ content: string }>({
    resolver: yupResolver(schema),
  })

  const handleSubmitForm = handleSubmit((data) => {
    handleCommentCreation(data.content)
  })

  if (!post) {
    return <div className={'text-white'}>Loading...</div>
  }

  return (
    <div className="w-full flex flex-col gap-1.5">
      <div className="w-full flex items-center pb-2.5">
        <Link to={APP_ROUTES.home} className="cursor-pointer">
          <img src={backArrow} className="w-4 h-4" alt="back arrow" />
        </Link>
        <span className="text-white font-bold ml-auto mr-auto">{t('post')}</span>
      </div>

      <Post data={post} />

      <div className="flex flex-col w-full gap-2.5">
        {comments?.map((comment) => (
          <Comment
            key={comment.id}
            data={comment}
            onRemove={comment.author === session?.user.id ? removeComment(comment.id) : undefined}
          />
        ))}
      </div>

      <Card>
        <form onSubmit={handleSubmitForm}>
          <CardContent className={'text-white pt-6'}>
            <FormTextArea
              placeholder={t('reply-to-thread')}
              className={'bg-black min-h-12 text-md p-0 border-none ring-offset-black'}
              {...register('content')}
              error={formState.errors.content?.message}
            />
          </CardContent>
          <CardFooter>
            <Button className={'w-full'} type={'submit'}>
              {t('send')}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
