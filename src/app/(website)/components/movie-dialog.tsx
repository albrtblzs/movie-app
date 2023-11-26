import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/_common/components/ui/dialog'
import Image from 'next/image'
import Movie from '@/app/_common/types/movie'

type Props = {
  selectedMovie: Movie | null
  onDialogChange: any
}
const MovieDialog = ({ selectedMovie, onDialogChange }: Props) => {
  return (
    <Dialog open={selectedMovie !== null} onOpenChange={onDialogChange}>
      <DialogContent
        className="rounded-sm bg-gray-800 cursor-pointer sm:max-w-auto md:max-w-[900px] xl:max-w-[900px] border-none max-lg:h-[80vh] overflow-y-auto"
        color="white"
      >
        <DialogHeader className="p-2 flex flex-col md:flex-row gap-2">
          <div className="md:w-1/2 relative aspect-[5/8]">
            {selectedMovie?.poster_path && (
              <Image
                src={`http://image.tmdb.org/t/p/w500${selectedMovie?.poster_path}`}
                alt={`http://image.tmdb.org/t/p/w500${selectedMovie?.poster_path}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-sm"
              />
            )}
          </div>
          <div className="md:w-1/2 flex flex-col justify-between">
            <DialogTitle className="flex flex-col gap-2 p-2 text-header-1 text-gray-100">
              <div className="text-header-1">{selectedMovie?.title}</div>
              <div className="text-body-1">{selectedMovie?.overview}</div>
            </DialogTitle>
            <DialogDescription className="flex flex-col gap-1 p-2 rounded-sm text-body-1 bg-gray-800 text-gray-200">
              <p>Original language: {selectedMovie?.original_language}</p>
              <p>Original title: {selectedMovie?.original_title}</p>
              <p>Popularity: {selectedMovie?.popularity}</p>
              <p>Release date: {selectedMovie?.release_date}</p>
              <p>Vote average: {selectedMovie?.vote_average}</p>
              <p>Vote count: {selectedMovie?.vote_count}</p>
            </DialogDescription>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default MovieDialog
