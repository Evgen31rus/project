import { createSlice } from '@reduxjs/toolkit'
import IBackendObject from '../modle'


export interface resultFetch {
    value:IBackendObject[]|undefined
  
}


const initialState: resultFetch = {
    value: undefined
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    HandleSetResultFetch: (state, actions)=> {
const data:IBackendObject[]|undefined  = actions.payload
state.value = data
    },
}
}
)


export const { HandleSetResultFetch } = counterSlice.actions

export default counterSlice.reducer