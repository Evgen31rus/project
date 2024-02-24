import { createSlice } from '@reduxjs/toolkit'
import IBackendObject from '../modle'


export interface resultFetch {
    value:IBackendObject[]|undefined,
    inishialValue:IBackendObject[]|undefined
  
}


const initialState: resultFetch = {
    value: undefined,
    inishialValue:undefined
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    HandleSetResultFetch: (state, actions)=> {
const data:IBackendObject[]|undefined  = actions.payload
state.value = data
    },
    
    HandleAddInishialStateFetch: (state, actions) =>{
        const data:IBackendObject[]  = actions.payload
        state.inishialValue = data
    }
}
}
)


export const { HandleSetResultFetch , HandleAddInishialStateFetch} = counterSlice.actions

export default counterSlice.reducer