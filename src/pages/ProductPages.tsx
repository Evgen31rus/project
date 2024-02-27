
import IBackendObject from "../modle";
import ProductCard from "../components/ProductCard/ProductCard";
import HelpZone from "../components/HelpZone";
import ProductError from '../components/ProductCard/ProductError';
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";






type PropTypes ={
    product:IBackendObject[]|undefined
        }


export default function ProductPages({product}:PropTypes){
   const state = useSelector((state:RootState) => state.resultFetch.value)
   const[showElement, setShowElement] = useState(false)
  

   useEffect(()=>{
      const HandleShowElement =() => product&&!product.length? setShowElement(!showElement):null
      HandleShowElement()
   }, [state])

return(
   <>
<HelpZone/>

   <div className='relative flex flex-wrap max-w-[1500px] min-h-[300px] justify-center m-auto'>
{
   
}

{
product&&product.length?
product.map(element=>
<CSSTransition in={showElement} timeout={200} classNames={`alert`} >
<ProductCard product={element} /> 
</CSSTransition>
)
:
<CSSTransition in={showElement} timeout={200} classNames={`alert`} >
<ProductError/>
</CSSTransition>
} 



</div>

   </>

        
    )
}