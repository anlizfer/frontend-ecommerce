import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import TermsOfUse from "../Pages/TermsOfUse";
import Product from "../Pages/Product";

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
]);

export default Routes