import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
    switch:number
  
}


const initialState: CounterState = {
    switch:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    HandleswitchRight: (state)=> {
state.switch-=100
    },
    HandleswitchLeft: (state)=> {
        state.switch+=100
  },
   
}
}
)


export const { HandleswitchRight, HandleswitchLeft } = counterSlice.actions

export default counterSlice.reducer