const { default: prisma } = require("@/config/database");
const { NextRequest, NextResponse } = require("next/server");

export async function GET({ params }) {
    try {
        // Id de la empresa, no del viaje
        const id = params.id;

        const viajes = await prisma.viaje.findMany({
            where: {
                empresaId: id,
            }
        })

        return NextResponse.json({ code: 200, message: "Trips retrieved", data: viajes })

        

    } catch (error) {
        console.log(error);
        return NextResponse.json({ cose: 500, message: "ERROR" })
    }
}