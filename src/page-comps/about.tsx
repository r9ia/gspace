import { Typography, Box, Link } from "@mui/material"
import { useNavigate } from "react-router-dom"

function About() {
    const navigate = useNavigate()

    return (
        <Box sx={{}}>
            <Typography sx={{
                borderRadius: 0,
                fontSize: { xs: 22, md: 20 },
                color: "#8f2323",
                bgcolor: "#e39356",
                fontWeight: "bold",
                backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02) 1px, transparent 5px, transparent 5px)",
            }}>
                &nbsp;Georgia's Blurbs
            </Typography>

            <Typography sx={{ fontWeight: 'bold', px: 1, pt: 2, color: "#c87d45" }}>
                About me:
            </Typography>
            <Typography sx={{ px: 1, whiteSpace: 'pre-wrap' }}>
                Thanks for checking out my site! <br /><br />
                I'm a <span style={{ color: "green", fontWeight: "bold" }}>2T9 Computer Engineering Student + PEY @ UofT</span>. I'm primarily
                interested in software engineering, with an interest to explore robotics, machine learning, AI safety and game development.
                I also enjoy designing websites ^^.<br /><br />
                My hobbies include karaoke, shopping and playing volleyball and badminton.
                if any hiring managers for SWE Internships Summer 2027 want to play a match, let me know ASAP....

            </Typography>

            <Typography sx={{ fontWeight: 'bold', px: 1, pt: 2, color: "#c87d45", }}>
                Who'd I like to meet:
            </Typography>
            <Typography sx={{ px: 1, whiteSpace: 'pre-wrap' }}>
                Everyone! Feel free to contact me about anything through linkedin or email, and learn more
                about my{' '}
                <Link variant="inherit" underline="hover" sx={{ p: 0, verticalAlign: 'baseline', fontWeight: "bold" }} onClick={() => navigate("/experience")}>experience</Link>
                {' '}and{' '}
                <Link variant="inherit" underline="hover" sx={{ p: 0, verticalAlign: 'baseline', fontWeight: "bold" }} onClick={() => navigate("/projects")}>projects</Link>. ^^
            </Typography>
            <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
        </Box>
    )
}

export default About
