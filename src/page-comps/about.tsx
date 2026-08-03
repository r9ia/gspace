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

            <Typography sx={{ fontWeight: 'bold', px: 2, pt:2 }}>
                About me:
            </Typography>
            <Typography sx={{ px: 2, whiteSpace: 'pre-wrap' }}>
                hi i like volleyball and badminton and detective games.
                learn more about me through 'projects' or through my 'photography'
                ...
                <span style={{ color:"pink" }}>
                    hiii
                    </span>
            </Typography>

            <Typography sx={{ fontWeight: 'bold', px: 2, pt: 2 }}>
                Who'd I like to meet:
            </Typography>
            <Typography sx={{ px: 2, whiteSpace: 'pre-wrap' }}>
                everyone!! and speaking of go check out my projects and photography... ^^
            </Typography>
            <br />
        </Box>
    )
}

export default About
