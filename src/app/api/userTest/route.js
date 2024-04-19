import { NextRequest, NextResponse } from "next/server";

const { default: prisma } = require("@/config/database");

export async function GET() {
    try {

        const users = await prisma.user.findMany();

        return NextResponse.json({ code: 200, message: "Users found", data: users })
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 500, message: "Error" })
    }
}