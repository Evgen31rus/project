import React, { useEffect, useState } from "react";
import IBackendObject from "../modle";
import ProductCard from "../components/ProductCard";
import HelpZone from "../components/HelpZone";
import ProductError from '../components/ProductError';
import { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { HandleInputSearch } from "../store/SliceFilter";


type PropTypes ={
    product:IBackendObject[]
        }


export default function ProductPages({product}:PropTypes){
   let state = useSelector((state:RootState) => state)
   let stateMin = useSelector((state:RootState) => state.switchFilterPrice.price.minPrice)
   let stateMax = useSelector((state:RootState) => state.switchFilterPrice.price.maxPrice)
   let stateSearch = useSelector((state:RootState) => state.switchFilterPrice.search)
   let dispatch = useDispatch()




return(
   <>
<HelpZone/>

   <div className='relative flex flex-wrap max-w-[1500px] min-h-[300px] justify-center m-auto'>

{

    stateSearch.length?
stateSearch.map(element=>
<ProductCard product={element}/>
)
:
<ProductError/>
} 



</div>

   </>

        
    )
}