import dbConnect, { collectionsName } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const coursesCollection = await dbConnect(collectionsName.coursesCollection);
        const courses = await coursesCollection.find({}).toArray();
        return NextResponse.json(courses);
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch courses" }, { status: 500 });
    }
}