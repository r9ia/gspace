import { BrowserRouter } from "react-router-dom"
import AnimatedRoutes from "./layout/route-config.tsx"

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App