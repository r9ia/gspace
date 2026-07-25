import Header from "./page-comps/header.tsx"
import LandingPage from "./pages/landing.tsx"
import { Container } from '@mui/material'

function App() {

  return (
    <Container disableGutters maxWidth="lg">
      <Header />
      <LandingPage />
    </Container>
  )
}

export default App
