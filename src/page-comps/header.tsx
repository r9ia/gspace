import { Button, Box, Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"
import COLOURS from "../design/colours"

const HEADER_FONT = '"Arial Rounded MT Bold", system-ui, sans-serif'

const GLASS_TAB_SX = {
    color: "white",
    fontFamily: HEADER_FONT,
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: 2,
    transition: "background 200ms ease",
    "&:hover": {
        background: "rgba(255, 255, 255, 0.28)",
    },
}

function Header() {
    const navigate = useNavigate()

    return (
        <>
            <Box sx={{ bgcolor: COLOURS.accent, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px" }}>
                <h1 style={{ color: "white", margin: 0, fontSize: 28, fontFamily: HEADER_FONT, cursor: "pointer" }} onClick={() => navigate("/")}>gspace.net</h1>
                <Stack direction="row" spacing={1}>
                    <Button sx={GLASS_TAB_SX}>modern</Button>
                    <Button sx={GLASS_TAB_SX}>myspace</Button>
                </Stack>
            </Box>
            <Box sx={{ bgcolor: COLOURS.navBar, display: "flex", gap: 1, padding: "6px 20px" }}>
                <Button sx={GLASS_TAB_SX} onClick={() => navigate("/")}>home</Button>
                <Button sx={GLASS_TAB_SX} onClick={() => navigate("/projects")}>projects</Button>
                <Button sx={GLASS_TAB_SX}>photos</Button>
            </Box>
        </>
    )

}

export default Header
