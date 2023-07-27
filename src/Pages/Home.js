import Hero from "../Components/Hero";
import React,{lazy,Suspense} from "react";


//import ProductSection from "../Components/ProductSection";
import EcommerceTemplate from "../Templates/EcommerceTemplate";

const ProductSection =lazy(()=> import("../Components/ProductSection"));


const Home =()=>{
    return(
        <EcommerceTemplate>
            <Hero></Hero>   
            <Suspense fallback={<div>...Loading...</div>}>
                <ProductSection colorBackground={"#eeeeee"} type="Featured"></ProductSection>            
            </Suspense>
            
            <ProductSection type="Promo"></ProductSection>
        </EcommerceTemplate>
    )
}

export default Home