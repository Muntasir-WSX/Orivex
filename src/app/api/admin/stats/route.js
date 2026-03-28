import dbConnect, { collectionsName } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        
        const usersCol = await dbConnect(collectionsName.usersCollection);
        const coursesCol = await dbConnect(collectionsName.coursesCollection);
        const templatesCol = await dbConnect(collectionsName.templateCollection);
        const ordersCol = await dbConnect(collectionsName.cartCollection);
        const [totalUsers, totalCourses, totalTemplates, totalOrders] = await Promise.all([
            usersCol.countDocuments(),
            coursesCol.countDocuments(),
            templatesCol.countDocuments(),
            ordersCol.countDocuments(),
        ]);

        return NextResponse.json({
            success: true,
            stats: {
                totalUsers,
                totalCourses,
                totalTemplates,
                totalOrders
            }
        });
    } catch (error) {
        console.error("Stats API Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}