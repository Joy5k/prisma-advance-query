import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient
export async function POST() {
    try {
        await prisma.product_review.create({
            data: {
                title:"Iphone 14",
                rating:"5",
                content: "Lorem",
                productId:14
               
            }
        })
        return NextResponse.json({status:200,Message:"success"})
    } catch (error) {
        return NextResponse.json({message:"Fail to create Product_review" ,error:error,errorCode:error.code});
    }
}