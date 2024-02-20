import React, {MouseEvent, useRef, RefObject, useState, useEffect} from "react";
import IBackendObject from "../modle";
import Slider from "../components/slider";
import { useDispatch, useSelector } from "react-redux";
import { RootState , } from '../store/store';
import { HandleswitchRight, HandleswitchLeft } from "../store/sliceSlider";
import SliderTop from "../components/SliderTop";
import backend from "../backend";


type PropTypes ={
    product:IBackendObject[]
        }


export default function MainPages({product}:PropTypes){
    let [margin, setMargin] = useState(0)
    let dispatch = useDispatch()
    let wrapperSlider = useRef() as RefObject<HTMLDivElement> | null
    let state = useSelector((state:RootState)=>state.switchSlider)
    
    const HandleSwitchLeft = ()=>{
        setMargin(margin+=100)
    }
    const HandleSwitchRight =()=>{
        setMargin(margin-=100)
    }
 

return(
   <>
{/* <div className="max-w-[1200px] justify-center m-auto">
<SliderTop products={product}/>
</div> */}
<div className="flex  w-[85%] pt-20 justify-center translate-x-[10%]">

<div className=" flex flex-col items-center mr-2">

    <div className=""></div>

    <div 
    className=" w-[250px] h-[150px] mb-2  rounded relative overflow-hidden"
     id={`box-shadow`}
     >

    <div className="icon w-[100%] h-[100%]  bg-hero-pattern bg-cover ease-in transition duration-300 ease-in-out hover:scale-110">
    <div className="w-[100%] h-[100%] bg-black opacity-[40%] absolute z-20"></div>
    <h1 className="text-white text-center pt-2 ">Товары для геймеров</h1>

    <div className="flex w-[100%] justify-around ">
    <button className="icon w-[40%] flex absolute flex z-50  p-2  text-white border-[2px]   rounded border-cyan-300 outline outline-offset-2 outline-pink-500  hover:bg-violet-600 ease-in transition duration-300 ease-in-out hover:text-black">  подробнее</button>
    <button className="icon w-[40%] flex absolute flex z-50  p-2  text-white border-[2px]   rounded border-cyan-300 outline outline-offset-2 outline-pink-500  hover:bg-violet-600 ease-in transition duration-300 ease-in-out hover:text-black">  подробнее</button>
    </div>

    </div>
    </div>
  
  
    <div 
    className=" w-[250px] h-[150px] mb-2  rounded relative overflow-hidden  "
    id={`box-shadow`}
    >
    <div className="icon w-[100%] h-[100%]  bg-footer-texture bg-cover ease-in transition duration-300 ease-in-out hover:scale-110">
    <div className="w-[100%] h-[100%] bg-black opacity-[40%] absolute z-20"></div>

    <button className="icon absolute flex z-50  p-2  text-white border-[2px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded border-cyan-300 outline outline-offset-2 outline-pink-500  hover:bg-violet-600 ease-in transition duration-300 ease-in-out hover:text-black">  подробнее</button>

    
    </div>
    </div>

    
    <div 
    className=" w-[250px] h-[150px] mb-2  rounded relative overflow-hidden  "
    id={`box-shadow`}
    >
    <div className="icon w-[100%] h-[100%]  bg-foo bg-cover ease-in transition duration-300 ease-in-out hover:scale-110">
    <div className="w-[100%] h-[100%] bg-black opacity-[40%] absolute z-20"></div>
    <button className="icon absolute flex z-50  p-2  text-white border-[2px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded border-cyan-300 outline outline-offset-2 outline-pink-500  hover:bg-violet-600 ease-in transition duration-300 ease-in-out hover:text-black">  подробнее</button>
    </div>
    </div>




</div>

<div 
className="overflow-hidden w-[300px] h-[465px]"
id={`box-shadow`}
>

<div className="icon bg-foot bg-cover w-[100%] h-[100%] z-10 rounded relative ease-in transition duration-300 ease-in-out hover:scale-110">
    <div className="w-[100%] h-[100%] bg-black opacity-[40%] absolute "></div>

</div>
</div>





</div>






<div className="flex  items-center flex-col max-w-[2000px] m-auto">
<h2 className="flex text-center h-[80px] items-center text-5xl"> Успейте купить!</h2>



<Slider products={backend}/>

</div>


   </>

        
    )
}