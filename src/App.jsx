import { useRoutes } from "react-router-dom"
import routes from './routes'

import TopBar from "./components/module/Topbar/Topbar"

function App() {
  const router = useRoutes(routes)
  return (
    <>  
    <TopBar/>
    {router}
    </>
  )
}

export default App
