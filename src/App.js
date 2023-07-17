import React, { useState } from "react"
import ImgCart from './Assets/Images/shopping-cart.png';

const App = () => {

    const [contador,setContador] = useState(0)

    
    const CambiarTexto=()=>{
        
        setContador(contador+1)
    }


    return (

        <div className='navbar navbar-dark navbar-custom'>

            <div className='container-fluid'>
                <div className='row' style={{ width: "100%" }}>
                    <div className='col-md-2'>
                        <a className="navbar-brand" href="#">Contador {contador} veces</a>
                    </div>

                    <div className='col-md-8 text-center'>
                        <button type="button" className="btn btn-outline-light">Explorer</button>
                        <button type="button" className="btn btn-aparel" style={{ marginLeft: "15px" }}>Apparel</button>
                    </div>

                    <div className='col-md-2 text-end'>
                        <button onClick={CambiarTexto} className='btn btn-light'><img className='icono-cart' src={ImgCart}></img> Cart 0</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default App