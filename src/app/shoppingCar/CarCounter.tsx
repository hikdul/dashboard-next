"use client"

import { useAppDispatch, useAppSelector } from "@/store"
import { addOne,initCounterState, subsOne } from "@/store/counter/counterSlice"
import { Console } from "console"
import { useEffect } from "react"
//import { useState } from "react"


interface props{
    value: number
}

interface counterResponseProp
{
    method?: string
    count: number
}


const getAPICounter = async():Promise<counterResponseProp>  => {
    const data = await fetch('/api/counter')
        .then(res => res.json())
    console.log({data})
    return data 
}


export const CardCounter = ({value=10}:props) => {

    const counter = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()
    
    // useEffect(()=>{
    //     dispatch(initCounterState(value))
    // },[dispatch,value])
    useEffect(()=>{
        getAPICounter()
            .then(data => dispatch(initCounterState(data.count)))
    },[dispatch])

    return (
        <>
            <span className="text-9xl">{counter}</span>

            <div className="flex">
                <button
                    onClick={() => dispatch(subsOne())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -

                </button>

                <button
                    onClick={() => dispatch(addOne())}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +
                </button>
            </div>
        </>
    )
}

{/* 
// !==> este es el modo antiguo de trabajar
export const CardCounter = ({value=10}:props) => {

    const [counter, setCounter] = useState(value)

    return (
        <>
            <span className="text-9xl">{counter}</span>

            <div className="flex">
                <button
                    onClick={() => setCounter(counter - 1)}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -

                </button>

                <button
                    onClick={() => setCounter(counter + 1)}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +
                </button>
            </div>
        </>
    )
}
*/}