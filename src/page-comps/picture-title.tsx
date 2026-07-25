import { Box,Typography} from "@mui/material"
import COLOURS from "../design/colours"

function PictureTitle() {

    return (
        <Box sx={{ textAlign: "left", marginBottom: 2, display: "flex", padding:"7"}}>
            <Box>
                <h1 style={{ fontSize: 26, margin: "0 0 10px" }}>georgia wu </h1>
            <img src="public/379.png" width={180} style={{ display: "block", border: `1px solid ${COLOURS.borderBlue}` }} />
            </Box>
             <Box sx={{ margin: 1, textAlign: "left", fontSize:"xs" }}>
                <Typography>"me trying to remember my day ones after making an led blink"</Typography>
                <p>19 years old</p>
                <p>Toronto, ON, CA</p>
            </Box>
        </Box>
    )

}

export default PictureTitle
