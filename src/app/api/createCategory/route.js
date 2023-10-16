import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()
export async function POST() {
    try {
        await prisma.catergory.create({
            data: {
                title:"Electronics",
                metaTitle:"Electronics",
                slug:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis optio porro molestiae",
                content:"Electronics shop"
            }
        })
        return NextResponse.json({status: 200, message:"Successfully created category"})
    } catch (error) {
        return NextResponse.json({ message: "Fail to create category", error: error.name, ErrorDetails:error})
    }
}