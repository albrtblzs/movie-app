import axios from 'axios'
import MovieData from '../../_common/types/movie-data';
import config from '@/app/config';

async function searchMovies(query: string | null, page: number) {
  const { url, apiKey } = config.tmdbAPI

  return await axios<MovieData>(
    `${url}/search/movie?query=${query}&page=${page}`
    , {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    })
}

export default searchMovies
