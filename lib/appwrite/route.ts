import { NextRequest, NextResponse } from 'next/server'
import { Client, Account } from 'node-appwrite'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const client = new Client()
    .setEndpoint('https://sgp.cloud.appwrite.io/v1')
    .setProject('69afaa77002dd254292b')

  const account = new Account(client)

  try {
    const session = await account.createEmailPasswordSession(email, password)
    return NextResponse.json({ success: true, data: session })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 401 })
  }
}