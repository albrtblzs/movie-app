'use client'

import useMovies from '../hooks/use-movies'
import MovieCard from './movie-card'

const movieData = {
  title: 'Title',
  overview: 'Overview',
  posterPath: '/bUCnDHbDA0nzwxtpsDMBKmpmDah.jpg',
}

const MovieList = () => {
  const { data: moviesResults, isLoading } = useMovies(1, 'kaland')

  if (isLoading) return 'Betöltés...'

  return (
    <section className="w-full flex flex-row flex-wrap">
      {moviesResults?.results &&
        moviesResults.results.map((movie) => (
          <div key={movie.id} className="w-[calc(25%-16px)] m-1">
            <MovieCard
              title={movie.title}
              overview={movie.overview}
              posterPath={movie.poster_path}
            />
          </div>
        ))}
    </section>
  )
}

export default MovieList
