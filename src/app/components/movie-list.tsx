import MovieCard from './movie-card'

const movieData = {
  title: 'Title',
  overview: 'Overview',
  posterPath: '/bUCnDHbDA0nzwxtpsDMBKmpmDah.jpg',
}

type Props = {
  movies?: any[]
}
const MovieList = ({ movies }: Props) => {
  return (
    <section className="w-full flex flex-row flex-wrap">
      <div className="w-[calc(25%-16px)] m-1">
        <MovieCard {...movieData} />
      </div>
      <div className="w-[calc(25%-16px)]  m-1">
        <MovieCard {...movieData} />
      </div>
      <div className="w-[calc(25%-16px)]  m-1">
        <MovieCard {...movieData} />
      </div>
      <div className="w-[calc(25%-16px)]  m-1">
        <MovieCard {...movieData} />
      </div>
      <div className="w-[calc(25%-16px)]  m-1">
        <MovieCard {...movieData} />
      </div>
    </section>
  )
}

export default MovieList
