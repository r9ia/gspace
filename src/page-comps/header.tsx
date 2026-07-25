import { Button, Box, Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"
import COLOURS from "../design/colours"

const HEADER_FONT = '"Arial Rounded MT Bold", system-ui, sans-serif'

function Header() {
    const navigate = useNavigate()

    return (
        <>
            <Box sx={{ bgcolor: COLOURS.accent, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px" }}>
                <h1 style={{ color: "white", margin: 0, fontSize: 28, fontFamily: HEADER_FONT, cursor: "pointer" }} onClick={() => navigate("/")}>gspace.net</h1>
                <Stack direction="row" spacing={1}>
                    <Button sx={{ color: "white", fontFamily: HEADER_FONT }}>modern</Button>
                    <Button sx={{ color: "white", fontFamily: HEADER_FONT }}>myspace</Button>
                </Stack>
            </Box>
            <Box sx={{ bgcolor: COLOURS.navBar, display: "flex", gap: 1, padding: "6px 20px" }}>
                <Button sx={{ color: "white", fontFamily: HEADER_FONT }} onClick={() => navigate("/")}>home</Button>
                <Button sx={{ color: "white", fontFamily: HEADER_FONT }} onClick={() => navigate("/projects")}>projects</Button>
                <Button sx={{ color: "white", fontFamily: HEADER_FONT }}>photos</Button>
            </Box>
        </>
    )

}

export default Header
