'use client'

import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../_common/components/ui/card'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  title: string
  overview: string
  posterPath: string
}

const variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
}

const MovieCard = ({ title, overview, posterPath }: Props) => {
  const [isOverviewOpen, setIsOverviewOpen] = useState(false)

  return (
    <Card
      className="rounded-sm bg-gray-300 cursor-pointer"
      onClick={() => setIsOverviewOpen(!isOverviewOpen)}
    >
      <CardHeader className="flex">
        <Image
          src={`http://image.tmdb.org/t/p/original/${posterPath}`}
          alt=""
          width={500}
          height={800}
          className="rounded-sm"
        />
        <div className="h-10 p-6 rounded-sm flex items-center justify-center bg-gray-500">
          <CardTitle className="text-header-1 text-gray-200">{title}</CardTitle>
        </div>
      </CardHeader>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isOverviewOpen ? 'visible' : 'hidden'}
      >
        <CardContent className="p-6 rounded-sm text-body-1 bg-gray-800 text-gray-200">
          <p> {overview}</p>
        </CardContent>
      </motion.div>
    </Card>
  )
}
export default MovieCard
