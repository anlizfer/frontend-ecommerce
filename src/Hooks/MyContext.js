import React,{createContext,useState } from "react";

const MyContext=createContext();

const ContextProvider=({children})=>{
    const [CountCart, setCountCart]=useState(0);

    return(
     <MyContext.Provider value={{CountCart,setCountCart}}>
        {children}
     </MyContext.Provider>
    );
};

export {MyContext,ContextProvider};
