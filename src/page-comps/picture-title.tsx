import { Box, Typography } from "@mui/material"
import COLOURS from "../design/colours"

function PictureTitle() {

    return (
        <Box sx={{ textAlign: "left", marginBottom: { xs: 0, md: 2 }, display: "flex", gap: { xs: 1, md: 0 }, alignItems: "flex-start" }}>
            <Box sx={{ flexShrink: 0, width: { xs: "45%", md: 190 } }}>
                <Box component="h1" sx={{ fontSize: { xs: 25, md: 23 }, margin: "0 0 10px", color: COLOURS.text }}>Georgia Wu </Box>
                <img src="picture.jpg" alt="Georgia Wu" width={190} style={{ display: "block", width: "100%", height: "auto" }} />
            </Box>
            <Box sx={{ minWidth: 0, paddingTop: { xs: "1lh", md: 0 }, "@media (max-width:899.95px)": { "& .MuiTypography-root": { fontSize: 16 } }, margin: { xs: 0, md: 1 }, textAlign: "left", fontSize: "xs" }}>
                <Typography>"^-^"</Typography>
                <br></br>
                <Typography>19 years old</Typography>
                <Typography>Toronto, ON, CA</Typography>
                <Typography>University of Toronto ECE</Typography>
                <br />
                <Typography>Last Login: Oct 18/26</Typography>

            </Box>
        </Box>
    )

}

export default PictureTitle
