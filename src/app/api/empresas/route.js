const { default: prisma } = require("@/config/database");
const { NextResponse, NextRequest } = require("next/server");

// Get all itmes
export async function GET() {
    try {
        
        const empresas = await prisma.empresa.findMany();

        return NextResponse.json({ code: 200, message: "Empresas found", data: empresas })
        
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