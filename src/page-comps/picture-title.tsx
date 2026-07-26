import { Box,Typography} from "@mui/material"
import COLOURS from "../design/colours"

function PictureTitle() {

    return (
        <Box sx={{ textAlign: "left", marginBottom: 2, display: "flex", padding:"7"}}>
            <Box>
                <h1 style={{ fontSize: 26, margin: "0 0 10px", color: COLOURS.text }}>georgia wu </h1>
            <img src="public/379.png" width={180} style={{ display: "block", border: `1px solid ${COLOURS.borderBlue}` }} />
            </Box>
             <Box sx={{ margin: 1, textAlign: "left", fontSize:"xs" }}>
                <Typography>"^_^"</Typography>
                <br></br>
                <Typography>19 years old</Typography>
                <Typography>Toronto, ON, CA</Typography>
                <Typography>University of Toronto ECE</Typography>
                <br/>
                <Typography>Last Login: July 26/26</Typography>
            </Box>
        </Box>
    )

}

export default PictureTitle
