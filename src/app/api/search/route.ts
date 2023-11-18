import { NextRequest, NextResponse } from "next/server"
import { StatusCodes } from 'http-status-codes'

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    // here put the 3rd party API request
    return NextResponse.json(
      { message: 'Succesfull search', data: 'search request' },
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
