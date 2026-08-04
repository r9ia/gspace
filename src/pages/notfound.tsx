import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"


function NotFound(){

    return(
        <Box>
            Sorry, this page doesn't exist! 

            <Link to={"/"}>
            <Typography>
                return to home
            </Typography>
            
            </Link>

        </Box>
    )
}

export default NotFound