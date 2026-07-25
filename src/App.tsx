import { useState } from 'react'
import Header from "./page-comps/header.tsx"
import PictureTitle from './page-comps/picture-title.tsx'
import { Container } from '@mui/material'
import About from './page-comps/about.tsx'
import URL from './page-comps/url.tsx'
import Status from './page-comps/status.tsx'

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
