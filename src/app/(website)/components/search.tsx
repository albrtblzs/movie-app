import { useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { Button } from '@/app/_common/components/ui/button'

type Props = {
  onRefetch: (query: string) => void
}
const Search = ({ onRefetch }: Props) => {
  const [query, setQuery] = useState('')

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      onRefetch(query)
    }
  }
  return (
    <div className="flex flex-row bg-gray-200 rounded-sm m-2 h-6 items-center gap-1">
      <SearchIcon className="w-6 h-6" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        onKeyDown={handleKeyDown}
        className="w-full placeholder-gray-500 text-gray-500 text-body-1 place-content-center bg-transparent focus:ring-0 spx-2"
      />
      <Button
        variant="custom"
        size="sm"
        onClick={() => onRefetch(query)}
        disabled={!query}
        className="cursor-pointer bg-gray-500 h-6"
      >
        Search
      </Button>
    </div>
  )
}

export default Search
