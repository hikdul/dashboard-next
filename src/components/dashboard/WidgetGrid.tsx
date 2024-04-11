'use client'

import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { IoCardOutline } from "react-icons/io5"
import { useAppSelector } from '@/store'

export const WidgetGrid = () => {
    
    const counterState = useAppSelector(state => state.counter)
    
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        {counterState.isReady &&(
        <SimpleWidget 
            label='Counter'  
            title={`${counterState.count}`}   
            subtitle='Current value' 
            icon={<IoCardOutline size={50}  className='text-blue-600'/>} 
            href='' />
        )}
    </div>
  )
}
