import dbConnect, { collectionsName } from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        // params থেকে id নেওয়া (Next.js ডাইনামিক রাউট)
        const { id } = await params; 

        if (!ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
        }

        const templateCollection = await dbConnect(collectionsName.templateCollection);
        
        // নির্দিষ্ট আইডি দিয়ে ডাটা খোঁজা
        const data = await templateCollection.findOne({ _id: new ObjectId(id) });

        if (!data) {
            return NextResponse.json({ error: "Template not found" }, { status: 404 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}