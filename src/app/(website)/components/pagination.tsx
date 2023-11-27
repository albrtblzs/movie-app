import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../../_common/components/ui/button'
import { useTranslation } from '@/app/i18n/client'

type Props = {
  index: number
  onPageChange: (direction: number) => void
  totalCount?: number
  pages: number
}
const Pagination = ({ index, onPageChange, totalCount, pages }: Props) => {
  const { t } = useTranslation()

  return totalCount ? (
    <div className="flex items-center justify-center space-x-2 py-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(-1)}
        disabled={index === 1}
        className="cursor-pointer"
      >
        <ChevronLeft />
      </Button>
      <div className="flex w-[200px] items-center justify-center text-sm rounded-sm px-2 py-1">
        {totalCount && <>{`${t('pagination_pages')}: ${index}/${pages}`}</>}
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(1)}
        disabled={index === pages}
        className="cursor-pointer"
      >
        <ChevronRight />
      </Button>
    </div>
  ) : (
    <></>
  )
}

export default Pagination
