'use client'

import { useEffect, useMemo, useState } from 'react'
import useMovies from '../hooks/use-movies'
import MovieCard from './movie-card'
import Pagination from './pagination'
import Search from './search'
import { useSearchParams, useRouter } from 'next/navigation'
import Movie from '@/app/_common/types/movie'
import MovieDialog from './movie-dialog'
import toaster from '@/app/_common/components/toaster'
import errorMessageConverter from '@/app/_common/utils/error-message-converter'
import Error from '../(routes)/movies/error'
import { useTranslation } from '@/app/i18n/client'

const MovieList = () => {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  const selectedQuery = searchParams.get('query') || ''
  const selectedPage = Number(searchParams.get('page') || 1)

  const {
    data: moviesResults,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useMovies(selectedPage, selectedQuery)

  if (isSuccess) {
    toaster({
      message: t('cach_notification', {
        place: moviesResults?.isCached ? 'cache' : 'API',
      }),
      type: 'info',
    })
  }

  if (isError) {
    toaster({
      message: errorMessageConverter(error.message),
      type: 'error',
    })
    const handleReset = () => {
      refetch()
    }
    return <Error error={error} reset={handleReset} />
  }

  if (isLoading) return t('loading')

  const onPageChange = (direction: number) => {
    if (selectedPage + direction > 0) {
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

  const onDialogChange = (open: boolean) => {
    if (!open) setSelectedMovie(null)
  }

  return (
    <div className="lg:w-[1000px]">
      <MovieDialog
        selectedMovie={selectedMovie}
        onDialogChange={onDialogChange}
      />
      <Search onRefetch={onSearchQueryChange} />
      <div className=" flex flex-row flex-wrap">
        {moviesResults?.results &&
          moviesResults.results.map((movie) => (
            <div
              key={movie.id}
              className=" w-[calc(100%-16px)] sm:w-[calc(50%-16px)] md:w-[calc(25%-16px)] m-1"
              onClick={() => setSelectedMovie(movie)}
            >
              <MovieCard title={movie.title} posterPath={movie.poster_path} />
            </div>
          ))}
      </div>
      {moviesResults?.total_results && moviesResults.total_results > 20 && (
        <Pagination
          index={selectedPage}
          onPageChange={onPageChange}
          totalCount={moviesResults?.total_results ?? 0}
          pages={moviesResults?.total_pages ?? 0}
        />
      )}
    </div>
  )
}

export default MovieList
