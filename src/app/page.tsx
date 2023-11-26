'use client'

import { useRouter } from 'next/navigation'
import Search from './(website)/components/search'
import Section from './_common/components/ui/section'

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
      <Section>
        <Search onRefetch={onSearchQueryChange} />
      </Section>
    </main>
  )
}
