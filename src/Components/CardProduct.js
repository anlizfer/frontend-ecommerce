import React, { useState,useEffect } from "react"
import ImgProduct from '../Assets/Images/products/camiseta-1-front.jpg'
import ImgProductBack from '../Assets/Images/products/camiseta-1-back.jpg'
import ImgCartAdd from '../Assets/Images/cart-add.png'
import '../Components/CardProducts.css'

const CardProduct = ({nameProduct,typeShirt,atributeShirt,priceProduct,slug}) => {    
    const [imgProd,setImgProduct]=useState(ImgProduct);
    const [itemAddCart, setItemAddCart]=useState({});
    
    useEffect(()=>{ 
        //debugger       
        if(itemAddCart.nameProduct){            
            let ItemsCarts=JSON.parse(localStorage.getItem('cart'));            
            if(ItemsCarts){
                ItemsCarts.push(itemAddCart);
                localStorage.setItem('cart', JSON.stringify(ItemsCarts));       
            }else{
                localStorage.setItem('cart', JSON.stringify([{...itemAddCart}]));       
            }
            
            
        }
    },[itemAddCart])

    const MouseOverProduct=()=>{
        setImgProduct(ImgProductBack);
    }

    const MouseOutProduct=()=>{
        setImgProduct(ImgProduct);
    }

    const AddCart=()=>{                
        setItemAddCart({nameProduct,typeShirt,atributeShirt,priceProduct})
    }



   

    return (
        <div className="col-md-3">
            
                <div style={{position:"relative"}}>
                    <a href={`./product/${slug}`}>
                        <div                
                            className="card-product"
                            onMouseOut={MouseOutProduct}
                            onMouseOver={MouseOverProduct}
                            style={{ backgroundImage: `url(${imgProd})` }}>

                            
                        </div>
                    </a>

                    <button className="btn-add-cart" onClick={AddCart} >
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