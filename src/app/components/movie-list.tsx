'use client'

import useMovies from '../hooks/use-movies'
import MovieCard from './movie-card'
import Pagination from './pagination'
import Search from './search'
import { useSearchParams, useRouter } from 'next/navigation'

const MovieList = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const selectedQuery = searchParams.get('query') || ''
  const selectedPage = Number(searchParams.get('page') || 1)

  const { data: moviesResults, isLoading } = useMovies(
    selectedPage,
    selectedQuery
  )

  if (isLoading) return 'Betöltés...'

  const onPageChange = (direction: number) => {
    if (selectedPage + direction > 0) {
      console.log('calculate', { selectedPage, direction })
      router.push(
        `?${new URLSearchParams({
          page: String(selectedPage + direction),
          query: selectedQuery,
        })}`
      )
    }
  }

  const onSearchQueryChange = (query: string) => {
    router.push(
      `?${new URLSearchParams({
        page: String(selectedPage),
        query: query,
      })}`
    )
  }

  return (
    <div className="w-full">
      <Search onRefetch={onSearchQueryChange} />
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
          index={selectedPage}
          onPageChange={onPageChange}
          totalCount={moviesResults?.total_results ?? 0}
          pages={moviesResults?.total_pages ?? 0}
        />
      </div>
    </div>
  )
}

export default MovieList
