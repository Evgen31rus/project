import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
    switch:boolean
  
}


const initialState: CounterState = {
    switch:false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    HandleswitchMobileMenu: (state)=> {
state.switch=!state.switch
    },

   
}
}
)


export const {  HandleswitchMobileMenu } = counterSlice.actions

export default counterSlice.reducer