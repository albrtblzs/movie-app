import { NextRequest, NextResponse } from "next/server"
import { StatusCodes } from 'http-status-codes'
import fethcMovie from "@/app/lib/search-movie"

export async function GET(req: NextRequest) {
  try {
    const query = req.nextUrl.searchParams.get('query')

    const response = await fethcMovie(query)

    return NextResponse.json(
      { message: 'Succesfull search', data: response?.data },
      { status: StatusCodes.OK }
    )
  } catch (error: any) {
    console.error(error)
    return NextResponse.json(
      { message: 'Bad request' },
      { status: StatusCodes.BAD_REQUEST }
    )
  }
}
