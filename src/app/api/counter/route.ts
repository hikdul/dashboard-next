
// ? de este modo genero un api para que la aplicacion pueda trabajar creando sus propios endPoints

import { NextResponse } from "next/server";
// * con cambiar el GET, POST o cualquier tipo de peticion esta cambia.
// ! para mas informacion visitar: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

export async function GET(request: Request)
{
    return NextResponse.json({
        count: 88,
    })
}