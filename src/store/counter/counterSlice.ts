
import { PayloadAction, createSlice } from '@reduxjs/toolkit'


interface counterState{
    count: number
}

const initialState: counterState = {
    count: 7
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
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

export const {addOne,subsOne,resetCouter} = counterSlice.actions

export default counterSlice.reducer