import React, { useState } from "react"
import CardProduct from "../Components/CardProduct";

const ProductSection = ({type, colorBackground}) => {

    

    const [arraProducts,setArraProducts]=useState([
        {
            IdProduct:1,
            nameProduct:"Sloth Game Tshirt",
            typeShirt:"Classic Crew Neck",
            atributeShirt:"Comfortsoft T-Shirt",
            priceProduct:21.99,
            type:"Featured"
        },
        {
            IdProduct:2,
            nameProduct:"Grafiti Game Shirt",
            typeShirt:"Classic Crew Neck",
            atributeShirt:"Comfortsoft T-Shirt",
            priceProduct:23.99,
            type:"Featured"
        },
        {
            IdProduct:3,
            nameProduct:"SkullColor Game Shirt",
            typeShirt:"Classic Crew Neck",
            atributeShirt:"Comfortsoft T-Shirt",
            priceProduct:29.99,
            type:"Promo"
        }
    ]);

    
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