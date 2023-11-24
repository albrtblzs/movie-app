import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../_common/components/ui/card'
import Image from 'next/image'

type Props = {
  title: string
  overview: string
  posterPath: string
}
const MovieCard = ({ title, overview, posterPath }: Props) => {
  return (
    <Card className="rounded-sm bg-gray-300">
      <CardHeader className="flex">
        <Image
          src={`http://image.tmdb.org/t/p/original/${posterPath}`}
          alt=""
          width={500}
          height={800}
          className="rounded-sm"
        />
        <div className="h-10 p-6 rounded-sm flex items-center justify-centers bg-gray-500">
          <CardTitle className="text-header-1 text-gray-200">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 rounded-sm text-body-1 bg-gray-800 text-gray-200">
        <p> {overview}</p>
      </CardContent>
    </Card>
  )
}
export default MovieCard
