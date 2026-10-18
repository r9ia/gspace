import { Stack } from "@mui/material"
import PictureTitle from "../page-comps/picture-title.tsx"
import Contact from "../page-comps/contact.tsx"
import URL from "../page-comps/url.tsx"
import Music from "../page-comps/youtubemusic.tsx"


function Sidebar({ isHome }: { isHome: boolean }) {
    return (
        <Stack spacing={{ xs: 0, md: 3 }} sx={{ width: { xs: "100%", md: 340 }, flexShrink: 0, display: { xs: isHome ? "contents" : "none", md: "flex" }, "& > *": { order: { xs: 3, md: 0 }, minWidth: 0 }, "& > :first-child": { order: { xs: 1, md: 0 } }, "& > :not(style) ~ :not(style)": { marginTop: { xs: 0, md: 3 } } }}>
            <PictureTitle />
            <Contact />
            <URL />
            <Music />
        </Stack>
    )
}

export default Sidebar
