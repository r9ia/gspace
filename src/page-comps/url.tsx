import { Box, Typography } from "@mui/material"

function URL() {
    return (
        <Box sx={{border:"dashed"}}>
            <Typography sx={{fontWeight:"bold", fontSize:17}}>website url:</Typography>
            <Typography sx={{}}>www.hi.ca</Typography>

        </Box>
        
    )
}
export default URL
