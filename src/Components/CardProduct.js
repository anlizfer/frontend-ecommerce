import React, { useState } from "react"
import ImgProduct from '../Assets/Images/products/camiseta-1-front.jpg'
import ImgProductBack from '../Assets/Images/products/camiseta-1-back.jpg'
import ImgCartAdd from '../Assets/Images/cart-add.png'
import '../Components/CardProducts.css'

const CardProduct = ({nameProduct,typeShirt,atributeShirt,priceProduct}) => {    
    const [imgProd,setImgProduct]=useState(ImgProduct)

    const MouseOverProduct=()=>{
        setImgProduct(ImgProductBack);
    }

    const MouseOutProduct=()=>{
        setImgProduct(ImgProduct);
    }

    
    return (
        <div className="col-md-3">
            <div
                className="card-product"
                onMouseOut={MouseOutProduct}
                onMouseOver={MouseOverProduct}
                style={{ backgroundImage: `url(${imgProd})` }}>

                <button className="btn-add-cart">
                    <img src={ImgCartAdd} />
                </button>
            </div>

            <div className="InfoProduct">
                <div className="row">
                    <div className="col-8">
                        <h4>{nameProduct}</h4>
                        <p>{typeShirt}</p>
                        <p>{atributeShirt}</p>
                    </div>

                    <div className="col-4">
                        <h3>${priceProduct}</h3>
                    </div>
                </div>
                
            </div>

        </div>

    )
}

export default CardProduct