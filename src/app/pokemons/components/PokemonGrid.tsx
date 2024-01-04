import { SimplePokemon } from "../interfaces/simple-pokemon"
import { PokemonCard } from "./PokemonCard"


export function PokemonGrid({pokemons}:props) {

    return (
        <>
            {
                pokemons.map(pk => ( <PokemonCard pokemon={pk} key={pk.id} />))
            }
        </>
    )
}


interface props{
    pokemons: SimplePokemon[]
}



// <Image
//     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pk.id}.png`}
//     width={100}
//     height={100}
//     alt={`${pk.name}`}
// />