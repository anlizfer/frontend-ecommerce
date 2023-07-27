import React, { useState,useEffect, useContext } from "react"
import ImgProduct from '../Assets/Images/products/camiseta-1-front.jpg'
import ImgProductBack from '../Assets/Images/products/camiseta-1-back.jpg'
import ImgCartAdd from '../Assets/Images/cart-add.png'
import '../Components/CardProducts.css'
import { MyContext } from "../Hooks/MyContext"


const CardProduct = ({nameProduct,typeShirt,atributeShirt,priceProduct,slug,cant,IdProduct}) => {    
    const [imgProd,setImgProduct]=useState(ImgProduct);
    const [itemAddCart, setItemAddCart]=useState({});
    const {CountCart,setCountCart}=useContext(MyContext);
    
    useEffect(()=>{ 
        //debugger       
        if(itemAddCart.nameProduct){            
            let ItemsCarts=JSON.parse(localStorage.getItem('cart'));            
            if(ItemsCarts){
                ItemsCarts.push(itemAddCart);
                localStorage.setItem('cart', JSON.stringify(ItemsCarts));       
                setCountCart(ItemsCarts.length);
            }else{
                localStorage.setItem('cart', JSON.stringify([{...itemAddCart}]));       
                setCountCart(1);
            }
            //console.log(ItemsCarts.length)
            
            
        }
    },[itemAddCart])

    const MouseOverProduct=()=>{
        setImgProduct(ImgProductBack);
    }

    const MouseOutProduct=()=>{
        setImgProduct(ImgProduct);
    }

    const AddCart=()=>{                
        setItemAddCart({nameProduct,typeShirt,atributeShirt,priceProduct,cant,IdProduct})
    }



   

    return (
        <div className="col-md-3">
            
                <div style={{position:"relative"}}>
                    <a href={`./product/${slug}`} aria-label={nameProduct} >
                        <div                
                            className="card-product"
                            onMouseOut={MouseOutProduct}
                            onMouseOver={MouseOverProduct}
                            style={{ backgroundImage: `url(${imgProd})` }}>

                            
                        </div>
                    </a>

                    <button className="btn-add-cart" aria-label="Button Add Cart" onClick={AddCart}   >
                        <img src={ImgCartAdd} alt="icon cart" />
                    </button>

                </div>
                
            

            <div className="InfoProduct">
                <div className="row">
                    <div className="col-8">
                        <h3>{nameProduct}</h3>
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