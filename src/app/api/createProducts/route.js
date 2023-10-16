import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient

export async function POST(req, res) {
    try {
        await prisma.product.createMany({
            data: [
                {
                    
                    firstName:'Iphone 14',
                    metaTitle:'Iphone 14 pro',
                    slug:'Apple Lorem ipsum dolor sit amet.',
                    summary:'Lorem ipsum dolor sit amet.',
                    price:1200,  // Provide price as an integer
                discount:110,
                userId:1  
                },
                {
                    
                    firstName:'Iphone 13',
                    metaTitle:'Iphone 13 pro',
                    slug:'Apple Lorem ipsum dolor sit amet.',
                    summary:'Lorem ipsum dolor sit amet.',
                    price:1999,  // Provide price as an integer
                discount: 11,
                userId:1  
                },
                {
                    
                    firstName:'Iphone 10',
                    metaTitle:'Iphone 10 pro',
                    slug:'Apple Lorem ipsum dolor sit amet.',
                    summary:'Lorem ipsum dolor sit amet.',
                    price:9999,  // Provide price as an integer
                discount: 100,
                userId:1  
                },
                {
                    
                    firstName:'one+',
                    metaTitle:'Android phone',
                    slug:'Apple Lorem ipsum dolor sit amet.',
                    summary:'Lorem ipsum dolor sit amet.',
                    price:1250,  // Provide price as an integer
                discount: 125,
                userId:1  
                },
                {
                    
                    firstName:'Samsung Galaxy s20',
                    metaTitle:'Android Phone made by Samsung Galaxy',
                    slug:'Apple Lorem ipsum dolor sit amet.',
                    summary:'Lorem ipsum dolor sit amet.',
                    price:1600,  // Provide price as an integer
                discount: 126,
                userId:1  
                },
                {
                    
                    firstName:'Nokia s34',
                    metaTitle:'Android phone made by Nokia',
                    slug:'Apple Lorem ipsum dolor sit amet.',
                    summary:'Lorem ipsum dolor sit amet.',
                    price:566,  // Provide price as an integer
                discount: 23,
                userId:1  
                },
                {
                    
                    firstName:'Vivo',
                    metaTitle:'Android Phone made by Vivo',
                    slug:'Apple Lorem ipsum dolor sit amet.',
                    summary:'Lorem ipsum dolor sit amet.',
                    price:960,  // Provide price as an integer
                discount: 60,
                userId:1  
                },
            ]
         });
        return NextResponse.json({ status: 200, message: "success" });
    }
    catch (error) {
        return NextResponse.json({ message: 'Fail to create products', error: error.name, errorDetails: error });
    }
}
