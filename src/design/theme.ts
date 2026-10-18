import { createTheme } from '@mui/material/styles'
import { COLOURS } from './colours'

const theme = createTheme({
    palette: {
        primary: { main: COLOURS.accent },
        text: { primary: COLOURS.text },
        background: { default: COLOURS.background },
    },
    typography: {
        fontFamily: 'Verdana, Geneva, sans-serif',
        body1: {
            '@media (max-width:899.95px)': { fontSize: '1rem', lineHeight: 1.65 },
        },
        body2: {
            '@media (max-width:899.95px)': { fontSize: '0.9rem', lineHeight: 1.6 },
        },
        button: {
            textTransform: 'none',
        },
        fontSize: 12,
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    textDecorationColor: 'black', 
                    padding: 2,
                },
            },
        },
        MuiLink: {
        styleOverrides: {
            root: {
                textDecorationColor: 'black',
                cursor: "pointer"
                
            },
        },
    },
    },
})

export default theme