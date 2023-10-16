import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma =new PrismaClient()
export async function POST() {
    try {
        const createUser = prisma.user.create({
            data:{
                firstName:"Shahin",
                middleName:"Hawlader",
                lastName:"Hossain",
                mobile:"01623588000",
                email: "shahinlp@gmail.com",
                password:"1234578988"
         }
        })
        const deleteProduct = prisma.product.delete({
            where: { id:13}
        })
        const result=await prisma.$transaction([createUser,deleteProduct])

        return NextResponse.json({status:200,message:"transaction operation success",result:result})
    }
    catch (error) {
        return NextResponse.json({error:error})
    }
}