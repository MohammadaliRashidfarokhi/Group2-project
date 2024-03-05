import { forwardRef, Ref } from 'react'
import { Textarea, TextareaProps } from '@/lib/shadcn-components/ui/textarea.tsx'
import { useTranslation } from '@/locales/i18n.ts'
import { cx } from 'class-variance-authority'

type Props = TextareaProps & {
  error?: string
  label?: string
}

export const FormTextArea = forwardRef((props: Props, ref: Ref<HTMLTextAreaElement>) => {
  const { error, label, ...rest } = props
  const { t } = useTranslation('forms')

  return (
    <div className={'flex w-full flex-col gap-1'}>
      {label && <span className={'text-white text-sm'}>{label}</span>}
      <Textarea ref={ref} {...rest} className={cx(props.className, 'p-1')} />
      {error && <span className={'text-white text-sm'}>{t(error)}</span>}
    </div>
  )
})
