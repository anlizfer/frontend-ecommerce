import Hero from "../Components/Hero"
import ProductSection from "../Components/ProductSection"
import EcommerceTemplate from "../Templates/EcommerceTemplate"

const Home =()=>{
    return(
        <EcommerceTemplate>
            <Hero></Hero>   
            <ProductSection colorBackground={"#eeeeee"} type="Featured"></ProductSection>            
            <ProductSection type="Promo"></ProductSection>
        </EcommerceTemplate>
    )
}

export default Home