import React, { useState } from "react"
import ImgCart from './Assets/Images/shopping-cart.png';
import HeroBanner from './Assets/Images/bg_home_banner.jpeg'
import CardProduct from "./Components/CardProduct";


const App = () => {

    const [contador,setContador] = useState(0)
    const [arraProducts,setArraProducts]=useState([
        {
            IdProduct:1,
            nameProduct:"Sloth Game Tshirt",
            typeShirt:"Classic Crew Neck",
            atributeShirt:"Comfortsoft T-Shirt",
            priceProduct:21.99
        },
        {
            IdProduct:2,
            nameProduct:"Grafiti Game Shirt",
            typeShirt:"Classic Crew Neck",
            atributeShirt:"Comfortsoft T-Shirt",
            priceProduct:23.99
        },
        {
            IdProduct:3,
            nameProduct:"SkullColor Game Shirt",
            typeShirt:"Classic Crew Neck",
            atributeShirt:"Comfortsoft T-Shirt",
            priceProduct:29.99
        }
    ])
    
    const AddCart=()=>{        
        setContador(contador+1)
    }

    

   


    return (

        <>
            <div className='navbar navbar-dark navbar-custom'>

                <div className='container-fluid'>
                    <div className='row' style={{ width: "100%" }}>
                        <div className='col-md-2'>
                            <a className="navbar-brand" href="#">Tienda</a>
                        </div>

                        <div className='col-md-8 text-center'>
                            <button type="button" className="btn btn-outline-light">Explorer</button>
                            <button type="button" className="btn btn-aparel" style={{ marginLeft: "15px" }}>Apparel</button>
                        </div>

                        <div className='col-md-2 text-end'>
                            <button  className='btn btn-light'><img className='icono-cart' src={ImgCart}></img> Cart {contador}</button>
                        </div>

                    </div>
                </div>
            </div>

            <section>
                <img className="image-hero" alt="Hombre jugado con computadora y con audifonos" src={HeroBanner} />
            </section>

            <section>
                <div className="container pt-5 pb-5">

                    <div className="row mb-5">
                        <div className="col">
                            <h2>Featured Products</h2>
                        </div>
                    </div>

                    <div className="row">
                        
                        {
                            arraProducts.map((ItemProduct)=>{
                                return(<CardProduct 
                                        key={ItemProduct.IdProduct} 
                                        {...ItemProduct}>
                                </CardProduct>)
                            })
                        }

                        
                       
                        
                    </div>

                </div>
            </section>

        </>
      

    )
}

export default App