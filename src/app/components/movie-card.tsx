import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../_common/components/ui/card'
import Image from 'next/image'

type Props = {
  title: string
  overview: string
  posterPath: string
}

const MovieCard = ({ title, overview, posterPath }: Props) => {
  return (
    <Card className="rounded-sm bg-gray-300 cursor-pointer">
      <CardHeader className="p-2">
        <Image
          src={`http://image.tmdb.org/t/p/original/${posterPath}`}
          alt=""
          width={500}
          height={800}
          className="rounded-sm"
        />
        <div className="h-5 p-2 rounded-sm flex items-center justify-center bg-gray-500">
          <CardTitle className="text-header-1 text-gray-200">{title}</CardTitle>
        </div>
      </CardHeader>
      <div className="p-2 pt-0">
        <CardContent className="p-2 rounded-sm text-body-1 bg-gray-800 text-gray-200">
          <p> {overview}</p>
        </CardContent>
      </div>
    </Card>
  )
}
export default MovieCard
