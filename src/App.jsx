import { useRoutes } from "react-router-dom"
import routes from './routes'

import TopBar from "./components/module/Topbar/Topbar"
import MainNav from "./components/module/MainNav/MainNav"

function App() {
  const router = useRoutes(routes)
  return (
    <>  
    <TopBar/>
    <MainNav/>
    {router}
    </>
  )
}

export default App
