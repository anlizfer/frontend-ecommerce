import ImgProduct from '../Assets/Images/products/camiseta-1-front.jpg'
import ImgProductBack from '../Assets/Images/products/camiseta-1-back.jpg'
import EcommerceTemplate from '../Templates/EcommerceTemplate'
import { useParams } from 'react-router-dom'
import ProductsData from '../Data/ProductsData'
import { useEffect, useState } from 'react'


const Product=()=>{

    const {SlugProducto}=useParams();
    const [ArraProduct,SetArraProduct]=useState(ProductsData)
    const [productObj,setProduct]=useState({})
    

    useEffect(()=>{        
        let ProductSel=ArraProduct.filter((ele)=>ele.slug===SlugProducto);
        setProduct(ProductSel[0])
    },[])

    return(
        <EcommerceTemplate>
            <div className="container page">
                <h1>{productObj.nameProduct}</h1>
                

                <div className="row">

                    <div className="col-md-7">
                        <img src={ImgProduct}></img>
                    </div>

                    <div className="col-md-5">

                    </div>

                </div>

            </div>
        </EcommerceTemplate>
    )
}

export default Product