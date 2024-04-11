'use client'
import Link from "next/link"
import { SimplePokemon } from ".."
import Image from "next/image"
import { FaHeart } from "react-icons/fa6"
import { IoHeart, IoHeartOutline } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "@/store"
import { toggleFavorite } from "@/store/pokemon/favoritesSlices"

export const PokemonCard = ({pokemon}:prop) => {
    const id = `${pokemon.id}`
    // ? esto es para que verifique si este esta en la lista de favoritos
    const isFavorite = useAppSelector(state => !!state.pokemons[id] )
    const dispatch = useAppDispatch()
    //console.log({isFavorite})
    const onToggleFavorite = () =>{
        dispatch(toggleFavorite(pokemon))
    }
    
    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b">

                    <div className="h-24 w-24 text-white rounded-full mx-auto">
                        <Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                            width={150}
                            height={150}
                            alt={`${pokemon.name}`}
                            priority={false}
                        />
                    </div>
                    <p className="text-sm text-gray-100">{pokemon.id}</p>
                    <div className="mt-5">
                        <a
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                           {pokemon.name} 
                        </a>
                    </div>
                </div>
                <div className="border-b">
                  <Link href={`/dashboard/pokemon/${pokemon.id}`} className="px-4 py-2 hover:bg-gray-100 flex" >
                            <div className="text-green-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            
                            
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    Detalles por id
                                </p>
                                <p className="text-xs text-gray-500">Detalles generales del pokemon</p>
                            </div>
                    </Link>
                    <Link href={`/dashboard/pokemons/${pokemon.name}`} className="px-4 py-2 hover:bg-gray-100 flex" >
                            <div className="text-green-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            
                            
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    Detalles por nombre
                                </p>
                                <p className="text-xs text-gray-500">Detalles generales del pokemon</p>
                            </div>
                    </Link>
         
                    <div
                        onClick={onToggleFavorite}
                        className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer" >
                        <div className="text-red-600">
                            {isFavorite ? <IoHeart /> : <IoHeartOutline/>}
                            
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">{isFavorite ? 'SI' : 'NO'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


interface prop {
    pokemon : SimplePokemon
}