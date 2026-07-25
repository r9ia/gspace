import { createTheme } from '@mui/material/styles'
import { COLOURS } from './colours'

// this is where MUI's defaults (fonts, colours, etc) get overridden for every component
const theme = createTheme({
    palette: {
        primary: { main: COLOURS.accent },
        text: { primary: COLOURS.text },
        background: { default: COLOURS.background },
    },
    typography: {
        fontFamily: 'Verdana, Geneva, sans-serif',
        button: {
            textTransform: 'none',
        },
        fontSize: 15
        
    },
})

export default theme
