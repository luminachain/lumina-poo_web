import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const address = searchParams.get("address")

  if (!address) {
    return NextResponse.json({ error: "Wallet address is required" }, { status: 400 })
  }

  // In a real implementation, you would query your database for the miner's data
  // For now, we'll return mock data

  return NextResponse.json({
    success: true,
    redirect: `/dashboard/${address}`,
  })
}
