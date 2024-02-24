import IBackendObject from "../../modle"

type propsTypes={
    product:IBackendObject
}

export default function PriceProductCard({product}:propsTypes){
    return(
        <div >
        <span>Цена </span><span className={`${product.saleStatus? 'line-through text-[#665959] text-0.4' : ''}`}>{product.price} $</span>
          {
              product.sale>0? <span className=" ml-2 overflow-x-hidden ">{Number(product.price-(product.price*(product.sale/100))).toFixed(1)} $</span>:''
          }
      </div>
    )
}