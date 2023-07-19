import Footer from "../Components/Footer"
import Header from "../Components/Header"

const EcommerceTemplate =({children})=>{
    return(
        <>
        

        <Header></Header>

        {children}

        <Footer></Footer>


        </>
    )
}

export default EcommerceTemplate