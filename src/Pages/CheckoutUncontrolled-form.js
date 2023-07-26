import { useRef } from "react";
import EcommerceTemplate from "../Templates/EcommerceTemplate";

const Checkout = () => {

    const Name = useRef();
    const Email = useRef();
    const Address = useRef();
    const Photo = useRef();

    //FORMULARIOS NO CONTROLADOS - Uncontrolled forms
    const submit=(e)=>{
        e.preventDefault();
        
        /*const data = Array.from(new FormData(e.target));
        console.log( Object.fromEntries(data));

        for(let [key,value] of data){
            console.log(key,value)
        }*/  

        //Document.getElementById("customerName").value;
        const customerName=Name.current.value;
        const customerEmail=Email.current.value;
        const customerAddress=Address.current.value;
        const photCustomer=Photo.current.files[0];
        //console.log(photCustomer);

        //console.log(customerName,customerEmail,customerAddress);

        const checkoutForm=new FormData();//me ayuda a subir archivos
        checkoutForm.append("customerName",customerName);
        checkoutForm.append("customerEmail",customerEmail);
        checkoutForm.append("customerAddress",customerAddress);
        checkoutForm.append("customerPhoto",photCustomer);

        fetch('https://api.tiendita.com/checkout',{method:'POST', body:checkoutForm});


        //USEREF

    }



    return (

        <EcommerceTemplate>
            <div className="container page">
                <h1>Checkout</h1>


                <div className="row mt-5">

                    <div className="col-md-6">

                        {/* INICIO CARD */}
                        <div className="card">
                            <div className="card-header">
                                Customer Info
                            </div>
                            <div className="card-body">

                                <form onSubmit={submit} >

                                    <div className="form-floating mb-3">
                                        <input type="text" ref={Name} className="form-control" name="customerName" id="customerName" placeholder="Your Name" autoComplete={false}/>
                                        <label for="customerName">Your Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="email" ref={Email} className="form-control" name="customerEmail" id="customerEmail" placeholder="name@domain.com" />
                                        <label for="customerEmail">Your Email</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="text" ref={Address} className="form-control" name="customerAddress" id="customerAddress"  placeholder="Your Address" />
                                        <label for="customerAddress">Your customerAddress</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="file" ref={Photo} name="Photo" />
                                    </div>


                                    <button type="submit" className="btn btn-primary">Go somewhere</button>
                                </form>
                            </div>
                        </div>
                        {/* FIN CARD */}


                    </div>

                    <div className="col-md-6">

                    </div>

                </div>

            </div>
        </EcommerceTemplate>

    )
}

export default Checkout; 