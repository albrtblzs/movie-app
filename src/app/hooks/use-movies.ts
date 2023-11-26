import { useQuery } from "@tanstack/react-query"
import { WithTotal } from "../types/pagination"
import Movie from "../types/movie"

const useMovies = (
  nextPage: number,
  searchQuery: string
) => {
  const queryString = `?query=${searchQuery}&page=${nextPage}`

  return useQuery<WithTotal<Movie[]>>({ queryKey: [`/search${queryString}`] })
}

export default useMovies