
import {PokemonGrid, SimplePokemon } from "@/app/pokemons"

export const metadata = {
    title: 'Favoritos',
    description: 'muestra los pokemones seleccionados como favoritos'
}

export default async function FavoritePage(){
    
    const pokemons:SimplePokemon[] = []

    return(
        <div className="flex flex-col items-center justify-center">
            <span className="text-5-l my-2 ">
                    Pokemon List 
                        <small className="text-blue-500">Favorites</small>
            </span>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                <PokemonGrid pokemons={pokemons}/>
            </div>
        </div>
    )
}