import { Box } from "@mui/material"
import PictureTitle from "../page-comps/picture-title.tsx"
import Contact from "../page-comps/contact.tsx"
import URL from "../page-comps/url.tsx"

function Sidebar() {
    return (
        <Box sx={{ width: 340, flexShrink: 0 }}>
            <PictureTitle />
            
                <Contact />
            
                <URL />
            
        </Box>
    )
}

export default Sidebar
