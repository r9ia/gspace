import { Typography, Box, Link } from "@mui/material"
import { getGlassTabSx } from "../design/liquid-glass"
import { useNavigate } from "react-router-dom"

function About() {
    const navigate = useNavigate()

    return (
        <Box sx={{}}>
            <Typography sx={{
                borderRadius: 0,
                fontSize: 20,
                color: "#8f2323",
                bgcolor: "#e39356",
                fontWeight: "bold",
                backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02) 1px, transparent 5px, transparent 5px)",
            }}>
                &nbsp;Georgia's Blurbs
            </Typography>

            <Typography sx={{ fontWeight: 'bold', px: 1, pt: 2, color: "#c87d45", }}>
                About me:
            </Typography>
            <Typography sx={{ px: 1, whiteSpace: 'pre-wrap' }}>
                Thanks for checking out my site! <br /><br />
                I'm a <span style={{ color: "green", fontWeight: "bold" }}>2T9 Computer Engineering Student + PEY @ UofT</span>. I'm
                looking to learn more about robotics, ML, game development and systems design, as well as
                expand my fullstack and web design skills.<br /><br />
                Outside of tech, I enjoy volleyball, badminton,
                mystery games, karaoke and clothes shopping. i've modeled this site off of late 2000's social media, 
                which I appreciate a lot for its straightforward and nostalgic design
                (but check out my projects to see examples of modern websites I've designed).

            </Typography>

            <Typography sx={{ fontWeight: 'bold', px: 1, pt: 2, color: "#c87d45", }}>
                Who'd I like to meet:
            </Typography>
            <Typography sx={{ px: 1, whiteSpace: 'pre-wrap' }}>
                everyone! feel free to contact me anytime through linkedin or email, and learn more
                about my{' '}
                <Link underline="hover" onClick={() => navigate("/experience")}>experience</Link>
                {' '}and{' '}
                <Link underline="hover" onClick={() => navigate("/projects")}>projects</Link>. ^_^
            </Typography>
            <br />
        </Box>
    )
}

export default About
