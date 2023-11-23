import { useRoutes } from "react-router-dom"
import routes from './routes'

import TopBar from "./components/module/Topbar/Topbar"
import MainNav from "./components/module/MainNav/MainNav"
import Navbar from "./components/module/Navbar/Navbar"
import NavbarRes from "./components/module/NavbarRes/NavbarRes"

function App() {
  const router = useRoutes(routes)
  return (
    <>  
    <TopBar/>
    <MainNav/>
    <Navbar/>
    <NavbarRes/>
    {router}
    </>
  )
}

export default App
