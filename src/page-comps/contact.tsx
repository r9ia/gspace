import { Box, Link, Typography } from "@mui/material"
import { getGlassTabSx } from "../design/liquid-glass"

function Contact() {

    return (
        <Box sx={{ border: 2, borderColor: "rgba(107,149,207,0.5)" }}>
            <Typography sx={{ ...getGlassTabSx("107,149,207"), borderRadius: 0, fontSize: 17 }}>&nbsp;contacting georgia</Typography>


            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "flex-start" }}>
                <Typography><Link underline="hover" href="mailto:you@example.com">send an email</Link></Typography>
                <Typography><Link underline="hover" href="https://www.linkedin.com/in/georgia-wu/" target="_blank" rel="noopener noreferrer">connect on linkedin</Link></Typography>
                <Typography><Link underline="hover" href="https://github.com/r9ia" target="_blank" rel="noopener noreferrer">follow on github</Link></Typography>
                <Typography><Link underline="hover" href="https://devpost.com/_rgia" target="_blank" rel="noopener noreferrer">follow on devpost</Link></Typography>
                <Typography><Link underline="hover" href="tel:+16476368802" target="_blank" rel="noopener noreferrer">contact my phone</Link></Typography>
                <Typography><Link underline="hover" href="https://drive.google.com/file/d/1MS_Ynax-k_di1dTadV4Q1ahWNZPR56kR/view?usp=sharing" target="_blank" rel="noopener noreferrer">read my resume</Link></Typography>
            </Box>
        </Box>
    )

}

export default Contact