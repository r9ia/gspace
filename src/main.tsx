import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import './index.css'
import App from './App.js'
import theme from './design/theme.ts'

// Normalize old HashRouter bookmarks to the compact hash format.
if (window.location.hash.startsWith('#/')) {
  const route = window.location.hash.slice(2)
  window.history.replaceState(null, '', window.location.pathname + window.location.search + (route ? `#${route}` : ''))
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
