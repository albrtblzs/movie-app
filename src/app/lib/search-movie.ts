import axios from 'axios'
import MovieData from '../types/movie-data';

async function fethcMovie(query: string | null) {
  return await axios<MovieData>(
    `https://api.themoviedb.org/3/search/movie?language=en-US&query=${query}&page=1`
    , {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`
      }
    });
}

export default fethcMovie
