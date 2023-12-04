import { useRoutes } from "react-router-dom"
import routes from './routes'

import TopBar from "./components/module/Topbar/Topbar"
import MainNav from "./components/module/MainNav/MainNav"
import Navbar from "./components/module/Navbar/Navbar"
import NavbarRes from "./components/module/NavbarRes/NavbarRes"
import Footer from "./components/module/Footer/Footer"
import productContext from "./contexts/productContext"
import { useState } from "react"

import db from './data/db.json'
function App() {
  const [products, setProducts ] = useState([...db.products])
  const [userBasket , setUserBasket] =useState([])
  const router = useRoutes(routes)
  return (
    <>  
    <productContext.Provider value={{
      products,
      setProducts,
      userBasket,
      setUserBasket
    }} >
    <TopBar/>
    <MainNav/>
    <Navbar/>
    <NavbarRes/>
    {router}
    <Footer/>
    </productContext.Provider>
    </>
  )
}

export default App
