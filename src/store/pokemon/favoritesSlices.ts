import { SimplePokemon } from '@/app/pokemons';
import { createSlice } from '@reduxjs/toolkit'

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
  reducers: {}
});

export const {} = favorites.actions

export default favorites.reducer