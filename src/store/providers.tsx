"use client"

import { Provider } from "react-redux"
import { store } from "."
import { useEffect } from "react"
import { setFavoritesFromLS } from "./pokemon/favoritesSlices"

interface props{
    children: React.ReactNode
}


export const Providers = ({children}:props) => {
  
  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('favorite-pokemons')??'{}')
    store.dispatch(setFavoritesFromLS(fav))
  }, [])
  
  
  return (
    <>
        <Provider store={store}>
            {children}
        </Provider>
    </>
  )
}
