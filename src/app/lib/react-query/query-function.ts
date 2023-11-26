import { QueryFunction } from '@tanstack/react-query'
import axiosClient from './axios-client'

const queryFunction: QueryFunction = async ({ queryKey }) => {
  const { data: response, headers } = await axiosClient.get(queryKey.join('/'))
  console.log(headers)
  if (headers['x-cache']) {
    response.data.isCached = headers['x-cache'] === 'HIT' ? true : false
  }
  const data = response.data
  return data
}

export default queryFunction