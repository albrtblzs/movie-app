'use client'

import { PropsWithChildren } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './query-client'

const ClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ClientProvider
