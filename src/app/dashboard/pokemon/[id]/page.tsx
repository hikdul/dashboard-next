import { PokemonDetailsTs } from "@/app/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

// * para generar datos staticos mediante datos de info.
// NOTE: esto solo le ejecuta de tiempo de construccion (build time)
export async function generateStaticParams() {
    // -- 898 pokemon existen para el dia que escribi este codigo
    const staticPAgesIds = Array.from({length: 898}).map((v,i)=> `${i + 1}`)      
    return staticPAgesIds.map( id => ({id}))
}

// * Para obtener lel listado de pokemos por medio de una peticion
const getPokemon = async (id: string): Promise<PokemonDetailsTs> => {
    try{
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
       // OJO: cache: 'force-cache', // TODO: verificar este detalle para jugar con el cache  
        next: {
            revalidate: 60 * 60 * 30 * 6
            // * aca estoy validando cada 6 meses para que autogenere las paginas en caso de que ya las aya echo, 
            // *o mejor dicho que genere de nuevo todo el contenido
        }
    }).then(r => r.json())

    console.log('first')

    // * force-cache: cada ves que se necesita hacer esta peticion se dispara esta peticion
    // * 

    return pokemon
    }
    catch(error)
    {
        return notFound()
    }
}

// * para generar la metadata del software de manera asyncrona
export async function generateMetadata({ params }: props): Promise<Metadata> {
    try {
        const { id, name } = await getPokemon(params.id)
        return {
            title: name,
            description: `pokemon Numero ${id} llamado ${name}`
        }

    } catch (error) {
        return {
            title: '404',
            description: `pokemon no encontrado`
        }
    }
}


export default async function PokemonPage({ params }: props) {
    const pk = await getPokemon(params.id);

    return (
        <div className="flex mt-5 flex-col items-center text-slate-800">
            <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
                <div className="mt-2 mb-8 w-full">
                    <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
                        #{pk.id} {pk.name}
                    </h1>
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src={pk.sprites.other?.dream_world.front_default ?? ''}
                            width={150}
                            height={150}
                            alt={`Imagen del pokemon ${pk.name}`}
                            className="mb-5"
                        />


                        <div className="flex flex-wrap">
                            {
                                pk.moves.map(move => (
                                    <p key={move.move.name} className="mr-2 capitalize">{move.move.name}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 px-2 w-full">

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
                        <p className="text-sm text-gray-600">Types</p>
                        <div className="text-base font-medium text-navy-700 flex">
                            {
                                pk.types.map(type => (
                                    <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
                        <p className="text-sm text-gray-600">Peso</p>
                        <span className="text-base font-medium text-navy-700 flex">
                            {
                                pk.weight
                            }
                        </span>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
                        <p className="text-sm text-gray-600">Regular Sprites</p>
                        <div className="flex justify-center">
                            {pk.sprites.front_default &&
                                <Image
                                    src={pk.sprites.front_default}
                                    width={100}
                                    height={100}
                                    alt={`sprite ${pk.name}`}
                                />
                            }
                            {pk.sprites.back_default &&
                                <Image
                                    src={pk.sprites.back_default}
                                    width={100}
                                    height={100}
                                    alt={`sprite ${pk.name}`}
                                />
                            }

                        </div>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
                        <p className="text-sm text-gray-600">Shiny Sprites</p>
                        <div className="flex justify-center">

                            <Image
                                src={pk.sprites.front_shiny}
                                width={100}
                                height={100}
                                alt={`sprite ${pk.name}`}
                            />

                            <Image
                                src={pk.sprites.back_shiny}
                                width={100}
                                height={100}
                                alt={`sprite ${pk.name}`}
                            />

                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}


interface props {
    params: { id: string }
}