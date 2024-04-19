const { default: prisma } = require("@/config/database");
const { NextResponse, NextRequest } = require("next/server");

export async function GET() {
    try {
        
        const empresas = await prisma.empresa.findMany();

        return NextResponse.json({ code: 200, message: "Empresas found", data: empresas })
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 500, message: "Error"})
    }
}

export async function POST(request) {
    try {
        const { nombre, plan, latitud, longitud } = await request.json()

        if ( 
            nombre === null ||
            plan === null ||
            latitud === null ||
            longitud === null
        ) return NextResponse.json({ code: 400, message: "Fields missing", data: {nombre, latitud, longitud} })

        const empresa = await prisma.empresa.create({
            data: {
                nombre,
                plan,
                latitud,
                longitud
            }
        })

        return NextResponse.json({ code: 200, message: "Empresa created succesfully", data: empresa })
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ code: 500, message: "Error"})
    }
}