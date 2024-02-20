import React, {MouseEvent , useRef, RefObject, useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {HabdleDisOpenModal } from "../store/SliceModalFilter";
import { RootState , } from '../store/store';
import backend from "../backend";






export default function ModalFilter(){
    let inputMin = useRef() as RefObject<HTMLInputElement> | null; 
    let inputMax = useRef() as RefObject<HTMLInputElement> | null; 
    let dispatch = useDispatch()
let state = useSelector((state:RootState)=>state.counter.value)
let stateMin =  useSelector((state:RootState)=>state.switchFilterPrice.price.minPrice)
let stateMax =  useSelector((state:RootState)=>state.switchFilterPrice.price.maxPrice)


const [isClick, setIsClick] = useState<boolean>(false)
const [isSale, setIsSale]= useState<boolean>(false)







    return(
        <>
        <div className={`w-[100%] h-svh bg-black ${state?'z-50' :'z-0 '} ${!state?'opacity-0' :'opacity-50 '} transition duration-500 fixed `}>
        </div>
        <div className={` ${state? 'translate-y-[0%]':'translate-y-[150%]' } ${state? 'translate-x-[0%]':'translate-x-[-150%]' }  transition-transform top-[15%] right-[35%]  w-[40%] h-[70%] bg-[#332c38] fixed z-50 opacity-100  border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 `} >


 <svg 
 onClick={()=>dispatch(HabdleDisOpenModal())}
 className="absolute md:rotate-45 top-[-5%] right-[-5%] cursor-pointer transition duration-500 hover:rotate-180" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
<path d="M30 4H18V18H4V30H18V44H30V30H44V18H30V4Z" fill="#332c38" stroke="#67e8f9" stroke-width="2" stroke-linejoin="round"/>
</svg>

<h2 className="text-center "> Фильтр </h2>

<div className="pt-2 w-[100%] text-center">
  
</div>

<div className="pt-2 w-[100%] text-center">
    <span>Категория</span>
<div className="flex flex-wrap justify-center items-center">
    <div 
    onClick={(e:MouseEvent<HTMLDivElement>)=>{
        setIsClick(!isClick)
    }}
    className={` 
    ${isClick?
    ''
:
    ''}
    border-[2px] cursor-pointer rounded border-cyan-300 outline outline-offset-2 outline-pink-500 w-[20%] min-h-[35px]  mt-3 mr-3 text-center ease-in transition duration-300 ease-in-out hover:bg-violet-600 hover:tran hover:scale-110`}> 
    Видеокарты </div>
</div>
</div>

<div className="pt-2 w-[100%] text-center">
    <span>Скидка</span>
<div className="flex flex-wrap justify-center">
    <div 
    onClick={()=>setIsSale(!isSale)}
    className={`
    ${isSale?
        'bg-violet-600'
    :
        ''}
     w-[100%] text-center
    border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 w-[20%] min-h-[35px]  mt-3 mr-3 text-center ease-in transition duration-300 ease-in-out hover:bg-violet-600 tran hover:scale-110`}> Есть скидка </div>
    <div 
        onClick={()=>setIsSale(!isSale)}
    className={`${!isSale?
        'bg-violet-600'
    :
        ''}
     w-[100%] text-center
    border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 w-[20%] min-h-[35px]  mt-3 mr-3 text-center ease-in transition duration-300 ease-in-out hover:bg-violet-600 tran hover:scale-110`}> Без скидки </div>
</div>
</div>

<button className='icon flex m-auto border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 w-4/12 justify-center mt-5  p-2 z-20  ease-in transition duration-300 ease-in-out hover:bg-violet-600 tran hover:scale-110 '>Применить</button>
        </div>
        </>
    )
}