import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()
export async function POST() {
    const aggregate = await prisma.product.aggregate({
        _avg: { price: true },
        _count: { id: true },
        _max: { price: true },
        _sum: { price: true }
    })
   
    const groupBy = await prisma.product.groupBy({
        by: ['firstName'],
        _count:{id:true},
        _sum: { price: true },
        having:{firstName:'Iphone 14'}
    })
    return NextResponse.json({ message: 'successfully aggregated', aggregationResult: aggregate ,groupByResult: groupBy})
}