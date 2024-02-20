import React from "react";
import { useState, useEffect, useRef } from "react";
import IBackendObject from "../modle";
import ProductCard from "./ProductCard";


type PropTypes ={
    products:IBackendObject[];

        }
        

 const Slider =({products}:PropTypes)=>{
    
    let [TranslateData, setTranslateData] = useState(0)
    const SliderLine = useRef<HTMLDivElement>(null)



    useEffect(()=>{
   console.log(SliderLine.current?.offsetWidth)
    }, [])


return(
    <>
<div className="flex  w-[80%] tems-center justify-center relative ">

<svg  
onClick={()=>{
    setTranslateData(TranslateData+=800)
}
}
className={`
${TranslateData>=0? 'hidden': 'visible'} 
absolute cursor-pointer  translate-y-[80%] left-[-10%] transform scale-50 z-50 hover:fill-white
sm:hidden
`} ><path d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"/></svg>

<svg 
onClick={()=>{
setTranslateData(TranslateData-=800)
console.log(TranslateData)
console.log(Math.abs(TranslateData))
}
}
className={`
${Number(SliderLine.current?.offsetWidth)<=Math.abs(TranslateData-1150)? 'hidden':''}
 absolute cursor-pointer translate-y-[70%] right-[-10%] transform scale-50 rotate-180 z-50 hover:fill-white
sm:hidden
`} ><path d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"/></svg>




</div>

    <div className={`flex w-[60%]  overflow-x-hidden p-5
    sm:overflow-x-scroll sm:w-[100%]
    `} >
<div 
ref={SliderLine}
style={{
transform:`translateX(${TranslateData}px)`,
transition:'transform(translateX)'
,
}}
className={`   flex transition duration-500 ease-in-out `}>
{
products.filter((element:IBackendObject) =>
    element.saleStatus
).map(element=>
<ProductCard  product={element}/>
)
}
</div>

</div>
    </>
)
}
export default Slider