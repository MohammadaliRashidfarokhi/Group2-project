import { supabase } from '@/config/supabase/supabaseClient.ts'
import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '@/config/router/routes.ts'
import { useLoginForm } from '@/modules/auth/view/LoginPage/utils/useLoginForm.ts'
import { socialLogo } from '@/static/images.ts'
import { mapSupabaseAuthError } from '@/utils/supabaseErrorMappers.ts'
import { useToast } from '@/lib/shadcn-components/ui/use-toast.ts'
import { useTranslation } from '@/locales/i18n.ts'
import { FormInput } from '@/modules/common/components/form/FormInput.tsx'

export const LoginPage = () => {
  const { t } = useTranslation(['forms', 'toasts'])
  const { toast } = useToast()
  const navigate = useNavigate()
  const { handleSubmit, register, errors } = useLoginForm()

  const handleFormSubmit = handleSubmit((values) => {
    supabase.auth
      .signInWithPassword({
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        if (res.error) {
          const error = mapSupabaseAuthError(res.error.message)

          toast({
            title: t('error'),
            description: t(error),
            duration: 5000,
            variant: 'destructive',
          })
        } else {
          navigate(APP_ROUTES.home)
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
          {...register('email')}
          error={errors.email?.message}
        />
        <FormInput
          label={t('password')}
          placeholder="******"
          type="password"
          {...register('password')}
          error={errors.password?.message}
        />
      </div>

      <div className={'flex w-full gap-3.5 md:flex-row-reverse flex-col-reverse'}>
        <Button className={'md:flex-1'} type="submit">
          {t('login')}
        </Button>
        <Link to={APP_ROUTES.register} className={'md:w-[75%]'}>
          <Button className={'w-full'} variant={'secondary'}>
            {t('dont-have-account')}
          </Button>
        </Link>
      </div>
    </form>
  )
}
