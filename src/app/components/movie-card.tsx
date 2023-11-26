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
        <div className="relative aspect-[5/8] w-full">
          {posterPath && (
            <Image
              src={`http://image.tmdb.org/t/p/w500${posterPath}`}
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-sm"
            />
          )}
        </div>
        <div className="h-[100px] p-2 rounded-sm flex items-start justify-center bg-gray-500">
          <CardTitle className="text-header-1 text-gray-200 line-clamp-3">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <div className="p-2 pt-0">
        <CardContent className="h-[120px] p-2 rounded-sm text-body-1 bg-gray-800 text-gray-200">
          <p className="line-clamp-3"> {overview}</p>
        </CardContent>
      </div>
    </Card>
  )
}
export default MovieCard
