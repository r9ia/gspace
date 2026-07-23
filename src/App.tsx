import { useState } from 'react'
import Header from "./page-comps/header.tsx"
import PictureTitle from './page-comps/picture-title.tsx'
import { Container } from '@mui/material'

function App() {

  return (
    <>
    <Container>
      <Header/>
    <PictureTitle/>

    </Container>
    
     
    </>
  )
}

export default App
