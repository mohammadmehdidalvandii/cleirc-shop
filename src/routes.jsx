import Home from "./page/Home/Home";
import Product from "./page/Product/Product";
import Article from './page/Article/Article'

const routes =[
    {path:"/" , element:<Home/>},
    {path:"/Product" , element:<Product/>},
    {path:"/Article" , element:<Article/>},
]


export default routes