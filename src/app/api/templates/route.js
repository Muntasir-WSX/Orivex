
import dbConnect, { collectionsName } from "@/lib/db";

import { NextResponse } from "next/server";



export async function GET() {

    try {

        const templateCollection = await dbConnect(collectionsName.templateCollection);

        const data = await templateCollection.find().toArray();

       

        return NextResponse.json(data);

    } catch (error) {

        console.error("Templates API Error:", error);

        return NextResponse.json(

            { error: "Failed to fetch templates" }, 

            { status: 500 }

        );

    }

}