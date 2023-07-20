import React,{useState} from 'react';
import Logo from '../Assets/Images/logo.png'
import ImgCart from '../Assets/Images/shopping-cart.png';

const Header = () => {    

    const [contador,setContador] = useState(0)

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
                            <button type="button" className="btn btn-outline-light">Explorer</button>
                            <button type="button" className="btn btn-aparel" style={{ marginLeft: "15px" }}>Apparel</button>
                        </div>

                        <div className='col-md-2 text-end'>
                            <button className='btn btn-light'><img className='icono-cart' src={ImgCart}></img> Cart {contador}</button>
                        </div>

                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header