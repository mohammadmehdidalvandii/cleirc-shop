import Home from "./page/Home/Home";
import Product from "./page/Product/Product";
import Article from './page/Article/Article'
import About from "./page/About/About";

const routes =[
    {path:"/" , element:<Home/>},
    {path:"/Product" , element:<Product/>},
    {path:"/Article" , element:<Article/>},
    {path:"/About" , element:<About/>},
]


export default routes