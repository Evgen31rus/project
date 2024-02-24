import IBackendObject from "../../modle"
import bigSale from '../../img/bigSale.png'

type PropTypes ={
    product:IBackendObject
        }

export default function SaleProductCard({product}:PropTypes){
    return(
        <>
    <div className="flex justify-center overflow-hidden max-w-[300px] max-h-[45px] text-base p-3">
    {product.name}
    {product.saleStatus? <img  src={bigSale} alt='sale' className="absolute top-0 left-0 w-[57px] h-[80px]"/>   : ''}
    
    </div>
        </>
    )
}