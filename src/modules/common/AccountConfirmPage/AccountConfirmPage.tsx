import { socialLogo } from '@/static/images.ts'
import { useTranslation } from '@/locales/i18n.ts'

export const AccountConfirmPage = () => {
  const { t } = useTranslation()
  return (
    <div className={'flex flex-col gap-10 self-center w-full text-white'}>
      <img alt={'social logo'} src={socialLogo} className={'w-1/2 self-center'} />
      <div className={'flex flex-col gap-3.5'}>
        <span className={'text-center text-xl font-bold'}>{t('registration-success')}</span>
        <p className={'text-center'}>{t('registration-success-message')}</p>
      </div>
    </div>
  )
}
