import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient

export async function POST(req, res) {
    try {
        await prisma.product.create({
            data: [
                {
                    firstName:'Iphone 14',
                    metaTitle:'Iphone 14 pro',
                    slug:'Apple Lorem ipsum dolor sit amet.',
                    summary:'Lorem ipsum dolor sit amet.',
                    price:1000,  // Provide price as an integer
                    discount:19   // Provide discount as an integer
                },
            ]
        });
        return NextResponse.json({ status: 200, message: "success" });
    } catch (error) {
        return NextResponse.json({ message: 'Fail to create products', error: error.name, errorDetails: error });
    }
}
