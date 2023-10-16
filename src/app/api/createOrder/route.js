import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient

export async function POST() {
    try {
        await prisma.order.create({
            data: {
  title:"Iphone 14",
  token:"123-abc",
 
  itemDiscount:12,
  tax:5,
  total:959,
  discount:15,
  grandTotal:1020,
  firstName:"Mehedi",
  middleName:"Hasan",
  lastName:"Joy",
  mobile:"01923588531",
  email: "mmehedihasanjoyv@gmail.com",
  city: "Patuakhali",
  country: "Bangladesh",
 subTotal: 1120,
  userId:1
     }
        })
        return NextResponse.json({status:200,message:"successfully created the order"})
    } catch (error) {
        return NextResponse.json({ message: "fail to create order ", error: error.name,errorDetails:error});
    }
}