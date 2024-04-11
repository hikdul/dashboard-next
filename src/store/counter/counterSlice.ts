
import { PayloadAction, createSlice } from '@reduxjs/toolkit'


interface counterState{
    count: number
    isReady: boolean
}

const initialState: counterState = {
    count: 7,
    isReady: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState(state, action:PayloadAction<number>){
        if(state.isReady)
            return
        state.isReady = true
        state.count = action.payload
    },
    addOne(state){
        if(state.count === 100) return
        state.count++
    },
    subsOne(state){
        if(state.count === 0) return
        state.count--
    },
    resetCouter(state, action: PayloadAction<number>)
    {
        if(action.payload < 0) 
            action.payload = 0
        state.count = action.payload
    }
  }
});

export const {addOne,subsOne,resetCouter,initCounterState} = counterSlice.actions

export default counterSlice.reducer