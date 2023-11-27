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

export const fetchCache = 'force-no-store'

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
    isError,
    error,
    refetch,
    isSuccess,
  } = useMovies(selectedPage, selectedQuery)

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
        page: String(1),
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
      <div className="flex flex-col-reverse md:flex-row  items-center md:justify-between">
        <div className="w-full md:w-1/3 bg-gray-800 h-6 rounded-sm pt-1">
          {isSuccess && (
            <p className="text-gray-300">
              {t('cach_notification', {
                place: moviesResults?.isCached ? 'cache' : 'API',
              })}
            </p>
          )}
        </div>
        <div className="w-full md:w-2/3">
          <Search onRefetch={onSearchQueryChange} />
        </div>
      </div>
      {moviesResults?.results && moviesResults.total_results > 0 ? (
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
      ) : (
        <div className="py-3 md:py-6">
          <h2>{t('no_results', { query: selectedQuery })}</h2>
        </div>
      )}
      {moviesResults?.total_results && moviesResults.total_results > 20 ? (
        <Pagination
          index={selectedPage}
          onPageChange={onPageChange}
          totalCount={moviesResults?.total_results ?? 0}
          pages={moviesResults?.total_pages ?? 0}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default MovieList
