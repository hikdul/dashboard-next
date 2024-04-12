'use client'

import React, { useState } from 'react'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/store'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () => {
    
    const favorites = useAppSelector(state => Object.values(state.pokemons))
    // * con esta opcion podemos mantener los pokemones mientras estemos en dicha pagina
    const [pokemons, setpokemons] = useState(favorites)
    
  return (
    <>
      {pokemons.length <= 0 ? (
        <NoPk />
      ):(
        <PokemonGrid pokemons={pokemons} />
      )}
    </>
  )
}

const NoPk = () => (
    <div className="flex flex-col h-[50vh] item-center justify-center">
        <IoHeartOutline size={100} className="text-red-500"/>
        <span>Sin favoritos</span>
    </div>
  )


