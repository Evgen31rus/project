import React, {useState, } from "react";
import bigSale from '../img/bigSale.png'
import IBackendObject from "../modle";
import { useSelector, useDispatch } from "react-redux";
import { HandleAddProduct, HandleRemoveProduct } from "../store/sliceCountBuscet";
import { HandleAddLikes, HandleRemoveLikes } from "../store/sliceCountLikes";
import { RootState } from "../store/store";


type PropTypes ={
    product:IBackendObject
        }



export default function ProductCard({product}:PropTypes){

    const [isMouseOver ,setIsMouseOver] = useState(false)
    const[isAdd , setIsAdd]= useState(false)
    const[isLikes, setIsLickes] = useState(false)
    const [infoActive, setInfoActive] = useState(false)



    let HandleAddBuscket = ()=>{
isAdd? setIsAdd(false): setIsAdd(true)
    }

    let HandleIsOpenInfo=()=>{
        setInfoActive(!infoActive)
    }

   let HandleVisibilityInfo = ()=>{
      setIsMouseOver(!isMouseOver)
           }




           const dispatch =useDispatch()
           const state = useSelector((state:RootState)=>state)



    return(
    
<div className={ `relative w-[350px] duration-500 ease-in-out h-[400px] font-mono  `}>

  
       
            <div  

            className={`relative text-white border-[2px] border-cyan-300 outline outline-offset-2 outline-pink-500 rounded box-border min-w-60 max-w-80 h-58 block mr-5  mb-5 flex justify-center flex-col p-5 overflow-hidden transition duration-300 ease-in-out hover:scale-110 `}
            id={`box-shadow`}
            >
            <div className='w-full  h-full bg-black  absolute opacity-30 m-[-20px] flex rounded z-0 '></div>
    
   
      <div id={product.id} className={` 
   
      icon flex flex-col overflow-hidden rounded z-10 `} >
 {
 product.name&&product.category&&product.photo?
    <div className="flex justify-center overflow-hidden max-w-[300px] max-h-[45px] text-base p-3">
    {product.name}
    {product.saleStatus? <img  src={bigSale} alt='sale' className="absolute top-0 left-0 w-[57px] h-[80px]"/>   : ''}
    
    </div>
    :
    <div className="flex w-[200px] h-[30px] bg-black mb-2 rounded m-auto ">
    </div>
}      
  <div className="relative w-11/12 h-[180px] bg-black border-[2px] border-cyan-300 outline outline-offset-2 outline-pink-500 z-30 cursor-pointer transition duration-300 ease-in-out">
            {
                product.name&&product.category&&product.photo?
                            <div className="   product-front  w-[100%] h-[100%] bg-cover bg-center"
                            style={{
                                backgroundImage: `url('${product.photo}')`,
                                transform: `perspective(600px) rotateY(${infoActive?'-180':'0'}deg)`
                            }}
                            onMouseOver={HandleVisibilityInfo}
                            onMouseDown={HandleVisibilityInfo}
                            >
                            <img src={product.photo} id={product.id} alt={`${product.category} ${product.name}`} 
                            className={`
                            ${!isMouseOver?'activeBlackIcon':'NotActiveBlackIcon'}  
                            w-[0%] h-[0%]`}  

                            />
                            </div>
                            :
                <div className="flex w-[350px] bg-black mb-2 rounded">

<div className="spin-wrapper">
<div className="spinner">
</div>
</div>
                </div>
            }

            {
                product.name&&product.category&&product.photo?

                <div className={`product-back info-gradient
                bg-white text-black text-xs p-5 pt-2 w-[100%] h-[100%]
                `}
                style={{
                    transform: `perspective(600px) rotateY(${infoActive?'0':'180'}deg)`
                }}
                id={`scroll-element`}
                onClick={()=>setInfoActive(!infoActive)}
                >
                        {product.info}
                </div>
                :
                ''
            }

            <button 
      
            className={` 
            ${isMouseOver?'btnInfoActive':'btnInfoNotActive'} 
            ${infoActive?'btnInfoNotActive':'btnInfoActive'} 
            ${product.name&&product.category&&product.photo? 'flex' : 'hidden'}  
            absolute z-30  icon flex m-auto border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 w-4/11 justify-center mt-2 mb-2 p-2 z-20  ease-in transition duration-300 ease-in-out `} 
            id={`button-gradient`}
            onClick={HandleIsOpenInfo} 

            >о товаре</button>
            <button className={` 
            ${isMouseOver?'btnLikeActive':'btnLikeNotActive'}  
            ${infoActive?'btnLikeNotActive':'btnLikeActive'} 
            ${product.name&&product.category&&product.photo? 'flex' : 'hidden'}  
            absolute z-30  icon flex m-auto border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 w-4/11 justify-center mt-2 mb-2 p-2 z-20  ease-in transition duration-300 ease-in-out  `}
            id={`button-gradient`}
            onClick={()=>{
                if(!isLikes){
                    dispatch(HandleAddLikes(product))
                    setIsLickes(!isLikes)
                }else{
                    setIsLickes(!isLikes)
                    dispatch(HandleRemoveLikes(product.id))
                  
                }
          
             
            }}

            >
                {isLikes? 'Избранно':
                'Нравится'}</button>
         
       </div>
   </div>
   <div className={`info flex justify-around m-2 `} >
{
      product.name&&product.category&&product.photo?
      <h3 className="overflow-x-hidden max-w-[150px]"> {product.category}</h3> 
      :
      <div className={`flex  bg-black w-[100px] h-[25px] ml-2 rounded`}></div>
}



    {
  product.name&&product.category&&product.photo?

    <div >
      <span>Цена </span><span className={`${product.saleStatus? 'line-through text-[#665959] text-0.4' : ''}`}>{product.price} $</span>
        {
            product.sale>0? <span className=" ml-2 overflow-x-hidden ">{Number(product.price-(product.price*(product.sale/100))).toFixed(1)} $</span>:''
        }
    </div>
    :
    <div className={`flex  bg-black w-[100px] h-[25px] ml-2 rounded`}></div>
}
    </div>
   {
    product.name&&product.category&&product.photo?

            <div className='flex justify-around'>
         
           { isAdd?
            <button 
            onClick={()=>{
                dispatch(HandleRemoveProduct(product.id))
                HandleAddBuscket()
                
            }}


            className={`icon flex m-auto border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 w-[70%] justify-center mt-2 mb-2 p-2 z-20  ease-in transition duration-300 ease-in-out hover:bg-violet-600  hover:scale-110  `} >
               товар добавлен</button> 
            :
            <button 
            onClick={()=>{
                dispatch(HandleAddProduct(product))
                HandleAddBuscket()
            }}
            className={`icon flex m-auto border-[2px] rounded border-cyan-300 outline outline-offset-2 outline-pink-500 w-[70%] justify-center mt-2 mb-2 p-2 z-20  ease-in transition duration-300 ease-in-out  hover:scale-110  `} 
            id={`button-gradient`}
            >
               в корзину</button> 
            }
        
            </div>
            :
            <div className="w-[60%] h-[54px] bg-black rounded m-auto"></div>
        
  }
    </div>
    </div>



        
        
    )
}