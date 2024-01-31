import { forwardRef, Ref } from 'react'
import { Input, InputProps } from '@/lib/shadcn-components/ui/input.tsx'

type Props = InputProps & {
  error?: string
  label: string
}

export const FormInput = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
  const { error, label, ...rest } = props
  return (
    <div className={'flex w-full flex-col gap-1'}>
      <span className={'text-white text-sm'}>{label}</span>
      <Input ref={ref} {...rest} />
      {error && <span className={'text-white text-sm'}>{error}</span>}
    </div>
  )
})
