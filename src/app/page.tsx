'use client'

import { useRouter } from 'next/navigation'
import Search from './(website)/components/search'
import HeroSection from './(website)/components/hero'
import { useTranslation } from '@/app/i18n/client'

export default function Home() {
  const router = useRouter()
  const { t } = useTranslation()

  const onSearchQueryChange = (query: string) => {
    router.push(
      `movies?${new URLSearchParams({
        page: String(1),
        query: query,
      })}`
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection title={t('home_title')}>
        <Search onRefetch={onSearchQueryChange} />
      </HeroSection>
    </main>
  )
}
