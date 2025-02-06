import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";
import { formRegisterSchema } from "@/app/(without-nav)/auth/schema";
import bcrypt from "bcryptjs"

export async function GET() {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        const result = formRegisterSchema.safeParse(body)


        if (!result.success) {
            return NextResponse.json({ error: "Invalid data" }, { status: 400 })
        }

        const { email, password, fullName } = result.data

        const exitingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (exitingUser) {
            return NextResponse.json(
                { error: "Email already in use" },
                { status: 400 }
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                fullName,
                email,
                password: hashedPassword
            },
            select: {
                id: true,
                fullName: true,
                email: true,
                createdAt: true
            }
        })

        return NextResponse.json(user, { status: 201 })

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}