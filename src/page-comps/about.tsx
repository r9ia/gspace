import { Typography, Box } from "@mui/material"
import COLOURS from "../design/colours"
import { yellow } from "@mui/material/colors"

function About() {
    return (
        <Box sx={{}}>
            <Typography sx={{ bgcolor: "#facd96", fontSize: 20, border: "dashed" }}>
                Georgia's Blurbs
            </Typography>

            <Typography sx={{ fontWeight: "bold", padding: 2, marginBottom:0 }}>
                About me:
            </Typography> 
            <Typography sx={{ padding: 2, marginTop:0 }}>
                hi i like volleyball and badminton and detective games</Typography>
            <br />
        </Box>
    )
}

export default About
