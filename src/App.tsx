import { HashRouter } from "react-router-dom"
import RouteConfig from "./layout/route-config.tsx"
import { CssBaseline } from "@mui/material"
import LikeCounter from "./page-comps/like-counter.tsx"

function App() {
  return (
    <HashRouter>
      <CssBaseline />
      <RouteConfig />
      <LikeCounter />
    </HashRouter>
  )
}

export default App
