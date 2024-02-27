import  {useState, } from "react";
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


type PropTypes ={
    product:IBackendObject
        }



export default function ProductCard({product}:PropTypes){

    const [isMouseOver ,setIsMouseOver] = useState(false)
    const [infoActive, setInfoActive] = useState(false)
    const[ShowElement, setShowElement] = useState(false)

    const HandleIsOpenInfo=()=>{
        setInfoActive(!infoActive)
    }

   let HandleVisibilityInfo = ()=>{
      setIsMouseOver(!isMouseOver)
           }




    return(
    <>
    <CSSTransition in={ShowElement} timeout ={200} classNames={`alert`} >
<div className={ `relative w-[350px] duration-500 ease-in-out h-[400px] font-mono 
sm:100% sm:ml-5 sm:mt-2 sm:mb-2 `}
onLoad={()=>setShowElement(!ShowElement)}
>

  
       
            <div  

            className={`relative text-white border-[2px] border-cyan-300 outline outline-offset-2 outline-pink-500 rounded box-border min-w-60 max-w-[500px] max-h-[500px] block mr-5  mb-5 flex justify-center flex-col p-5 overflow-hidden transition duration-300 ease-in-out hover:scale-110 
            sm:hover:scale-100 
            `}
      
         id={`box-shadow`}
            >
            <div className='w-full  h-full bg-black  absolute opacity-30 m-[-20px] flex rounded z-0 '></div>
    
   
      <div className={`icon flex flex-col overflow-hidden rounded z-10 `} id={product.id} >
            {
                product.name&&product.category&&product.photo?
            
                    < SaleProductCard product={product}/>
                :
                    <SaleProductCardError/>
            }      
  <div className="relative w-[100%] h-[180px] bg-black border-[2px] border-cyan-300 outline outline-offset-2 outline-pink-500 z-30 cursor-pointer transition duration-300 ease-in-out m-auto"
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
   <div className={`info flex justify-around m-2 `} >
{
      product.name&&product.category&&product.photo?
      <h3 className="overflow-x-hidden max-w-[150px]"> {product.category}</h3> 
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
            <ButtonMain width={70} TextActive='Товар добавлен' TextNotActive='В корзину' handleAdd={HandleAddProduct} handleRemove={HandleRemoveProduct} dateParents={product}/>
        </div>
                :
            <ButtonMainError/>
            
  }
  
    </div>
    </div>
    </CSSTransition>
    </>


        
        
    )
}