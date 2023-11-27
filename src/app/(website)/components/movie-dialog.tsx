import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/_common/components/ui/dialog'
import Image from 'next/image'
import Movie from '@/app/_common/types/movie'
import { useTranslation } from '@/app/i18n/client'

type Props = {
  selectedMovie: Movie | null
  onDialogChange: any
}
const MovieDialog = ({ selectedMovie, onDialogChange }: Props) => {
  const { t } = useTranslation()

  return (
    <Dialog open={selectedMovie !== null} onOpenChange={onDialogChange}>
      <DialogContent
        className="rounded-sm bg-gray-800 cursor-pointer sm:max-w-auto md:max-w-[900px] xl:max-w-[900px] border-none h-[80vh] overflow-y-auto"
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
              <p>
                {t('language')}: {selectedMovie?.original_language}
              </p>
              <p>
                {t('origin_title')}: {selectedMovie?.original_title}
              </p>
              <p>
                {t('popularity')}: {selectedMovie?.popularity}
              </p>
              <p>
                {t('release_date')}: {selectedMovie?.release_date}
              </p>
              <p>
                {t('vote_average')}: {selectedMovie?.vote_average}
              </p>
              <p>
                {t('vote_count')} {selectedMovie?.vote_count}
              </p>
            </DialogDescription>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default MovieDialog
