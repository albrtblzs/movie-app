'use client'

import { useState } from 'react'
import useMovies from '../hooks/use-movies'
import MovieCard from './movie-card'
import Pagination from './pagination'
import Search from './search'

const movieData = {
  title: 'Title',
  overview: 'Overview',
  posterPath: '/bUCnDHbDA0nzwxtpsDMBKmpmDah.jpg',
}

const MovieList = () => {
  const [index, setIndex] = useState(1)
  const [query, setQuery] = useState('')

  const { data: moviesResults, isLoading } = useMovies(index, query)

  if (isLoading) return 'Betöltés...'

  const onPageChange = (direction: number) => {
    if (index + direction > 0) setIndex((i) => i + direction)
  }

  const onSearchQueryChange = (query: string) => {
    setQuery(query)
  }

  return (
    <div className="w-full">
      <div className="flex flex-row  justify-between items-center">
        <Pagination
          index={index}
          onPageChange={onPageChange}
          totalCount={moviesResults?.total_results ?? 0}
          pages={moviesResults?.total_pages ?? 0}
        />
        <Search onRefetch={onSearchQueryChange} />
      </div>
      <div className=" flex flex-row flex-wrap">
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
      <div className="flex flex-row  justify-between items-center">
        <Pagination
          index={index}
          onPageChange={onPageChange}
          totalCount={moviesResults?.total_results ?? 0}
          pages={moviesResults?.total_pages ?? 0}
        />
      </div>
    </div>
  )
}

export default MovieList
