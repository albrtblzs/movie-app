import { NextRequest, NextResponse } from "next/server"
import { StatusCodes } from 'http-status-codes'
import handleCaching from "./handle-caching";

export async function GET(req: NextRequest) {
  try {

    const query = req.nextUrl.searchParams.get('query')
    const pageNumber = Number(req.nextUrl.searchParams.get('page'));
    const page = isNaN(pageNumber) || pageNumber === 0 ? 1 : pageNumber;

    return handleCaching(query, page)

  } catch (error: any) {
    return NextResponse.json(
      { message: 'Bad request' },
      { status: StatusCodes.BAD_REQUEST }
    )
  }
}

