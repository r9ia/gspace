import { Stack} from "@mui/material"
import PictureTitle from "../page-comps/picture-title.tsx"
import Contact from "../page-comps/contact.tsx"
import URL from "../page-comps/url.tsx"
import Music from "../page-comps/youtubemusic.tsx"


function Sidebar() {
    return (
        <Stack spacing={3} sx={{ width: 340, flexShrink: 0 }}>
            <PictureTitle />

            <Contact />

            <URL />
            <Music/>

        </Stack>
    )
}

export default Sidebar
