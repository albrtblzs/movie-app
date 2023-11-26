import MovieList from '@/app/(website)/components/movie-list'
import Section from '@/app/_common/components/section'

const MoviesPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Section>
        <MovieList />
      </Section>
    </main>
  )
}

export default MoviesPage
