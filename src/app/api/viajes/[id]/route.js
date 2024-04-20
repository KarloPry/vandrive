const { default: prisma } = require("@/config/database");
const { NextResponse, NextRequest } = require("next/server");

// Get many
export async function GET( request, { params } ) {
    try {
        // id de empresa
        const id = params.id;
        
        const viaje = await prisma.viaje.findMany({
            where: {
                empresaId: id,
            }
        })

        if (!viaje) {
            return NextResponse.json({ code: 400, message: "Item not found"})
        }

        return NextResponse.json({ code: 200, message: "Everything OK", data: viaje })
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 200, message: "Error"})
    }
}

// Update single item
export async function PATCH( request, { params } ) {
    try {

        const id = params.id;
        console.log(id);

        return NextResponse.json({ code: 200, message: "Everything OK"})
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 500, message: "Error" })
    }
}

// Delete a single item
export async function DELETE( request, { params } ) {
    try {

        const id = params.id;
        console.log(id);

        return NextResponse.json({ code: 200, message: "Everything OK"})
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 500, message: "Error" })
    }
}