import { Card, CardHeader, CardTitle } from '../../_common/components/ui/card'
import Image from 'next/image'

type Props = {
  title: string
  posterPath: string
}

const MovieCard = ({ title, posterPath }: Props) => {
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
          <div className="w-full bottom-2  absolute  px-1 z-20 flex items-start justify-center">
            <CardTitle className="text-header-2 text-gray-200 line-clamp-3">
              {title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
export default MovieCard
