import { useEffect, useState } from "react";
import EcommerceTemplate from "../Templates/EcommerceTemplate";

const Cart =()=>{

    const [CarritoCompleto,SetCarritoComplet]=useState([{}]) 
    const [SumaCarrito,SetSumaCarrito]   = useState(0)

    useEffect(()=>{
        SetCarritoComplet(JSON.parse(localStorage.getItem("cart")));

        if(CarritoCompleto){
            let SumaCarritoTemp=CarritoCompleto.reduce((suma,item)=>{
                return suma + (parseFloat(item.priceProduct)*parseFloat(item.cant))
            },0);
            SetSumaCarrito(SumaCarritoTemp)
        }
        

    },[])

    return(
        <EcommerceTemplate>

            <div className="container page">
                <h1>Carrito de compras</h1>
                

                <div className="row">
                    
                    <div className="col-md-12">

                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Id Producto</th>
                                    <th>Producto</th>
                                    <th>Cant</th>
                                    <th>Valor Prod</th>
                                    <th>Total Prod</th>
                                </tr>
                            </thead>

                            <tbody>

                                {                                
                                    (CarritoCompleto)?
                                        CarritoCompleto.map((item,key)=>{
                                            return(
                                                <tr key={key} >
                                                    <td>{item.IdProduct}</td>
                                                    <td>{item.nameProduct}</td>
                                                    <td>{item.cant}</td>
                                                    <td>{item.priceProduct}</td>
                                                    <td>{item.priceProduct*item.cant}</td>
                                                </tr>
                                            );
                                        })
                                    :''
                                }

                                
                                
                            </tbody>
                        </table>


                    </div>

                    <div className="col-md-12 text-end">
                            <h2>Valor Total: ${SumaCarrito}</h2>
                    </div>

                </div>

            </div>
        </EcommerceTemplate>
        
    )
}
export default Cart;