import React,{useContext, useEffect} from 'react';
import Logo from '../Assets/Images/logo.png'
import ImgCart from '../Assets/Images/shopping-cart.png';
import {MyContext} from '../Hooks/MyContext';

const Header = () => {    
    const {CountCart,setCountCart} = useContext(MyContext);

    useEffect(()=>{
        let carritoData= JSON.parse(localStorage.getItem("cart"));
        if(carritoData){
            setCountCart(carritoData.length)
        }
        
    },[])
    

    return (
        <header>

            <div className='navbar navbar-dark navbar-custom'>
                <div className='container-fluid'>
                    <div className='row' style={{ width: "100%" }}>
                        <div className='col-md-2'>
                            <a className="navbar-brand" href="/">
                                <img className="logo" src={Logo} />
                            </a>
                        </div>

                        <div className='col-md-8 text-center'>
                            <button type="button" className="btn btn-outline-light btn-explorer">Explorer</button>
                            <button type="button" className="btn btn-aparel" style={{ marginLeft: "15px" }}>Apparel</button>
                        </div>

                        <div className='col-md-2 text-end'>
                            <a href='../cart' className='btn btn-light'>
                                <img className='icono-cart' src={ImgCart}></img> 
                                Carrito {CountCart}
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header