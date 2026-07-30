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

            <Typography sx={{ fontWeight: "bold", padding: 2, marginBottom: 0 }}>
                About me:
            </Typography>
            <Typography sx={{ padding: 2, marginTop: 0 }}>
                hi i like volleyball and badminton and detective games</Typography>
            <br />
        </Box>
    )
}

export default About
