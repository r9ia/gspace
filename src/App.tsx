import { BrowserRouter } from "react-router-dom"
import RouteConfig from "./layout/route-config.tsx"
import { CssBaseline } from "@mui/material"

// in your top-level App component, alongside your ThemeProvider


function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <RouteConfig />
    </BrowserRouter>
  )
}

export default App