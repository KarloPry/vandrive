const { default: prisma } = require("@/config/database");
const { NextRequest, NextResponse } = require("next/server");

// Get all items
export async function GET() {
    try {
        
        const accounts = await prisma.account.findMany();

        return NextResponse.json({ code: 200, message: "Accounts found", data: accounts })
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 500, message: "Error"})
    }
}

// Create a single item
export async function POST(request) {
    try {

        const { email, name } = await request.json()

        const user = await prisma.account.findMany({
            where: {
                email
            }
        })

        if ( user.length !== 0 ) {

            if ( user[0].empresaId === null ) {
                return NextResponse.json({ code: 201, message: "existsNoEmpresa", data: user[0] })
            }

            return NextResponse.json({ code: 200, message: "exists", data: user[0] })
        }

        const account = await prisma.account.create({
            data: {
                email,
                name
            }
        })

        return NextResponse.json({ code: 202, message: "created", data: account })
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 500, message: "Error"})
    }
}