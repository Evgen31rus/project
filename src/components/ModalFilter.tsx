import React, {MouseEvent , useRef, RefObject, useEffect, useState, Component} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {HabdleDisOpenModal } from "../store/SliceModalFilter";
import { RootState , } from '../store/store';
import backend from "../backend";
import ButtonMain from "./ButtonMain";


type PropTypes ={
    buttonCategory?: React.ReactNode
    buttonСonfirmation?:React.ReactNode
}




export default function ModalFilter({buttonCategory, buttonСonfirmation}:PropTypes){
    let inputMin = useRef() as RefObject<HTMLInputElement> | null; 
    let inputMax = useRef() as RefObject<HTMLInputElement> | null; 
    let dispatch = useDispatch()
let state = useSelector((state:RootState)=>state)
let stateMin =  useSelector((state:RootState)=>state.switchFilterPrice.price.minPrice)
let stateMax =  useSelector((state:RootState)=>state.switchFilterPrice.price.maxPrice)


const [isClick, setIsClick] = useState<boolean>(false)
const [isSale, setIsSale]= useState<boolean>(false)



    return(
        <>
        <div className={`w-[100%] h-svh bg-black ${state.counter.value?'z-50' :'z-0 '} ${!state.counter.value?'opacity-0' :'opacity-50 '} transition duration-500 fixed `}>
        </div>
        <div className={`flex flex-col justify-around ${state.counter.value? 'translate-y-[0%]':'translate-y-[150%]' } ${state.counter.value? 'translate-x-[0%]':'translate-x-[-150%]' }  transition-transform top-[15%] right-[35%]  w-[40%] h-[70%] bg-[#332c38] fixed z-50 opacity-100  border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 
        sm:w-[90%] sm:left-[5%] 
        `} >


 <svg 
 onClick={()=>dispatch(HabdleDisOpenModal())}
 className="absolute md:rotate-45 top-[-5%] right-[-2.9%] cursor-pointer transition duration-500 hover:scale-150 rotate-45" width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
<path d="M30 4H18V18H4V30H18V44H30V30H44V18H30V4Z" fill="#332c38" stroke="#67e8f9" stroke-width="2" stroke-linejoin="round"/>
</svg>

<div className={`sm:overflow-auto`}>
<h2 className="text-center text-3xl m-5"> Фильтр </h2>
<p className="text-center text-wrap m-2">Выберите категории товаров:</p>
<div className="pt-2 w-[100%] text-cente flex flex-wrap justify-center">
{ buttonCategory}
</div>
<div className={`flex justify-center m-5`}>{buttonСonfirmation}</div>

        </div>
        </div>
        </>
    )
}