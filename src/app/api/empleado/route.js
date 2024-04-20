const { default: prisma } = require("@/config/database");
const { NextResponse } = require("next/server");




export async function POST(request) {
    try {

        const { name, longitud, latitud, empresaId } = await request.json()

        const empleado = await prisma.empleado.create({
            data: {
                name,
                longitud,
                latitud,
                empresaId
            }
        })

        return NextResponse.json({ code: 200, message: "Item created", data: empleado })
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 500, message: "Error"})
    }
}