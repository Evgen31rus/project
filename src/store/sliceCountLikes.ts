import { createSlice } from '@reduxjs/toolkit'
import IBackendObject from '../modle'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: IBackendObject[]

}

const initialState: CounterState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    HandleAddLikes: (state, actions) => {
      let data = actions.payload
   state.value.push(data)
    },
    HandleRemoveLikes: (state, actions) => {
      const data:string = actions.payload
      state.value.splice(state.value.map(el => el.id).indexOf(data),1)
    }
   
}
}
)


export const { HandleAddLikes, HandleRemoveLikes } = counterSlice.actions

export default counterSlice.reducer