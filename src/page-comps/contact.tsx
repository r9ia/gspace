import { Box, Link, Typography } from "@mui/material"
import { getGlassTabSx } from "../design/liquid-glass"

function Contact() {

    return (
        <Box sx={{border:2, borderColor:"rgba(107,149,207,0.5)"}}>
            <Typography sx = {{...getGlassTabSx("107,149,207"), borderRadius:0, fontSize:17}}>&nbsp;contacting georgia</Typography>

        
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "flex-start"}}>
            <Typography><Link underline="hover" href="mailto:you@example.com">send an email</Link></Typography>
            <Typography><Link underline="hover" href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">connect on linkedin</Link></Typography>
            <Typography><Link underline="hover" href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">follow on github</Link></Typography>
            <Typography><Link underline="hover" href="https://devpost.com/your-username" target="_blank" rel="noopener noreferrer">follow on devpost</Link></Typography>
            <Typography><Link underline="hover" href="https://devpost.com/your-username" target="_blank" rel="noopener noreferrer">contact my phone</Link></Typography>
            <Typography><Link underline="hover" href="https://devpost.com/your-username" target="_blank" rel="noopener noreferrer">read my resume</Link></Typography>
        </Box>
        </Box>
    )

}

export default Contact