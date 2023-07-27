import React,{lazy,Suspense} from "react";
import { createBrowserRouter } from "react-router-dom";

/*import Home from "../Pages/Home";
import TermsOfUse from "../Pages/TermsOfUse";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";*/

const Home = lazy(()=> import("../Pages/Home"));
const TermsOfUse = lazy(()=> import("../Pages/TermsOfUse"));
const Product = lazy(()=> import("../Pages/Product"));
const Cart = lazy(()=> import("../Pages/Cart"));
const Checkout = lazy(()=> import("../Pages/Checkout"));



const Routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>...Loading...</div>}>
                <Home></Home>
            </Suspense>
        )
    },
    {
        path: "/terms-of-use",
        element: 
        (
            <Suspense fallback={<div>...Loading...</div>}>
                <TermsOfUse></TermsOfUse>
            </Suspense>
        )
        
        
    },
    {
        path: "/product/:SlugProducto",
        element:(
            <Suspense fallback={<div>...Loading...</div>}>
                <Product></Product>
            </Suspense>
        )
    }
    ,
    {
        path: "/cart/",
        element:(
            <Suspense fallback={<div>...Loading...</div>}>
                <Cart></Cart>
            </Suspense>
        )
        
        
    }
    ,
    {
        path: "/checkout/",
        element: (
            <Suspense fallback={<div>...Loading...</div>}>
                <Checkout></Checkout>
            </Suspense>
        )        
    }
]);

export default Routes