import MovieCard from './components/movie-card'
import Section from './components/section'

const content = {
  title: 'Movie application',
}

const movieData = {
  title: 'Title',
  overview: 'Overview',
  posterPath: '/bUCnDHbDA0nzwxtpsDMBKmpmDah.jpg',
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Section title={content.title}>
        <MovieCard {...movieData} />
      </Section>
    </main>
  )
}
