import CompactHashRouter from "./layout/compact-hash-router"
import RouteConfig from "./layout/route-config.tsx"
import { CssBaseline } from "@mui/material"
import LikeCounter from "./page-comps/like-counter.tsx"

function App() {
  return (
    <CompactHashRouter>
      <CssBaseline />
      <RouteConfig />
      <LikeCounter />
    </CompactHashRouter>
  )
}

export default App
