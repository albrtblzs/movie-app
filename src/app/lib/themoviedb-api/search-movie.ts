import axios from 'axios'
import MovieData from '../../_common/types/movie-data';

async function fethcMovie(query: string | null, page: number) {
  return await axios<MovieData>(
    `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`
    , {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`
      }
    });
}

export default fethcMovie
