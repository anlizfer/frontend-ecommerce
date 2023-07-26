import { useDebugValue, useState } from "react";
import EcommerceTemplate from "../Templates/EcommerceTemplate";


//CONTROLLED FORM
const Checkout = () => {

    

    const [form,setForm] = useState(
        {
            customerName:"",
            customerEmail:"",
            customerAddress:"",
            paymentType:"",
            discount:""
        }
    );
    
    const handleChange=({target})=>{                

        if(target.name==="customerName"){
            if(target.value==="angel"){
                console.log("Oigaaaa no puede pasar");                
            }            
        }

        if(target.name==="customerEmail"){
            if(target.value==="angel.lizcano.sie@gmail.com"){
                console.log("Oigaaaa que email tan chevere");                
            }            
        }

        setForm(state=>({
            ...state,
            
            /*
            customerName:(target.name==="customerName")? target.value:"",
            customerEmail:(target.name==="customerName")? target.value:"",
            customerAddress:(target.name==="customerName")? target.value:"",
            paymentType:(target.name==="customerName")? target.value:"",
            discount:(target.name==="customerName")? target.value:"",*/

            [target.name]: (target.type==="checkbox") ? target.checked : target.value

        }));
        //let HolaOscar=1;
        //console.log(form)

    }

    const submit=()=>{

        let VariableDinamica="HolaOscar"
        
        let objNombres={HolaOscar:0}
        objNombres={[VariableDinamica]:45};
        console.log(objNombres);

        /*const formData=new FormData();
        formData.append("customerName",form.customerName);
        formData.append("customerEmail",form.customerEmail);
        formData.append("customerAddress",form.customerAddress);
        formData.append("paymentType",form.paymentType);
        formData.append("discount",form.discount);
        
        

        fetch('https://api.mitiendita.com/checkout',{method:"POST",body:formData});*/
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

                                

                                    <div className="form-floating mb-3">
                                        <input type="text" onChange={handleChange} className="form-control" name="customerName" id="customerName" placeholder="Your Name" autoComplete={false}/>
                                        <label for="customerName">Your Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="email"  onChange={handleChange}   className="form-control" name="customerEmail" id="customerEmail" placeholder="name@domain.com" />
                                        <label for="customerEmail">Your Email</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="text"  onChange={handleChange}  className="form-control" name="customerAddress" id="customerAddress"  placeholder="Your Address" />
                                        <label for="customerAddress">Your customerAddress</label>
                                    </div>

                                    <div onChange={handleChange}>
                                        <input  type="radio" value="CreditCard" name="paymentType" /> Credit Card 
                                        <input  type="radio" value="Paypal" name="paymentType"  style={{marginLeft:"15px"}} /> Paypal
                                    </div>
                                    
                                    <br />
                                    <br />

                                    <input type="checkbox" onChange={handleChange} name="discount" /> Discount?

                                    <br />
                                    <br />

                                    

                                    <button type="button" onClick={submit} className="btn btn-primary">Go somewhere</button>
                                
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