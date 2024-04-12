import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/app/pokemons';

interface favoritesStateProps
{
    [Key:string]: SimplePokemon
}

const keyFavorites = 'favorite-pokemons'
// * esto no se considera un antipatron, ya que el llamado al localStorage no es un metodo asincrono y aca no importa que se llamen datos de un elemento externo
const getInitState = ():favoritesStateProps =>{
  const fav = JSON.parse(localStorage.getItem(keyFavorites)??'{}')
  return fav
}

const initialState:favoritesStateProps = {
  ...getInitState()
}

/*
const favorites = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>){
      const pk = action.payload
      const {id} = pk
      
      if(!!state[id])
      {
        delete state[id] 
        return
      }
      
      state[id] = pk
      
    }
  }
});*/

// ? esto es considerado un antipatron, pero lo ideal de hacer es para entender cierta logica que se puede utilizar o mejor dicho que no se debe de hacer
const favorites = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>){
      const pk = action.payload
      const {id} = pk
      
      if(!!state[id])
      {
        delete state[id] 
        return
      }
      else{
        state[id] = pk
      }
     //? aca lo guardamos en el local storage 
     //! se considera un antipatron, ya que literal estamos haciendo algo con el state fuera del stado de redux
     localStorage.setItem(keyFavorites, JSON.stringify(state)) //Note: no se debe de hace esto en redux
      
    }
  }
});

export const {toggleFavorite} = favorites.actions

export default favorites.reducer