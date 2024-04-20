const { default: prisma } = require("@/config/database");
const { NextResponse } = require("next/server");

export async function GET( request, { params  }) {
    try {
        const id = params.id;

        const empleados = await prisma.empleado.findMany({
            where: {
                empresaId: id
            }
        })

        return NextResponse.json({ code: 200, message: "OK", data: empleados })


    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 500, message: "ERROR"})
    }
    
}