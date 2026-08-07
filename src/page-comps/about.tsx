import { Typography, Box } from "@mui/material"
import { getGlassTabSx } from "../design/liquid-glass"

function About() {
    return (
        <Box sx={{}}>
            <Typography sx={{
                ...getGlassTabSx("246, 206, 157"), borderRadius: 0,
                fontSize: 20, color: "#c87d45", fontWeight: "bold",
            }}>
                &nbsp;Georgia's Blurbs
            </Typography>

            <Typography sx={{ fontWeight: 'bold', px: 2, pt: 2 }}>
                About me:
            </Typography>
            <Typography sx={{ px: 2, whiteSpace: 'pre-wrap' }}>
                Thanks for checking out my site! <br /><br />
                I'm a <span style={{ color: "purple", fontWeight: "bold" }}>2T9 Computer Engineering Student + PEY @ UofT</span>. I'm
                looking to learn more about robotics, ML, game development and systems design, as well as
                expand my fullstack and web design skills.<br /><br />
                Outside of tech, I enjoy volleyball, badminton,
                mystery games and shopping -{'>'} especially for clothes from the 2000s.

            </Typography>

            <Typography sx={{ fontWeight: 'bold', px: 2, pt: 2 }}>
                Who'd I like to meet:
            </Typography>
            <Typography sx={{ px: 2, whiteSpace: 'pre-wrap' }}>
                everyone! feel free to contact me anytime through linkedin or through email. and learn more
                about my experience and projects. ^_^
            </Typography>
            <br />
        </Box>
    )
}

export default About
