import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"

export const GET = async (request) => {
    try {
        await connect()
        const posts = await Post.find()
        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new NextResponse("Database Error ;(", { status: 500 })
    }
}

export const POST = async (request) => {
    const body = await request.json()
    const newPost = new Post(body)

    try {
        await connect()
        await newPost.save()
        return new NextResponse("Post Has Been Created", { status: 201 })
    } catch (error) {
        return new NextResponse("Database Error ;(", { status: 500 })
    }
}