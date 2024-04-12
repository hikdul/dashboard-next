'use client'

import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { IoCardOutline, IoStarHalf } from "react-icons/io5"
import { useAppSelector } from '@/store'

export const WidgetGrid = () => {
    
    const state = useAppSelector(state => state)
    const counterState = state.counter
    const NFavoritos = Object.values(state.pokemons).length
    
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        {counterState.isReady &&(
        <SimpleWidget 
            label='Counter'  
            title={`${counterState.count}`}   
            subtitle='Current value' 
            icon={<IoCardOutline size={50}  className='text-blue-600'/>} 
            href='/dashboard/counter' />
        )}

        <SimpleWidget 
            label='Pokemones'  
            title={`${NFavoritos}`}   
            subtitle='favoritos' 
            icon={<IoStarHalf size={50}  className='text-blue-600'/>} 
            href='/dashboard/favorite' />
    </div>
  )
}
