import { Box, Typography } from "@mui/material"

function URL() {
    return (
        <Box sx={{ border: 2 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: { xs: 19, md: 17 } }}>&nbsp;Website URL:</Typography>
            <Typography sx={{ overflowWrap: "anywhere" }}>&nbsp;&nbsp;&nbsp;https://r9ia.github.io/gspace/</Typography>

        </Box>

    )
}
export default URL
