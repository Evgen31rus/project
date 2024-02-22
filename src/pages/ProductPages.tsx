
import IBackendObject from "../modle";
import ProductCard from "../components/ProductCard";
import HelpZone from "../components/HelpZone";
import ProductError from '../components/ProductError';
import { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";



type PropTypes ={
    product:IBackendObject[]|undefined
        }


export default function ProductPages({product}:PropTypes){
   let stateSearch = useSelector((state:RootState) => state.switchFilterPrice.search)




return(
   <>
<HelpZone/>

   <div className='relative flex flex-wrap max-w-[1500px] min-h-[300px] justify-center m-auto'>

{

    stateSearch.length?
stateSearch.map(element=>
<ProductCard product={element}/>
)
:
<ProductError/>
} 



</div>

   </>

        
    )
}