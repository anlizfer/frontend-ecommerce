import EcommerceTemplate from "../Templates/EcommerceTemplate"
import React,{useEffect,useState,useRef} from "react"

const TermsOfUse =()=>{

    const [contador,setContador]=useState(0)
    const [contador2,setContador2]=useState(0)
    const inputName = useRef();

    const cambiarContador=()=>{
        setContador(contador+1)
        let nombre=inputName.current.value;
        inputName.current.style.background="black";
        inputName.current.style.color="white";
        console.log(nombre)
    }

    const cambiarContador2=()=>{
        setContador2(contador2+1)
    }

    
    useEffect(()=>{
        let a=15;
        let b=45;    
        let resultado=a+b;
        console.log("Prueba de Click",resultado+contador+contador2);
    },[contador,contador2])

    return(
        <EcommerceTemplate>

            <div className="container p-5">
                <div className="row">
                    <div className="col">
                        <label>Nombre</label>
                        <input className="form-control" ></input>
                        <button onClick={cambiarContador}>PRUEBA</button>

                        <h3   ref={inputName} >Cant Clicks {contador}</h3>
                        <hr />
                        <button onClick={cambiarContador2}>PRUEBA2</button>
                        <h3>Cant Clicks 2 {contador2}</h3>
                    </div>
                </div>
            </div>

            

        </EcommerceTemplate>
    )
}

export default TermsOfUse