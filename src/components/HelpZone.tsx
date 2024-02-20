import React, { ChangeEvent, MouseEvent, useRef, useState , RefObject, useEffect} from "react";
import backend from "../backend";
import {  useSelector, useDispatch,  } from 'react-redux'
import { RootState } from '../store/store';
import { HandleOpenModal } from '../store/SliceModalFilter'
import { HandleInputMinDate, HandleInputMaxDate, HandleInputSearch } from "../store/SliceFilter";



export default function HelpZone(){
   const [value, setValue] = useState<string>('');
   const [isOpen, setIsOpen] = useState(false)
    let dispatch = useDispatch()
    let state = useSelector((state:RootState) => state)
    let inputSearch = useRef() as RefObject<HTMLInputElement> 
    let ulRef = useRef() as RefObject<HTMLUListElement> | null
    let inputMin = useRef() as RefObject<HTMLInputElement> | null; 
    let inputMax = useRef() as RefObject<HTMLInputElement> | null; 


let stateMin =  useSelector((state:RootState)=>state.switchFilterPrice.price.minPrice)
let stateMax =  useSelector((state:RootState)=>state.switchFilterPrice.price.maxPrice)


const ProducName = backend.map(el=> el.name)


let productCategory = ()=>{
  let arr:string[]=[]

  backend.map(el=>{
  arr.push(el.category)

  if(arr.filter(elem=>elem.toLowerCase().trim()===el.category.toLowerCase().trim()).length>1){
arr.pop()
  }
})
return arr
}
let productSearch = [...ProducName, ...productCategory(),]




return(

<div>
    <div className="flex-wrap flex justify-around max-w-[1500px] h-[200px] items-center m-auto
    max-sm:hidden"

    >
      <div className='flex w-[50%] h-[50px]  items-center  border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 
          max-sm:mt-10      '>
<div className="flex w-[100%] z-20 p-2 relative box-border justify-center"
 id={`box-shadow`}
>

<svg 
className={`${!value? '':'hidden' }  absolute w-[18px] h-[18px] z-40 m-3 left-[5px]`}
version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 width="611.997px" height="611.997px" viewBox="0 0 611.997 611.997" 
>
<g>
	<path d="M558.675,601.59L558.675,601.59c-8.438,0-15.965-2.785-21.81-7.969L360.263,435.989
		c-38.188,25.395-82.221,38.768-128.074,38.768C104.142,474.784,0,370.586,0,242.567S104.142,10.407,232.188,10.407
		s232.188,104.142,232.188,232.161c0,44.254-12.49,86.937-36.203,124.214l173.184,154.572c15.661,14.061,13.841,40.889-4.191,61.156
		C586.468,594.475,572.075,601.59,558.675,601.59z M361.311,404.667c3.281,0,6.562,1.186,9.182,3.502l184.736,164.883
		c0.882,0.773,2.371,0.965,3.446,0.965l0,0c4.163,0,11.388-2.619,17.895-9.871c8.603-9.65,9.017-19.879,6.369-22.25L400.822,379.327
		c-5.239-4.688-6.121-12.572-2.041-18.279c24.871-34.908,38.022-75.88,38.022-118.507c0-112.827-91.788-204.588-204.615-204.588
		S27.573,129.741,27.573,242.567c0,112.855,91.789,204.644,204.616,204.644c43.647,0,85.475-13.787,120.961-39.871
		C355.575,405.549,358.443,404.667,361.311,404.667z M232.188,408.967c-91.762,0-166.4-74.639-166.4-166.4s74.639-166.4,166.4-166.4
		c91.761,0,166.4,74.639,166.4,166.4S323.949,408.967,232.188,408.967z M232.188,103.74c-76.542,0-138.828,62.286-138.828,138.828
		c0,76.541,62.286,138.828,138.828,138.828c76.541,0,138.827-62.287,138.827-138.828C371.016,166.026,308.729,103.74,232.188,103.74
		z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

<input 
ref={inputSearch}
value = {value}
placeholder="Поиск товара..."
onChange={(e:ChangeEvent<HTMLInputElement>)=>{
  !e.currentTarget.value.split('').length?
  setIsOpen(false)
  :
  setIsOpen(true)
  setValue(e.currentTarget.value)
  dispatch(HandleInputSearch(value))
  dispatch(HandleInputMaxDate(state.switchFilterPrice.price.maxPrice))
  dispatch(HandleInputMinDate(state.switchFilterPrice.price.minPrice))
}}
   
type="search" name="" 
className='w-[100%] h-[40px] ml-1 mr-2 pl-9 rounded outline-0 z-20 cursor-pointer relative shadow-lg drop-shadow-xl
' />

<div className={`
 ${ !ulRef?.current?.children.length||!isOpen?
  'opacity-0 hidden':
  'opacity-100'}
  absolute w-[95%] transition-all rounded bg-white max-h-[200px]  mt-8   pt-2 pb-2 overflow-y-scroll box-border z-20 shadow-lg`}

id='scroll-element'>
  <ul 
  ref={ ulRef}
  className="w-[100%]">
{

productSearch.filter(el=>ProducName[el.toLowerCase().trim().search(value)]).map(el=>
  backend.filter(elem=> elem.name===el||elem.category===el).map(element => 
<li 
onClick={(e:MouseEvent<HTMLLIElement>)=>{
setIsOpen(false)
setValue(e.currentTarget.innerText)
}
}
className=" flex justify-between pt-2 pr-6 pl-6 cursor-pointer hover:bg-[#e5dee6] hover:shadow-lg ">
  
  <span className="flex">{el}</span> <img src={element.photo} alt="" className={`${el.toLowerCase().trim()==element.category.toLowerCase().trim()? 'hidden': 'visible'} rounded w-[35px] h-[30px]`}/>
  </li>
))
}
</ul>

</div>

</div>

</div>

<div className="flex z-10 items-center text-2xl"
id={`text-shadow`}
>
<span className="pr-2">от</span>

<input 
ref={inputMin}
placeholder={stateMin.toString()}
onChange={(e: ChangeEvent<HTMLInputElement>)=>{
  const regEx = /[^\d\+]/g;

    if(Number(e.currentTarget.value.replace(regEx, ''))<0){
        e.currentTarget.value='0'
    }
    if(Number(e.currentTarget.value)>stateMax){
        e.currentTarget.value = stateMax.toString().replace(regEx, '')
    }
    else{
        dispatch(HandleInputMinDate(Number(e.currentTarget.value.replace(regEx, ''))))
        
    }
        
        
}}
type="text" name="" 
id={`box-shadow`} 
className="w-[100px] h-[40px] pl-8  rounded " 
/>


<span className="pl-2 pr-2 ml-4">до</span>

<input 
ref={inputMax}
placeholder={stateMax.toString()}
onChange={(e: ChangeEvent<HTMLInputElement>)=>{
  const regEx = /[^\d\+]/g;
    if(Number(e.currentTarget.value.replace(regEx, ''))<0){
        e.currentTarget.value='0'
    }
    if(Number(e.currentTarget.value.replace(regEx, ''))>Math.max(...backend.map(el => el.price))){
        e.currentTarget.value =  Math.max(...backend.map(el => el.price)).toString().replace(regEx, '')
    }else{
        dispatch(HandleInputMaxDate(Number(e.currentTarget.value.replace(regEx, ''))))
       
    }
    
    
}}
type="text" name="" 
id={`box-shadow`}
className="w-[100px] h-[40px] pl-8  rounded " />
</div>

  </div>
  <div className="flex w-[90%] m-auto flex-wrap justify-center items-center mb-8 text-white ">
  <div className="
  icon
  z-10 border-[2px] cursor-pointer rounded border-cyan-300 outline outline-offset-2 outline-pink-500 min-w-[100px] max-w-[150px] min-h-[35px]  mt-3 mr-3 p-2 text-center ease-in transition duration-300 ease-in-out hover:bg-violet-600 hover:tran hover:scale-110"
  id={`button-gradient`}
  > 
    Всё</div>
    {
  productCategory().map(el=>
    <div className="
    icon
    z-10 border-[2px] cursor-pointer rounded border-cyan-300 outline outline-offset-2 outline-pink-500 min-w-[100px] max-w-[200px] min-h-[35px]  mt-3 mr-3 p-2 text-center ease-in transition duration-300 ease-in-out hover:bg-violet-600 hover:tran hover:scale-110"
    id={`button-gradient`}
    > 
    {el}</div>
  )
}
    </div>
    </div>

)
}