import { socialLogo } from '@/static/images.ts'

export const AccountConfirmPage = () => {
  return (
    <div className={'flex flex-col gap-10 self-center w-full text-white'}>
      <img alt={'social logo'} src={socialLogo} className={'w-1/2 self-center'} />
      <div className={'flex flex-col gap-3.5'}>
        <span className={'text-center text-xl font-bold'}>Registration successful</span>
        <p className={'text-center'}>
          We have sent you an email to verify your account. Please check your inbox and click on the link to verify your
          account.
        </p>
      </div>
    </div>
  )
}
