import dbConnect, { collectionsName } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
     
        const cartCollection = await dbConnect(collectionsName.cartCollection);
        
        const purchaseData = {
            ...body,
            purchaseAt: new Date(),
            status: "completed" 
        };

        const result = await cartCollection.insertOne(purchaseData);
        
        return NextResponse.json({ 
            success: true, 
            message: "Success!", 
            insertedId: result.insertedId 
        });
    } catch (error) {
        console.error("Checkout Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}



export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const email = searchParams.get('email');

        if (!email) {
            return NextResponse.json({ success: false, error: "Email missed!" }, { status: 400 });
        }

        const cartCollection = await dbConnect(collectionsName.cartCollection);

        const result = await cartCollection.find({ userEmail: email }).toArray();

        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}