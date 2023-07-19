import React from "react"
import EcommerceTemplate from "./Templates/EcommerceTemplate";
import Hero from "./Components/Hero";
import ProductSection from "./Components/ProductSection";



const App = () => {
    
    
    


    return (        
        <EcommerceTemplate>
            <Hero></Hero>   
            <ProductSection colorBackground={"#eeeeee"} type="Featured"></ProductSection>            
            <ProductSection type="Promo"></ProductSection>
        </EcommerceTemplate>
    )
}

export default App