import { Box,  Link } from "@mui/material"
import { useNavigate } from "react-router-dom"
import COLOURS from "../design/colours"
import { getGlassTabSx } from "../design/liquid-glass.tsx"

const HEADER_FONT = '"Arial Rounded MT Bold", system-ui, sans-serif'


function Header() {
    const navigate = useNavigate()

    return (
        <>
            <Box sx={{
                bgcolor: COLOURS.accent, display: "flex", justifyContent: "space-between",
                alignItems: "center", padding: "6px 20px"
            }}>
                <h1 style={{
                    color: "white", margin: 0,
                    fontSize: 28, fontFamily: HEADER_FONT,
                    cursor: "pointer", padding: 0
                }} onClick={() => navigate("/")}>gspace.net</h1>
            </Box>
            <Box sx={{
                ...getGlassTabSx("107,149,207"), display: "flex",
                gap: 1, padding: "6px 20px", borderRadius: 0,
                alignItems: "center"
            }}>
                <Link sx={{ color: "white", fontSize: 18 }} underline="hover" onClick={() => navigate("/")}>home</Link>
                <Box component="span" sx={{ color: COLOURS.accent }}>|</Box>
                <Link sx={{ color: "white", fontSize: 18 }} underline="hover" onClick={() => navigate("/experience")}>experience</Link>
                <Box component="span" sx={{ color: COLOURS.accent }}>|</Box>
                <Link sx={{ color: "white", fontSize: 18 }} underline="hover" onClick={() => navigate("/projects")}>projects</Link>
                <Box component="span" sx={{ color: COLOURS.accent }}>|</Box>
                <Link sx={{ color: "white", fontSize: 18 }} underline="hover">photos</Link>
            </Box>
        </>
    )
}

export default Header