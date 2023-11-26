import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientProvider from './lib/react-query/query-provider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClientProvider>
        <body className={inter.className}>
          <div className="flex flex-col">
            {children}
            <Toaster position="top-left" />
          </div>
        </body>
      </ClientProvider>
    </html>
  )
}
