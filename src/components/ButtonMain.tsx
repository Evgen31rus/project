import React from "react"
import { PropTypes } from "@mui/material"
import { useState } from "react"
import IBackendObject from "../modle"
import { useDispatch } from "react-redux"

type PropTypes = {
width?:Number,
TextNotActive: string,
TextActive?: string,
handleAdd?:any,
handleRemove?: any,
hedleAny?:any,
dateParents?:IBackendObject|undefined
isClickProps?:boolean,
color?:string,
bg?:string
}

export default function ButtonMain({width,TextActive, TextNotActive, handleAdd, handleRemove, dateParents, hedleAny, isClickProps, color, bg}:PropTypes, ){
    const [isClick, setIsClick]= useState(false)

    const HandleIsClick = ()=>{
        setIsClick(!isClick)
    }
    const dispatch = useDispatch()

    return(
<>
<div className={` w-[${width}%] border-[2px] rounded border-pink-500 p-[2px] m-2 z-10 hover:scale-110 `}>
    <button 
onClick={()=>{
    HandleIsClick()
if(handleAdd&&handleRemove&&dateParents!==undefined){
    !isClick&&handleAdd&&handleRemove? dispatch(handleAdd(dateParents)):dispatch(handleRemove(dateParents?.id))
}if(hedleAny!==undefined){
    !isClick&&handleAdd&&handleRemove? hedleAny() : hedleAny()
}

}}
    className={` icon relative w-[100%] text-${color}   opacity-100 flex  border-[2px] rounded border-cyan-300    justify-center   p-2   ease-in transition duration-300 ease-in-out  
    ${isClickProps&&isClick? 'button-gradient' : 'button-gradient'}
    sm:max-w-[${width}%] sm:text-xs
    `} 
             id={`button-gradient`}
               >
            {
           TextActive!==undefined?
            isClick? TextActive : TextNotActive
            :
            TextNotActive
            } 
    </button> 
    </div>
</>
    )
}