import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../../_common/components/ui/card'
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
        <div className="w-full relative aspect-[5/8] ">
          <div className="w-full absolute bottom-0 h-3/4 bg-gradient-to-t from-neutral-800 to-transparent z-20 rounded-sm"></div>
          {posterPath && (
            <Image
              src={`http://image.tmdb.org/t/p/w500${posterPath}`}
              alt={`http://image.tmdb.org/t/p/w500${posterPath}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-sm"
            />
          )}
          <div className="w-full bottom-2  absolute  p-2 z-20 flex items-start justify-center">
            <CardTitle className="text-header-2 text-gray-200 line-clamp-3">
              {title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      {/* <div className="p-2 pt-0">
        <CardContent className="h-[120px] p-2 rounded-sm text-body-1 bg-gray-800 text-gray-200">
          <p className="line-clamp-3"> {overview}</p>
        </CardContent>
      </div> */}
    </Card>
  )
}
export default MovieCard
