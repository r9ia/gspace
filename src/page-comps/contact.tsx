import { Box, Link, Typography } from "@mui/material"
import COLOURS from "../design/colours"

function Contact() {

    return (
        <Box>
            <Typography sx = {{bgcolor:COLOURS.accent, color:"white"}}>contacting georgia</Typography>

        
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "flex-start", border:"dashed" }}>
            <Typography><Link href="mailto:you@example.com">send an email</Link></Typography>
            <Typography><Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">connect on linkedin</Link></Typography>
            <Typography><Link href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">github</Link></Typography>
            <Typography><Link href="https://devpost.com/your-username" target="_blank" rel="noopener noreferrer">devpost</Link></Typography>
        </Box>
        </Box>
    )

}

export default Contact