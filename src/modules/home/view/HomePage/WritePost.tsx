import { Card, CardContent, CardHeader, CardFooter } from '@/lib/shadcn-components/ui/card.tsx'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { useTranslation } from '@/locales/i18n.ts'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'
import { FormTextArea } from '@/modules/common/components/form/FormTextArea.tsx'

const schema = yup.object().shape({
  content: yup.string().required('required-field'),
})

type Props = {
  onSubmit: (content: string) => Promise<void>
}

export const WritePost = (props: Props) => {
  const { t } = useTranslation(['common', 'forms'])
  const { handleSubmit, register, formState } = useForm<{ content: string }>({
    resolver: yupResolver(schema),
  })

  const handleSubmitForm = handleSubmit((data) => {
    props.onSubmit(data.content)
  })

  return (
    <Card className={'w-full'}>
      <form onSubmit={handleSubmitForm}>
        <CardHeader className={'py-3'}>
          <h3 className={'text-white text-2xl font-bold'}>{t('write-post')}</h3>
        </CardHeader>
        <CardContent className={'text-white pb-2.5'}>
          <FormTextArea
            className={'bg-black min-h-12 text-md border-none ring-offset-black'}
            placeholder={t('write-post-placeholder')}
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
  )
}
