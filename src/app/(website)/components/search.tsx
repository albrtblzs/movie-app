import { useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'

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
    <div className="flex flex-row">
      <SearchIcon />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        onKeyDown={handleKeyDown}
        className="w-full placeholder-gray-500 text-gray-500 text-body-1 place-content-center bg-transparent focus:ring-0"
      />
    </div>
  )
}

export default Search
