import React, { ChangeEvent, MouseEvent, useRef, useState , RefObject, useEffect} from "react";
// import backend from "../backend";
import {  useSelector, useDispatch,  } from 'react-redux'
import { RootState } from '../store/store';
import axios from "axios";
import { HandleInputMinDate, HandleInputMaxDate} from "../store/SliceFilter";
import { HandleSetResultFetch } from "../store/sliceRequest";
import IBackendObject from "../modle";
import ButtonMain from "./ButtonMain";
import { HandleOpenModal } from "../store/SliceModalFilter";



export default function HelpZone(){
  let state = useSelector((state:RootState)=>state)
  let arrayPrice = ()=>state.resultFetch.inishialValue?state.resultFetch.inishialValue.map(el => el.price):[0,0]
  let stateMax =  Math.max(...arrayPrice())
  let stateMin =  Math.min(...arrayPrice())

   const [value, setValue] = useState<string>('');
   const [isOpen, setIsOpen] = useState(false)
   const [searchMaxPrice, setSearchMaxPrice ] = useState<number>(stateMax)
   const [searchMinPrice, setSearchMinPrice ] = useState<number>(stateMin)
    let dispatch = useDispatch()
    let stateNow = useSelector((state:RootState) => state.resultFetch.value)
    let inputSearch = useRef() as RefObject<HTMLInputElement> 
    let ulRef = useRef() as RefObject<HTMLUListElement> | null
    let inputMin = useRef() as RefObject<HTMLInputElement> | null; 
    let inputMax = useRef() as RefObject<HTMLInputElement> | null; 

    const apiUrl = `https://evgen31rus.github.io/server-platnik-shop/server.json`;






const arrStateNow = ()=> stateNow? stateNow : []
const search = [ ...arrStateNow() ]
search.filter(category => category.toString().trim() === value.toLowerCase().trim())

useEffect(()=>{
  axios.get(apiUrl).then((resp) => {
    const products:IBackendObject[]|undefined = resp.data;
    const FilterFunction = (searchText:string, array:IBackendObject[]|undefined, minPrice:number, maxPrice:number )=>{
      dispatch(HandleSetResultFetch(array!==undefined&&array.length? array.filter(el=> el.category.toLowerCase().trim().includes(searchText.toLocaleLowerCase().trim())&&el.price>=minPrice&&el.price<=maxPrice||el.name.toLowerCase().trim().includes(searchText.toLocaleLowerCase().trim())&&el.price>=minPrice&&el.price<=maxPrice||el.name.toLowerCase().trim().includes(searchText.toLocaleLowerCase().trim())&&el.price>=minPrice&&el.price<=maxPrice): '' ))
    }
    FilterFunction(value, products,searchMinPrice, searchMaxPrice )
    console.log(products)
  })

},[  value, searchMinPrice, searchMaxPrice])



return(

<div>
    <div className="flex-wrap flex justify-around max-w-[1500px] h-[200px] items-center m-aut relative m-auto
    "

    >
      <div className='flex w-[50%] h-[50px]  items-center  border-[2px] rounded border-cyan-300  
        sm:mt-[100px] sm:w-[80%]'>
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
</svg>

<input 
ref={inputSearch}
value = {value}
placeholder="Поиск товара..."
onChange={(e:ChangeEvent<HTMLInputElement>)=>{
  setIsOpen(true)
  setValue(e.currentTarget.value)
  if(!e.currentTarget.value){
    setIsOpen(false)
  }
}
 }
type="search" name="" 
className='w-[100%] h-[40px] ml-1 mr-2 pl-9 rounded outline-0 z-20 cursor-pointer relative shadow-lg drop-shadow-xl
' />

<div className={`
 ${ !ulRef?.current?.children.length||!isOpen?
  'opacity-0 hidden':
  'opacity-100'}
  absolute transition-all rounded bg-white max-h-[200px]  ml-[-1.5px] pt-2 pb-2 overflow-y-scroll box-border z-20 `}
   style={{
    width: `${inputSearch.current?.offsetHeight? inputSearch.current?.offsetWidth+2 : undefined}px`,
    marginTop: `${inputSearch.current?.offsetHeight? inputSearch.current?.offsetHeight-6 : undefined}px`
  }}
  id={`scroll-element`}
>
  <ul 
  ref={ ulRef}
 
  >

{
search.map(el=>

<li 
onClick={(e:MouseEvent<HTMLLIElement>)=> {
  setValue(el.name)
  setIsOpen(false)
}
}
className=" flex justify-between pt-2 pr-6 pl-6 cursor-pointer hover:bg-[#e5dee6] hover:shadow-lg sm:text-xs ">
<span className="flex w-[60%] sm:w-[80%]">{el.name}</span><span className="flex w-[20%] sm:hidden">{el.category}</span> <img src={el.photo} alt="" className={`flex w-[20%] rounded w-[35px] h-[30px] `}/>
</li>
)}


</ul>

</div>

</div>

</div>
<div className="cursor-pointer hover:scale-150 z-20 sm:hidden "
onClick={()=>dispatch(HandleOpenModal())}
>
<svg version="1.1" id="Layer_1"width={'30'} fill={`${state.switchTeamSlice.nightTeam? '': '#ffffff'}`}xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.23 122.88" ><style type="text/css"></style><g><path  d="M122.23,12.35v10.54c0,1.29-1.21,2.35-2.69,2.35H77.85c-2.84,5.92-8.89,10.01-15.9,10.01 c-7,0-13.05-4.09-15.89-10.01H2.69C1.22,25.24,0,24.18,0,22.89V12.35C0,11.06,1.21,10,2.69,10h43.37c2.84-5.92,8.89-10,15.89-10 c7,0,13.05,4.09,15.89,10h41.69C121.02,10,122.23,11.06,122.23,12.35L122.23,12.35L122.23,12.35z M49.57,112.88 c-2.84,5.92-8.89,10-15.9,10c-7,0-13.05-4.08-15.89-10l-15.09,0c-1.48,0-2.69-1.06-2.69-2.35V99.99c0-1.29,1.21-2.35,2.69-2.35 l15.09,0c2.84-5.92,8.89-10.01,15.89-10.01c7,0,13.05,4.09,15.89,10.01h69.97c1.48,0,2.69,1.06,2.69,2.35v10.54 c0,1.29-1.22,2.35-2.69,2.35L49.57,112.88L49.57,112.88z M104.12,69.73c-2.84,5.92-8.89,10.01-15.89,10.01 c-7,0-13.05-4.09-15.9-10.01H2.69C1.22,69.73,0,68.67,0,67.38V56.85c0-1.29,1.21-2.35,2.69-2.35h69.64c2.84-5.92,8.89-10,15.89-10 c7,0,13.05,4.09,15.89,10h15.42c1.48,0,2.69,1.06,2.69,2.35v10.53c0,1.29-1.21,2.35-2.69,2.35H104.12L104.12,69.73z"/></g></svg>
</div>

<div className="flex z-10 items-center text-2xl
sm:hidden
"
id={`text-shadow`}
>
<span className="pr-2">от</span>

<input 
ref={inputMin}
value={searchMinPrice}
placeholder={stateMin.toString()}
onChange={(e: ChangeEvent<HTMLInputElement>)=>{
  if(!isNaN(Number(e.currentTarget.value))){
    setSearchMinPrice(Number(e.currentTarget.value))
  }
    if(Number(e.currentTarget.value)<0){
      setSearchMinPrice(searchMinPrice)
    }
    if(Number(e.currentTarget.value)>=stateMax){
      setSearchMinPrice(stateMax)
    }
        
}}
type="text" name="" 
id={`box-shadow`} 
className="w-[100px] h-[40px] pl-8  rounded " 
/>


<span className="pl-2 pr-2 ml-4">до</span>

<input 
ref={inputMax}
value={searchMaxPrice}
placeholder={stateMax.toString()}
onChange={(e: ChangeEvent<HTMLInputElement>)=>{
  if(!isNaN(Number(e.currentTarget.value))){
    setSearchMaxPrice(Number(e.currentTarget.value))
  }
    if(Number(e.currentTarget.value)<0){
      setSearchMaxPrice(searchMinPrice)
    }
    if(Number(e.currentTarget.value)>=stateMax){
      setSearchMaxPrice(stateMax)
    }
    
}}
type="text" name="" 
id={`box-shadow`}
className="w-[100px] h-[40px] pl-8  rounded " />
</div>

  </div>

    </div>

)
}