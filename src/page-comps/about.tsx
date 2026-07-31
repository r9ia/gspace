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
            <Typography sx={{ padding: 2, marginTop: 0, whiteSpace: 'pre-wrap' }}>
                hi i like volleyball and badminton and detective games 
                learn more about me through 'projects' or through my 'photography'
                sdfsdfsdfsdffsdfsdfsdfsdfsdddddlorema ipsumdfds
                sdfsdfsdfsdffsdfsdfsdfsdfsdddddlorema ipsumdfds
                sdfsdfsdfsdffsdfsdfsdfsdfsdddddlorema ipsumdfds
                sdfsdfsdfsdffsdfsdfsdfsdfsdddddlorema ipsumdfds
                sdfsdfsdfsdffsdfsdfsdfsdfsdddddlorema ipsumdfds
                sdfsdfsdfsdffsdfsdfsdfsdfsdddddlorema ipsumdfds
                
                
                
                
            </Typography>
            <Typography sx={{ fontWeight: "bold", padding: 2, marginBottom: 0 }}>
                Who'd I like to meet:
            </Typography>
            <Typography sx={{ padding: 2, marginTop: 0, whiteSpace: 'pre-wrap' }}>
                everyone!! and speaking of go check out my projects and photography... ^^
            </Typography>
            <br />
        </Box>
    )
}

export default About
