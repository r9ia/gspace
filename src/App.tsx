import { BrowserRouter } from "react-router-dom"
import { Box, Container } from '@mui/material'
import Header from "./page-comps/header.tsx"
import AnimatedRoutes from "./layout/animated-routes.tsx"
import Sidebar from "./layout/sidebar.tsx"

function App() {

  return (
    <BrowserRouter>
      <Container disableGutters maxWidth="lg">
        <Header />
        <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start", padding: "20px", textAlign: "left" }}>
          <Sidebar />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <AnimatedRoutes />
          </Box>
        </Box>
      </Container>
    </BrowserRouter>
  )
}

export default App
