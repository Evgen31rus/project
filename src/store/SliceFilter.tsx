import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import backend from '../backend';
import IBackendObject from '../modle';

export interface CounterState {
  price: priceObject,
  category: CategoryObject[]
  search: IBackendObject[]
}
export interface CategoryObject{
    category: string[];
}
export interface priceObject{
    minPrice: number,
    maxPrice: number,
}


const initialState: CounterState = {
 price:{
    minPrice:0,
    maxPrice: Math.max(...backend.map(el => el.price)) 
 },

category: [
    {
        category: backend.map(el=> el.category)
    }
], 

search:[...backend]
,


}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    HandleInputMinDate: (state, action?)=> {
        const  minDate = action?.payload;
      state.price.minPrice = minDate;
    },
    HandleInputMaxDate: (state, action?)=> {
      const  maxDate = action?.payload;
    state.price.maxPrice = maxDate;
  },
  HandleInputSearch:(state, action)=>{
    const  searchData:string = action.payload;

    if(searchData){
      state.search = backend.filter(el=> 
        el.name.toLowerCase().trim()==searchData.toLowerCase().trim()
        ||el.category.toLowerCase().trim()==searchData.toLowerCase().trim()
        && el.price<=state.price.maxPrice
        && el.price>=state.price.minPrice
        )
    }else{
      state.search=[...backend]
    }

  }
}
}
)


export const { HandleInputMinDate, HandleInputMaxDate, HandleInputSearch } = counterSlice.actions

export default counterSlice.reducer