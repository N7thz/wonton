import { prisma } from "@/lib/prisma"
import { User } from "@prisma/client"
import { hash } from "bcryptjs"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {

    const { email, password }: User = await request.json()

    const isUserAlreadyExist = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (isUserAlreadyExist) {
        return NextResponse.json("ADMIN already exist", {
            status: 400
        })
    }

    const user = {
        email,
        password: await hash(password, 6),
    }

    const newUser = await prisma.user.create({
        data: user
    })

    return NextResponse.json(newUser)
}