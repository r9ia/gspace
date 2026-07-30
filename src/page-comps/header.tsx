import { Button, Box, Stack, Link } from "@mui/material"
import { useNavigate } from "react-router-dom"
import COLOURS from "../design/colours"
import {GLASS_TAB_SX} from "../design/liquid-glass.tsx"

const HEADER_FONT = '"Arial Rounded MT Bold", system-ui, sans-serif'


function Header() {
    const navigate = useNavigate()

    return (
        <>
            <Box sx={{ bgcolor: COLOURS.accent, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px"}}>
                <h1 style={{ color: "white", margin: 0, fontSize: 28, fontFamily: HEADER_FONT, cursor: "pointer" }} onClick={() => navigate("/")}>gspace.net</h1>
                <Stack direction="row" spacing={1}>
                    <Link  sx={{ color: "white" }}>modern</Link>
                    <p style={{ color: "white" }}>/</p>
                    <Link sx={{ color: "white"}}>myspace</Link>
                </Stack>
            </Box>
            <Box sx={{ ...GLASS_TAB_SX, display: "flex", gap: 1, padding: "6px 20px", borderRadius:0 }}>
                <Link sx={{ color: "white" }} underline="hover" onClick={() => navigate("/")}>home</Link>
                <p style={{ color: COLOURS.accent }}>|</p>
                <Link sx={{ color: "white" }} underline="hover" onClick={() => navigate("/projects")}>projects</Link>
                <p style={{ color: COLOURS.accent}}>|</p>
                <Link sx={{ color: "white"}} underline="hover">photos</Link>
            </Box>
        </>
    )
}

export default Header