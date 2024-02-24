import IBackendObject from "../../modle"

type propsTypes={
    product:IBackendObject
}

export default function ImgProductCard({product}: propsTypes){
    return(
        <>
                                    <div className="   product-front  w-[100%] h-[100%] bg-cover bg-center"
                            style={{
                                backgroundImage: `url('${product.photo}')`,
                                // transform: `perspective(600px) rotateY(${infoActive?'-180':'0'}deg)`
                            }}
                 
                            >
                            <img src={product.photo} id={product.id} alt={`${product.category} ${product.name}`} 
                            className={`

                            w-[0%] h-[0%]`}  

                            />
                            </div>
        </>
    )
}