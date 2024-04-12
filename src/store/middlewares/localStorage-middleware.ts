import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

export const localStorageMiddleware = (state: MiddlewareAPI) =>{
    return (next: Dispatch) => ( action: Action) =>{
        // ? esta linea indica que se aplique la accion, sin esta linea todas las acciones quedan bloqueadas.
        // ! definace por accion a los dispatch del redux
        next(action) // * esto se considera una accion sincrona.
        // * desde aca ya empezamos a trabajar
        //console.log(state.getState())
        //console.log(action)
        //* asi indicamos que solo se ejecute si es esta accion la que se ejecuta
        if(action.type === 'pokemons/toggleFavorite')
        {
            const {pokemons} = state.getState() as RootState       
            localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons)) 
        }
        return
    }
}