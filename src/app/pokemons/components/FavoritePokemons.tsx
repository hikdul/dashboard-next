'use client'

import React, { useEffect, useState } from 'react'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/store'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () => {
    
    const favorites = useAppSelector(state => Object.values(state.pokemons.favorites))
    // * con esta opcion podemos mantener los pokemones mientras estemos en dicha pagina
    const [pokemons, setPokemons] = useState(favorites)
    
    // intente generar este valor desde el inicio pero no se dejo
    //useEffect(()=>{
       // ? el modo de almacenamiento de datos no es muy preciso y realmente esta generando problemas para poder mantener esto utilizando el localStorage.
       //const pks = JSON.parse(localStorage.getItem('favorite-pokemons')??'{}')
       //console.log(pks)
       //console.log(pks?.favorites)
       
      //if(Object.values(pks))
        //setPokemons(Object.values(pks.favorite))
    //},[])
    
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

 
