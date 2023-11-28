import { QueryClient } from '@tanstack/react-query'
import queryFunction from './query-function'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      queryFn: queryFunction,
    }
  }
})

export default queryClient