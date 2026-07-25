import { Box } from "@mui/material"
import PictureTitle from "../page-comps/picture-title.tsx"
import Status from "../page-comps/status.tsx"
import Contact from "../page-comps/contact.tsx"
import URL from "../page-comps/url.tsx"
import About from "../page-comps/about.tsx"
import Music from "../page-comps/music.tsx"
import ProfileBox from "../page-comps/profile-box.tsx"

function LandingPage() {
    return (
        <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start", padding: "20px", textAlign: "left" }}>
            <Box sx={{ width: 260, flexShrink: 0 }}>
                <PictureTitle />
                <Status />
                <ProfileBox title="Contacting georgia">
                    <Contact />
                </ProfileBox>
                <ProfileBox title="georgia's URL">
                    <URL />
                </ProfileBox>
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
                <ProfileBox title="georgia's Blurbs" variant="orange">
                    <About />
                </ProfileBox>
                <ProfileBox title="now listening" variant="orange">
                    <Music />
                </ProfileBox>
            </Box>
        </Box>
    )
}

export default LandingPage
