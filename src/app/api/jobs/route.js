import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Job from "@/models/Job"

export const GET = async (request) => {
    try {
        await connect()
        const jobs = await Job.find()
        return new NextResponse(JSON.stringify(jobs), { status: 200 })
    } catch (error) {
        return new NextResponse("Database error :(", { status: 500 })
    }
}

export const POST = async (request) => {
    const body = await request.json()
    const newJob = new Job(body)
    try {
        await connect()
        await newJob.save()
        return new NextResponse(JSON.stringify(newJob), { status: 200 })
    } catch (error) {
        return new NextResponse("Database error :(", { status: 500 })
    }
}