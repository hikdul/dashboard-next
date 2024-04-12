import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/app/pokemons';

interface favoritesStateProps
{
    [Key:string]: SimplePokemon
}


interface pokemonsStateProps
{
    favorites:favoritesStateProps
}


// * esto no se considera un antipatron, ya que el llamado al localStorage no es un metodo asincrono y aca no importa que se llamen datos de un elemento externo
const getInitState = ():favoritesStateProps =>{

  //! con esta condicion puede funcionar pero igual puede presentar varias fallas en un futuro. **[2]
  if(typeof localStorage === 'undefined') return {}; //? cual seria la recomendacion **[3] es: <|>
  
  const fav = JSON.parse(localStorage.getItem('favorite-pokemons')??'{}')
  return fav
}
const initialState:pokemonsStateProps = {
  favorites: {}
}
//const initialState:favoritesStateProps = {
//  // note: esto se tiene que generar del lado del cliente, y en el build no funciona bien **[1]
//  ...getInitState()
//
//}

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
    setFavoritesFromLS(state, action: PayloadAction<favoritesStateProps>){
      state.favorites = action.payload
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>){
      const pk = action.payload
      const {id} = pk
      
      if(!!state.favorites[id])
      {
        delete state.favorites[id] 
        return
      }
      else{
        state.favorites[id] = pk
      }
     //? aca lo guardamos en el local storage 
     //! se considera un antipatron, ya que literal estamos haciendo algo con el state fuera del stado de redux
     //localStorage.setItem(keyFavorites, JSON.stringify(state.favorites)) //Note: no se debe de hace esto en redux || por eso se uso un middleware
      
    }
  }
});

export const {toggleFavorite,setFavoritesFromLS} = favorites.actions

export default favorites.reducer