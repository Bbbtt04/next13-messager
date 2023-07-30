import bcrypt from 'bcrypt'

import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  const { email, name, password } = body

  // 判斷是否重复注册
  const isFindUser = await prisma.user.findMany({
    where: {
      email,
    },
  })
  console.log(isFindUser)
  if (isFindUser.length > 0) {
    return new Error('该邮箱已被注册')
  }

  const hashedPassword = await bcrypt.hash(password, 12)
  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  })

  return NextResponse.json(user)
}
