import { NextResponse } from "next/server"
import connect from "@/utils/db"
import User from "@/models/User"

export const GET = async (request) => {
    try {
        await connect()
        const users = await User.find()

        return new NextResponse(JSON.stringify(users), { status: 200 })
    } catch (error) {
        return new NextResponse("Database Error ;(", { status: 500 })
    }
}

export const POST = async (request) => {
    const body = await request.json()
    const newUser = new User(body)

    try {
        await connect()
        await newUser.save()
        return new NextResponse("User Has Been Created", { status: 201 })
    } catch (error) {
        return new NextResponse("Database Error ;(", { status: 500 })
    }
}