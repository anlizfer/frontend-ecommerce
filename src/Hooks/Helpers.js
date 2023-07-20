import React,{useState} from "react"

const useSumar=(inicial)=>{
    const [url,setValor]=useState(inicial)
    const sumarValor=(valor)=>{
        setValor("HOLA MUNDO "+valor)
    }
    return [url,sumarValor]
}



export default useSumar