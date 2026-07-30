import { Box, Link, Typography } from "@mui/material"
import COLOURS from "../design/colours"
import { GLASS_TAB_SX } from "../design/liquid-glass"

function Contact() {

    return (
        <Box>
            <Typography sx = {{...GLASS_TAB_SX, borderRadius:0}}>contacting georgia</Typography>

        
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "flex-start", border:"dashed" }}>
            <Typography><Link underline="hover" href="mailto:you@example.com">send an email</Link></Typography>
            <Typography><Link underline="hover" href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">connect on linkedin</Link></Typography>
            <Typography><Link underline="hover" href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">github</Link></Typography>
            <Typography><Link underline="hover" href="https://devpost.com/your-username" target="_blank" rel="noopener noreferrer">devpost</Link></Typography>
        </Box>
        </Box>
    )

}

export default Contact