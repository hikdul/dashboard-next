import { SimplePokemon } from "../interfaces/simple-pokemon"
import { PokemonCard } from "./PokemonCard"


export function PokemonGrid({pokemons}:props) {

    return (
        <>
            {
                pokemons.map(pk => ( <PokemonCard pokemon={pk} key={pk.name} />))
            }
        </>
    )
}


interface props{
    pokemons: SimplePokemon[]
}


