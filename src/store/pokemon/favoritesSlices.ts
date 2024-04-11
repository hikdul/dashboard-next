import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/app/pokemons';

interface favoritesProps
{
    [Key:string]: SimplePokemon
}

const initialState = {
    '1':{id:'1', name:'bulbasaur'},
}

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