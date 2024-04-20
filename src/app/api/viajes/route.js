const { default: prisma } = require("@/config/database");
const { NextRequest, NextResponse } = require("next/server");

// Get all items
export async function GET() {
    try {
        
        const viajes = await prisma.viaje.findMany();

        return NextResponse.json({ code: 200, message: "Items found", data: viajes })
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 500, message: "Error"})
    }
}

// Create a single item
export async function POST(request) {
    try {

        const data = await request.json()
        console.log(data);
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 500, message: "Error"})
    }
}