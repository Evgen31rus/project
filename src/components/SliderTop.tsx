import React from "react";
import { useState, useEffect, useRef } from "react";
import IBackendObject from "../modle";
import ProductCard from "./ProductCard/ProductCard";


type PropTypes ={
    products:IBackendObject[];

        }
        

 const SliderTop =({products}:PropTypes)=>{
    
    let [TranslateData, setTranslateData] = useState(0)
    const SliderLine = useRef<HTMLDivElement>(null)



return( 
    <div className="flex relative overflow-hidden rounded w-[90%] h-[350px]  translate-y-[80px] mb-10 m-auto  text-white 
    sm:overflow-x-scroll
    ">
<div className={`flex absolute z-10 bottom-[3%] left-[10%] w-[30%] justify-between`}>
<span className="border-b-2 w-[50px] text-center cursor-pointer z-20 text-5xl sm:hidden" >1</span>
<span className="opacity-[50%] text-4xl sm:hidden">2</span>
<span className="opacity-[50%] text-4xl sm:hidden">3</span>
</div>
<div className="flex absolute max-w-[5000px] h-[100%] translate-x-[x]">
    <div className={`h-[100%] max-w-[1200px] bg-black  bg-cover bg-center`}
    style={{
        backgroundImage:`url('${'https://img.freepik.com/free-vector/abstract-pixel-background-in-black-and-white_1017-38030.jpg?w=1800&t=st=1708257546~exp=1708258146~hmac=5eb2cdb8b8690f17160976d38464cf715c6a207e5bdbfbec5cafbb434f16b5cf'})`
    }}
    ></div>
    <div className={`h-[100%] max-w-[1200px] bg-black  bg-cover bg-center`}
    style={{
        backgroundImage:`url('${'https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg?w=1380&t=st=1708257703~exp=1708258303~hmac=c6d8d2657a2a03408b8dd1f80b31384fdd321b009147363a36a35aef6efd57a8'})`
    }}
    ></div>
   <div className={`h-[100%] max-w-[1200px] bg-black  bg-cover bg-center`}
    style={{
        backgroundImage:`url('${'https://img.freepik.com/free-photo/ai-digital-transformation-background-in-blue-with-robotic-hands-remixed-media_53876-108540.jpg?w=1380&t=st=1708257830~exp=1708258430~hmac=8a1397ad8e801e1aa4444b413598456c76019e3536542cd8eb0183df0c4ba48c'})`
    }}
    >
    </div>
    </div>
    </div>
)
}
export default SliderTop