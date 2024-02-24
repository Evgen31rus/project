import React from "react"
import { PropTypes } from "@mui/material"
import { useState } from "react"
import IBackendObject from "../modle"
import { useDispatch } from "react-redux"

type PropTypes = {
width:Number,
TextNotActive: string,
TextActive?: string,
handleAdd?:any,
handleRemove?: any,
hedleAny?:any,
dateParents?:IBackendObject|undefined
}

export default function ButtonMain({width,TextActive, TextNotActive, handleAdd, handleRemove, dateParents, hedleAny}:PropTypes, ){
    const [isClick, setIsClick]= useState(false)

    const HandleIsClick = ()=>{
        setIsClick(!isClick)
    }
    const dispatch = useDispatch()

    return(
<>
    <button 
onClick={()=>{
    HandleIsClick()
if(handleAdd&&handleRemove&&dateParents!==undefined){
    !isClick&&handleAdd&&handleRemove? dispatch(handleAdd(dateParents)):dispatch(handleRemove(dateParents?.id))
}if(hedleAny!==undefined){
    !isClick&&handleAdd&&handleRemove? hedleAny() : hedleAny()
}

}}
    className={`w-[${width}%] icon flex m-auto border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500   justify-center mt-2 mb-2 p-2 z-20  ease-in transition duration-300 ease-in-out  hover:scale-110  `} 
             id={`button-gradient`}
               >
            {
           TextActive!==undefined?
            isClick? TextActive : TextNotActive
            :
            TextNotActive
            } 
    </button> 
</>
    )
}