'use client'

import { useTranslation } from '@/app/i18n/client'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t } = useTranslation()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>{t('error_page_title')}</h2>
      <button onClick={() => reset()}>{t('try_again')}</button>
    </div>
  )
}
