'use client'

import { useRouter } from 'next/navigation'
import Search from './(website)/components/search'
import Section from './_common/components/section'
import HeroSection from './(website)/components/hero'

export default function Home() {
  const router = useRouter()

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
      <HeroSection title="Movie application">
        <Search onRefetch={onSearchQueryChange} />
      </HeroSection>
    </main>
  )
}
