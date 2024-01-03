'use client'

import { Metadata } from 'next';
import { title } from 'process';
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { FaMinus } from 'react-icons/fa6'

export default function CounterPage()
{
    const [counter, setCounter] = useState(0);
    
    export const metadata:Metadata = {
        title: 'Counter',
        description: 'un simple contador'
        
    }
    
    
    return(
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>COUNTER Items</span>
            <span className="text-9xl">{counter}</span>
            
            <div className="flex">
                <button 
                    onClick={() => setCounter(counter-1)} 
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -
                </button>

                <button 
                    onClick={() =>setCounter(counter+1)} 
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +
                </button>
            </div>
        </div>
    )
} 