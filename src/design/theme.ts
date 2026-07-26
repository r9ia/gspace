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
        button: {
            textTransform: 'none',
        },
        fontSize: 12,
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    padding: 2,
                },
            },
        },
    },
})

export default theme