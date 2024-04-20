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

        // const data = await request.json()
        // console.log(data);

        // const {  }

        const { unidadId, choferId, puntoInicio, puntoFinal, puntosIntermedios, distancia, empresaId, empleadosId } = await request.json()

        const viaje = await prisma.viaje.create({
            data: {
                unidadId,
                choferId,
                puntoInicio,
                puntoFinal,
                puntosIntermedios,
                distancia,
                empresaId,
                empleadosId
            }
        })

        return NextResponse.json({ code: 200, message: "Viaje creado", data: viaje })
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 500, message: "Error"})
    }
}