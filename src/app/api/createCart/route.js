const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

const prisma = new PrismaClient();

export async function POST() {
    try {
        await prisma.cart.create({
            data: {
                title: "Laptop",
                sessionId: "123n",
                token: '123-abc',
                status: "online",
                firstName: "Mehedi",
                middleName: "Hasan",
                lastName: "Joy",
                email: "mmehedihasanjoyv@gmail.com",
                mobile: "01923588531",
                city: "Patuakhali",
                country: "Bangladesh",
                user: {
                    connect: {
                        email: "mmehedihasanjoyv@gmail.com"
                    }
                }
            }
        });

        return NextResponse.json({ status: 200, message: "Cart created successfully" });
    } catch (error) {
        console.error("Error creating cart:", error);
        return NextResponse.json({ status: 500, message: "Error creating cart", error: error });
    }
}
