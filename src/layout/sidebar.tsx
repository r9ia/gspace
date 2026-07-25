import { Box } from "@mui/material"
import PictureTitle from "../page-comps/picture-title.tsx"
import Contact from "../page-comps/contact.tsx"
import URL from "../page-comps/url.tsx"
import ProfileBox from "../page-comps/profile-box.tsx"

function Sidebar() {
    return (
        <Box sx={{ width: 340, flexShrink: 0 }}>
            <PictureTitle />
            <ProfileBox title="contacts">
                <Contact />
            </ProfileBox>
            <ProfileBox title="website URL">
                <URL />
            </ProfileBox>
        </Box>
    )
}

export default Sidebar
