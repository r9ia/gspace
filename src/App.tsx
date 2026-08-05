import { BrowserRouter } from "react-router-dom"
import RouteConfig from "./layout/route-config.tsx"

function App() {
  return (
    <BrowserRouter>
      <RouteConfig />
    </BrowserRouter>
  )
}

export default App