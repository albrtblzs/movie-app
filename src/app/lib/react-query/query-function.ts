import { QueryFunction } from '@tanstack/react-query'
import axiosClient from './axios-client'

const queryFunction: QueryFunction = async ({ queryKey }) => {
  const { data: response } = await axiosClient.get(queryKey.join('/'))
  const data = response.data
  return data
}

export default queryFunction