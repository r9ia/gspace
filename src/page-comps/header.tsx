import { Button, Grid } from "@mui/material"
import Box from '@mui/material/Box';


function Header(){

    return (
        <>
        <div>
            <Grid container spacing={12}>
                <Box  sx = {{border:"1px dashed grey" }}>
                gspace.net 
            </Box>
            <Box  sx = {{border:"1px dashed grey" }}>
                <Button > modern</Button>
            <Button > myspace</Button>
            </Box>

            </Grid>

            <Grid>
                  <Button > projects</Button>
                   <Button > photos </Button>
                   <Button > contacts </Button>

            </Grid> 

        </div>
            
        </>
        
    )

}

export default Header