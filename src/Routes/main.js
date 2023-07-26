import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import TermsOfUse from "../Pages/TermsOfUse";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/terms-of-use",
        element: <TermsOfUse></TermsOfUse>
    },
    {
        path: "/product/:SlugProducto",
        element: <Product></Product>
    }
    ,
    {
        path: "/cart/",
        element: <Cart></Cart>
    }
    ,
    {
        path: "/checkout/",
        element: <Checkout></Checkout>
    }
]);

export default Routes