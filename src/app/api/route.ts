import { NextResponse } from 'next/server'
import getItems from '../service/getItems'

export async function GET() {
  const response = getItems()
  return NextResponse.json({ data: response }, { status: 200 })
}
