import { Button, Box, Stack } from "@mui/material"
import COLOURS from "../design/colours"

function Header() {

    return (
        <>
            <Box sx={{ bgcolor: COLOURS.accent, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px" }}>
                <h1 style={{ color: "white", margin: 0, fontSize: 28 }}>gspace.net</h1>
                <Stack direction="row" spacing={1}>
                    <Button sx={{ color: "white" }}>modern</Button>
                    <Button sx={{ color: "white" }}>myspace</Button>
                </Stack>
            </Box>
            <Box sx={{ bgcolor: COLOURS.navBar, display: "flex", gap: 1, padding: "6px 20px" }}>
                <Button sx={{ color: "white" }}>projects</Button>
                <Button sx={{ color: "white" }}>photos</Button>
                <Button sx={{ color: "white" }}>contacts</Button>
            </Box>
        </>
    )

}

export default Header
