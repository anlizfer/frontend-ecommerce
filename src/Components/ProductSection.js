import React, { useState } from "react"
import CardProduct from "../Components/CardProduct";
import ProductsData from "../Data/ProductsData";

const ProductSection = ({type, colorBackground}) => {

    

    const [arraProducts,setArraProducts]=useState(ProductsData);

    
    return (
        <section style={{backgroundColor:colorBackground}}>
            <div className="container pt-5 pb-5">

                <div className="row mb-5">
                    <div className="col">
                        <h2>{type} Products</h2>
                    </div>
                </div>

                <div className="row">

                    {
                        arraProducts.filter((item)=>item.type==type).map((ItemProduct) => {                            
                            return (
                                <CardProduct
                                    key={ItemProduct.IdProduct}
                                    {...ItemProduct}>
                                </CardProduct>
                            )                                                       
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default ProductSection