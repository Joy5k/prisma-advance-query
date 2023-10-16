import { NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()
export async function POST() {
    try {
        await prisma.product_meta.create({
            data: {
                key:'123-abc',
                content:'Lorem ipsum dolor sit amet.',
                productId:13 
              }
        })
        return NextResponse.json({status: 200, Message:"successfully created the product_meta"})
    }
    catch (error) {
        return NextResponse.json({message:"fail to create product_meta",error: error.name,errorDetails:error});
    }
}
