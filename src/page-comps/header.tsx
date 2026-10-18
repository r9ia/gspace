import { useState } from "react"
import { Box, IconButton, Link, Menu, MenuItem } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { NavLink, Link as RouterLink } from "react-router-dom"
import COLOURS from "../design/colours"
import { getGlassTabSx } from "../design/liquid-glass.tsx"

const pages = [
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Gallery", path: "/gallery" },
]

function Header() {
    const [anchor, setAnchor] = useState<HTMLElement | null>(null)
    return (
        <Box component="header">
            <Box sx={{ bgcolor: COLOURS.accent, display: "flex", justifyContent: "space-between", alignItems: "center", px: { xs: 1.5, md: 2.5 }, py: .75 }}>
                <Link component={RouterLink} to="/" underline="none" sx={{ color: "white", padding: 0, margin: 0, lineHeight: "1.5", fontSize: 28, fontWeight: { md: 500 }, letterSpacing: { md: "-1.68px" }, fontFamily: '\"Arial Rounded MT Bold\", system-ui, sans-serif' }}>gspace.net</Link>
                <IconButton
                    id="mobile-menu-button"
                    aria-label="Open navigation menu"
                    aria-controls={anchor ? "mobile-navigation" : undefined}
                    aria-haspopup="true"
                    aria-expanded={Boolean(anchor)}
                    onClick={(event) => setAnchor(event.currentTarget)}
                    sx={{ ...getGlassTabSx(), display: { xs: "inline-flex", md: "none" }, borderRadius: 1, width: 44, height: 44, my: "-1px" }}
                ><MenuIcon /></IconButton>
            </Box>
            <Menu id="mobile-navigation" anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}
                slotProps={{ list: { "aria-labelledby": "mobile-menu-button" }, paper: { sx: { ...getGlassTabSx("107,149,207", [.98, .9]), borderRadius: 1, minWidth: 200, display: { xs: "block", md: "none" } } } }}>
                {pages.map(({ label, path }) => (
                    <MenuItem key={path} component={NavLink} to={path} end={path === "/"} onClick={() => setAnchor(null)} sx={{ minHeight: 48, "&.active": { bgcolor: "rgba(255,255,255,.25)", fontWeight: "bold" } }}>{label}</MenuItem>
                ))}
            </Menu>
            <Box component="nav" aria-label="Main navigation" sx={{ ...getGlassTabSx(), display: { xs: "none", md: "flex" }, gap: 1, px: 2.5, py: .75, borderRadius: 0, alignItems: "center" }}>
                {pages.map(({ label, path }, index) => (
                    <Box key={path} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {index > 0 && <Box component="span" sx={{ color: COLOURS.accent }}>|</Box>}
                        <Link component={NavLink} to={path} end={path === "/"} sx={{ color: "white", fontSize: { xs: 20, md: 18 } }} underline="hover">{label}</Link>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
export default Header
