"use client"

import { useAppDispatch, useAppSelector } from "@/store"
import { addOne, subsOne } from "@/store/counter/counterSlice"
//import { useState } from "react"


export const CardCounter = ({value=10}:props) => {

    //const [counter, setCounter] = useState(value)
    const counter = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch()

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
interface props{
    value: number
}