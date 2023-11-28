import fethcMovie from "@/app/lib/themoviedb-api/search-movie";
import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { NextResponse } from "next/server";
import redisInstance from "@/app/lib/redis/redis";


async function handleCaching(query: string | null, page: number) {
  try {
    const redis = redisInstance;

    const key = `query=${query}&page=${page}`

    const cached = await redis.get(key);

    if (cached) {
      await redis.incr('cache_hit_count')
      const res = NextResponse.json(
        { message: 'Succesfull search', data: JSON.parse(cached) },
        { status: StatusCodes.OK }
      )
      res.headers.set('X-Cache', 'HIT')
      res.headers.set('X-Cache-Lookup', 'HIT from DiskCache')
      return res
    }

    const response = await fethcMovie(query, page)

    const MAX_AGE = 2 * 60 * 1000; // 2 minutes
    const EXPIRY_MS = `PX`; // milliseconds

    await redis.set('cache_hit_count', 0)
    await redis.set(key, JSON.stringify(response?.data), EXPIRY_MS, MAX_AGE);

    const res = NextResponse.json(
      { message: 'Succesfull search', data: response?.data },
      { status: StatusCodes.OK }
    )
    res.headers.set('X-Cache', 'MISS')
    res.headers.set('X-Cache-Lookup', 'MISS from DiskCache')
    return res

  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const statusCode = error.response.status;
      return NextResponse.json(
        { message: `${error.response.statusText}: ${error.response.data.status_message}` },
        { status: statusCode }
      )
    }
    return NextResponse.json(
      { message: 'Bad request' },
      { status: StatusCodes.BAD_REQUEST }
    )
  }

}

export default handleCaching