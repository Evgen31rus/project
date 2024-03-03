import { useSelector } from "react-redux"
import IBackendObject from "../../modle"
import { RootState } from "../../store/store"

type propsTypes={
    product:IBackendObject
}

export default function PriceProductCard({product}:propsTypes){
    const state = useSelector((state:RootState)=> state)
    return(
        <div className={`  ${state.switchTeamSlice.nightTeam? 'p-1': ''}`}>
        <span>Цена </span><span className={`${product.saleStatus? 'line-through text-[#665959] text-0.4 opacity-85 bg-white rounded p-1' : ''}`}>{product.price} $</span>
          {
              product.sale>0? <span className=" ml-2 overflow-x-hidden font-semibold rounded p-1 bg-[#FF0000]">{Number(product.price-(product.price*(product.sale/100))).toFixed(1)} $</span>:''
          }
      </div>
    )
}