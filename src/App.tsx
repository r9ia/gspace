import { HashRouter } from "react-router-dom"
import RouteConfig from "./layout/route-config.tsx"
import { CssBaseline } from "@mui/material"

function App() {
  return (
    <HashRouter>
      <CssBaseline />
      <RouteConfig />
    </HashRouter>
  )
}

export default App
