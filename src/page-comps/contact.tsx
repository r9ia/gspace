import { Box, Link, Typography } from "@mui/material"
import { getGlassTabSx } from "../design/liquid-glass"

function Contact() {

    return (
        <Box sx={{ border: 2, borderColor: "rgba(107,149,207,0.5)" }}>
            <Typography sx={{ ...getGlassTabSx("107,149,207"), borderRadius: 0, fontSize: { xs: 19, md: 17 } }}>&nbsp;Contacting Georgia</Typography>


            <Box sx={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
                columnGap: 1,
                overflowWrap: "normal",
                alignItems: "flex-start",
                "& > .MuiTypography-root": {
                    minWidth: 0,
                },
            }}>
                <Typography sx={{fontSize: { xs: 19, md: 15 }}}><Link underline="hover" href="mailto:georgiamwu@gmail.com">Send an Email</Link></Typography>
                <Typography sx={{fontSize: { xs: 19, md: 15 }}}><Link underline="hover" href="https://www.linkedin.com/in/georgia-wu/" target="_blank" rel="noopener noreferrer">Connect on Linkedin</Link></Typography>
                <Typography sx={{fontSize: { xs: 19, md: 15 }}}><Link underline="hover" href="https://github.com/r9ia" target="_blank" rel="noopener noreferrer">Follow on Github</Link></Typography>
                <Typography sx={{fontSize: { xs: 19, md: 15 }}}><Link underline="hover" href="https://devpost.com/_rgia" target="_blank" rel="noopener noreferrer">Follow on Devpost</Link></Typography>
                <Typography sx={{fontSize: { xs: 19, md: 15 }}}><Link underline="hover" href="https://drive.google.com/file/d/1sv6eFBpxh0uxdDoewzNvDiwsrP3ZX6wu/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</Link></Typography>
            </Box>
        </Box>
    )

}

export default Contact
