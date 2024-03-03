import  {useEffect, useState, } from "react";
import IBackendObject from "../../modle";
import { HandleAddProduct, HandleRemoveProduct } from "../../store/sliceCountBuscet";
import { HandleAddLikes, HandleRemoveLikes } from "../../store/sliceCountLikes";
import { CSSTransition } from "react-transition-group";
import ButtonMain from "../ButtonMain";
import ButtonMainError from "../ButtonMainError";
import SaleProductCard from "./SaleProductCard";
import SaleProductCardError from "../SaleProductCardError";
import PriceProductCard from "./PriceProductCard";
import PriceProductCardError from "./PricePrroductCardError";
import ImgProductCard from "./ImgProductCard";
import ImgProductCardError from "./ImgProductCardError";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


type PropTypes ={
    product:IBackendObject,
    marginBottom?:boolean,
        }



export default function ProductCard({product, marginBottom}:PropTypes){

    const state = useSelector((state:RootState)=> state)
    const [isMouseOver ,setIsMouseOver] = useState(false)
    const [infoActive, setInfoActive] = useState(false)
    const[ShowElement, setShowElement] = useState(false)

    const HandleIsOpenInfo=()=>{
        setInfoActive(!infoActive)
    }

   let HandleVisibilityInfo = ()=>{
      setIsMouseOver(!isMouseOver)
           }


           useEffect(()=>{
console.log(state.countBuscket.value.filter(el=>el.id===product.id).length)
           }, [state.countBuscket.value])

    return(
    <>
    <CSSTransition in={ShowElement} timeout ={200} classNames={`alert`} >

<div className={ `relative w-[350px] duration-500 ease-in-out h-[400px] font-mono mb-10
sm:100% sm:ml-10 sm:mt-2 sm:${marginBottom? 'mb-2 ': '0'}`}
onLoad={()=>setShowElement(!ShowElement)}
>

  
<div className={`border-[2px] rounded border-pink-500 p-[2px] min-w-60 max-w-[500px] max-h-[500px] mr-5 mb-5 hover:scale-110
            sm:hover:scale-100 
`}>
            <div  

            className={`relative text-white border-[2px] border-cyan-300 rounded box-border w-[100%] h-[100%] block  flex justify-center flex-col p-5 overflow-hidden transition duration-300 ease-in-out  `}
      
         id={`box-shadow`}
            >
            <div className='w-full  h-full   absolute opacity-30 m-[-20px] flex rounded z-0 '></div>
    
   
      <div className={`icon flex flex-col overflow-hidden rounded z-10 `} id={product.id} >
            {
                product.name&&product.category&&product.photo?
            
                    < SaleProductCard product={product}/>
                :
                    <SaleProductCardError/>
            }      
  <div className={`relative w-[100%] h-[180px]  border-[2px] border-cyan-300 outline outline-offset-2 outline-pink-500 z-30 cursor-pointer transition duration-300 ease-in-out m-auto
  ${state.switchTeamSlice.nightTeam? 'bg-white': 'bg-black'}
        `}
     onMouseOver={()=>setIsMouseOver(true)}
     onMouseOut={()=>setIsMouseOver(false)}           
  >

            {
                product.name&&product.category&&product.photo?
                    <ImgProductCard product={product}/>
                                :
                    <ImgProductCardError/>
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
<div className={`absolute 
${isMouseOver?'btnLikeActive':'btnLikeNotActive'}  
`}
onMouseOver={()=>setIsMouseOver(true)}
>
                <ButtonMain width={100} TextActive="Избранно" TextNotActive="Нравится" handleAdd={HandleAddLikes} handleRemove={HandleRemoveLikes} dateParents={product}/>
</div>
<div className={`absolute
${isMouseOver?'btnInfoActive':'btnInfoNotActive'} 
`}
onMouseOver={()=>setIsMouseOver(true)}
>
                <ButtonMain width={100}  TextNotActive="О товаре"  hedleAny={HandleIsOpenInfo} dateParents={product}/>
</div>
       </div>
   </div>
   <div className={`info flex-col justify-around m-2 items-center sm:text-sm
     ${!state.switchTeamSlice.nightTeam? 'text-white': 'text-black'}
   `} >
{
      product.name&&product.category&&product.photo?
      <div className={`flex items-center mb-1 sm:mb-2`}>
      <h3 className={`overflow-x-hidden max-w-[150px] truncate items-center mr-2`}> {product.category}</h3>  
      <span className={`p-1 bg-[#008000] rounded mr-1`}>GIGABYTE</span>
      <span className={`p-1 bg-[#008000] rounded flex items-center `}>
      <svg id="Layer_1"  version="1.1" viewBox="0 0 612 792" xmlns="http://www.w3.org/2000/svg" height={20} width={20}><style type="text/css">
	
</style><g><path  d="M562,396c0-141.4-114.6-256-256-256S50,254.6,50,396s114.6,256,256,256S562,537.4,562,396L562,396z    M501.7,296.3l-241,241l0,0l-17.2,17.2L110.3,421.3l58.8-58.8l74.5,74.5l199.4-199.4L501.7,296.3L501.7,296.3z"/></g></svg>
        
        Оригинал</span>
      </div>
      :
      <div className={`flex  bg-black w-[100px] h-[25px] ml-2 rounded`}></div>
}



{
  product.name&&product.category&&product.photo?

        <PriceProductCard product={product}/>
        :
        <PriceProductCardError/>
}
    </div>
   {
    product.name&&product.category&&product.photo?

        <div className='flex justify-around'>
            <ButtonMain width={80}  TextNotActive={`${state.countBuscket.value.filter(el=>el.id===product.id).length? 'товар добавлен': 'В корзину'}`} handleAdd={HandleAddProduct} handleRemove={HandleRemoveProduct} dateParents={product}/>
        </div>
                :
            <ButtonMainError/>
            
  }
  
    </div>
    </div>
    </div>
    </CSSTransition>
    </>


        
        
    )
}