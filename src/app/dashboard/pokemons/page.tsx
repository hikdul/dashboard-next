import {PokemonGrid, PokemonResponse, SimplePokemon } from "@/app/pokemons"

const getPokemons = async (limit = 50, offset = 0): Promise<SimplePokemon[]> => {

    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json())

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))
    
   // ? aca lansamos un eeror para disenar la pagina del error 500 y tener una muestra..
   // throw new Error('error forzado')

    return pokemons
}

export default async function PokemonsPage(){
    
    const pokemons = await getPokemons()

    return(
        <div className="flex flex-col items-center justify-center">
            <span className="text-5-l my-2 ">
                    Pokemon List 
                        <small className="text-blue-500">static</small>
            </span>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                <PokemonGrid pokemons={pokemons}/>
            </div>
        </div>
    )
}