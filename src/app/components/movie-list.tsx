'use client'

import { useState } from 'react'
import useMovies from '../hooks/use-movies'
import MovieCard from './movie-card'
import Pagination from './pagination'

const movieData = {
  title: 'Title',
  overview: 'Overview',
  posterPath: '/bUCnDHbDA0nzwxtpsDMBKmpmDah.jpg',
}

const MovieList = () => {
  const [index, setIndex] = useState(1)

  const { data: moviesResults, isLoading } = useMovies(index, 'kaland')

  if (isLoading) return 'Betöltés...'

  const onPageChange = (direction: number) => {
    if (index + direction > 0) setIndex((i) => i + direction)
  }
  return (
    <div className="">
      <Pagination
        index={index}
        onPageChange={onPageChange}
        totalCount={moviesResults?.total_results ?? 0}
        pages={moviesResults?.total_pages ?? 0}
      />
      <div className="w-full flex flex-row flex-wrap">
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
      </div>
      <Pagination
        index={index}
        onPageChange={onPageChange}
        totalCount={moviesResults?.total_results ?? 0}
        pages={moviesResults?.total_pages ?? 0}
      />
    </div>
  )
}

export default MovieList
