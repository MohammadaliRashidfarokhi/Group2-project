import { supabase } from '@/config/supabase/supabaseClient.ts'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '@/config/router/routes.ts'
import { useRegisterForm } from './utils/useRegisterForm'
import { socialLogo } from '@/static/images.ts'
import { Tables } from '@/model/dbTypes.ts'
import { useToast } from '@/lib/shadcn-components/ui/use-toast.ts'
import { mapSupabaseAuthError } from '@/utils/supabaseErrorMappers.ts'
import { useTranslation } from '@/locales/i18n.ts'
import { FormInput } from '@/modules/common/components/form/FormInput.tsx'

export const RegisterPage = () => {
  const { t } = useTranslation(['forms', 'toasts'])
  const navigate = useNavigate()
  const { toast } = useToast()
  const { register, handleSubmit, errors } = useRegisterForm()

  const handleFormSubmit = handleSubmit((values) => {
    supabase.auth
      .signUp({
        email: values.EMAIL,
        password: values.PASSWORD,
      })
      .then((res) => {
        console.log(res)
        if (!res.data.user?.id) return

        const user: Tables<'USER'> = {
          id: String(res.data.user.id),
          USERNAME: String(values.USERNAME),
          EMAIL: String(res.data.user.email),
          FIRST_NAME: String(values.FIRST_NAME),
          LAST_NAME: String(values.LAST_NAME),
          BACKGROUND_COLOR: 'white',
        }

        return supabase.from('USER').insert(user)
      })
      .then((res) => {
        if (res?.error) {
          const error = mapSupabaseAuthError(res.error.message)

          toast({
            title: t('error'),
            description: t(error),
            duration: 5000,
            variant: 'destructive',
          })
        } else {
          navigate(APP_ROUTES.accountConfirmation)
        }
      })
  })

  return (
    <form onSubmit={handleFormSubmit} className={'flex flex-col gap-7 self-center w-full'}>
      <img alt={'social logo'} src={socialLogo} className={'w-1/2 self-center'} />
      <div className={'flex flex-col gap-3.5'}>
        <FormInput
          label={t('email')}
          placeholder={t('enter-email-placeholder')}
          {...register('EMAIL')}
          error={errors.EMAIL?.message}
        />
        <FormInput
          label={t('username')}
          placeholder={t('enter-username-placeholder')}
          {...register('USERNAME')}
          error={errors.USERNAME?.message}
        />
        <FormInput
          label={t('name')}
          placeholder={t('enter-name-placeholder')}
          {...register('FIRST_NAME')}
          error={errors.FIRST_NAME?.message}
        />
        <FormInput
          label={t('surname')}
          placeholder={t('enter-surname-placeholder')}
          {...register('LAST_NAME')}
          error={errors.LAST_NAME?.message}
        />
        <FormInput
          label={t('password')}
          placeholder="******"
          type="password"
          {...register('PASSWORD')}
          error={errors.PASSWORD?.message}
        />
      </div>

      <div className={'flex w-full gap-3.5 md:flex-row-reverse flex-col-reverse'}>
        <Button className={'md:flex-1'} type="submit">
          {t('sign-up')}
        </Button>
        <Link to={APP_ROUTES.login} className={'md:w-[75%]'}>
          <Button className={'w-full'} variant={'secondary'}>
            {t('already-have-account')}
          </Button>
        </Link>
      </div>
    </form>
  )
}
