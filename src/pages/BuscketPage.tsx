import React from "react";
import IBackendObject from "../modle";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ProductInBuscket from "../components/ProductInBuscket";
import ProductError from "../components/ProductCard/ProductError";




export default function BuscketPage(){
let state = useSelector((state:RootState) => state)


 const functionCountBuscket = ()=>{
   return state.countBuscket.value
 }



return(
   <>
<div className="flex  pt-20 pl-5 justify-center m-auto max-w-[1500px] min-h-[500px]">

<div className="flex flex-col">

{

state.countBuscket.value.length?
functionCountBuscket().map((elem:IBackendObject)=>

   <ProductInBuscket  product={elem} />
   )
   :
   <ProductError/>


}
</div>
</div>

   </>

        
    )
}