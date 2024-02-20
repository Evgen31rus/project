import React, { useState, useRef } from "react";
import '../index.css'
import IBackendObject from "../modle";
import { useSelector, useDispatch } from "react-redux";
import { HandleAddProduct , HandleRemoveProduct} from "../store/sliceCountBuscet";
import { RootState } from "../store/store";

type PropTypes ={
    product:IBackendObject
        }

       
export default function ProductInBuscket({product}:PropTypes){

    let state = useSelector((state:RootState) => state)
    const [count, setCount ] = useState<number>(1)
    const  [show, setShow ] = useState(true)
    const nodeRef = useRef<HTMLDivElement>(null)


    const dispatch = useDispatch()



return(
    <>




<div  ref={nodeRef} className="flex 
sm:flex-col
" 

>
    {
        product.info&&product.name&&product.photo?

<div  className="flex max-w-[1200px] min-h-[250px] items-center rounded border-[2px] border-cyan-300 pl-2 mb-5 relative ml-2
sm:flex-col sm:max-h-[520px] sm:w-[60%] sm:m-auto sm:mb-5 sm:items-center
"
id={`box-shadow`}
>
<button className={`hidden icon  relative button-gradient w-[90%] ml-1 justify-center h-[40px] border-[2px]  rounded z-20 p-4 top-[1%] right-[1%] bg-violet-600 items-center text-white
sm:flex 
`}
onClick={()=>{
    dispatch(HandleRemoveProduct(product.id))
}}
id={`button-gradient`}>
убрать из корзины
</button>

<svg
className=" absolute top-[-11%] right-[-3%] cursor-pointer 
sm:hidden
"
onClick={()=>{
    dispatch(HandleRemoveProduct(product.id))
}}
  xmlns="http://www.w3.org/2000/svg"
  width="45"
  height="45"
  viewBox="0 0 24 24"
  fill="#FF1493"
  stroke="#FF1493"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>

<div className="absolute right-[5%] flex flex-col items-center bg-white rounded justify-center
sm:flex-row sm:left-[2%] sm:right-[0%]  sm:bottom-[2%] sm:w-[40%]
"
id={`box-shadow`}
>
<button 
onClick={()=>{

if(count>=99){
    setCount(99)
}else{
    setCount(count+1)
}
}}
className="icon w-[50px] h-[30px] border-[2px] rounded relative text-white bg-[#2e3646] hover:bg-violet-600 
sm:h-[33px] 
"> + </button>
<p className={` flex
sm:h-[100%] min-w-[30%] sm:w-[60%] sm:justify-center
`}>{count}<span className={`flex sm:ml-1 `}>шт.</span></p>
<button 
onClick={()=>{
    if(count<=1){
        setCount(1)
    }
    else{
    setCount(count-1)
    }
}}
className="icon w-[50px] h-[30px] border-[2px] rounded relative text-white bg-[#2e3646] hover:bg-violet-600
sm:h-[33px]
"> - </button>
</div>

<div className=" absolute bottom-[-10%] right-[0%]  rounded text-center flex  justify-center bg-green  border-[2px] shadow-inner
sm: bottom-[2%] sm:right-[2%] sm:w-[45%]
"
id={`box-shadow`}
>
<button className=" icon relative w-[100px] h-[30px]  text-center flex  justify-center bg-violet-600 border-r-[2px]  ">купить</button>
<span className="w-[100px] h-[30px]  text-center flex flex justify-center bg-white ">{product.price * count} <span className=" right-[1%] ml-1">$</span></span>
</div>

    <div className="relative w-[250px] h-[200px] rounded border-[2px] border-cyan-300 bg-cover bg-center z-20"
    style={{
        backgroundImage: `url('${product.photo}')`
    }}
    >

<img src={product.photo} alt={product.name} className={`w-[0px] h-[0px]`}/>
</div>

<div className="pl-5 flex w-[55%] justify-between bg-white h-[80%] rounded ml-2
sm:w-[90%] sm:h-[40%] sm:p-1 sm:mt-2
"
>

<div className="flex-col bg-white overflow-hidden ml-2 pb-2
sm:w-[100%] sm:p-0 
" 
id={`scroll-element`}>

<p className="sm:text-center">{product.category}</p>
<h1 className="sm:text-center">{product.name}</h1>

<p className="fle w-[99%] h-[60%] z-10  text-wrap overflow-y-scroll
sm:w-[100%] 
"
id={`scroll-element`}
>{product.info}</p>
</div>


</div>



</div>

:
<div  className="flex w-[800px] h-[250px] items-center rounded border-[2px] border-cyan-300 pl-2 mb-5 relative ml-2
sm:flex-col sm:max-h-[520px] sm:w-[60%] sm:m-auto sm:mb-5 sm:items-center
"
id={`box-shadow`}
>
<div className="spin-wrapper">
<div className="spinner">
</div>
</div>
</div>
}
</div>



</>
        
    )
}