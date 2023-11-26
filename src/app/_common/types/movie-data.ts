import Movie from "./movie";

type MovieData = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export default MovieData
