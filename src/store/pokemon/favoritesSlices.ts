import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/app/pokemons';

interface favoritesStateProps
{
    [Key:string]: SimplePokemon
}

const initialState:favoritesStateProps = {}

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
});

export const {toggleFavorite} = favorites.actions

export default favorites.reducer