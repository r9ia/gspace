import { useEffect, useState } from "react"
import { useLocation, useOutlet } from "react-router-dom"
import { Box, Container } from "@mui/material"
import Header from "../page-comps/header.tsx"
import Sidebar from "./sidebar.tsx"

function DefaultLayout() {
    const location = useLocation()
    const outlet = useOutlet()

    const [displayLocation, setDisplayLocation] = useState(location)
    const [displayOutlet, setDisplayOutlet] = useState(outlet)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        if (location.pathname !== displayLocation.pathname) {
            setVisible(false)
        }
    }, [location.pathname, displayLocation.pathname])

    return (
        <Container disableGutters maxWidth="lg">
            <Header />
            <Box sx={{ display: "flex", gap: 3, alignItems: "flex-start", padding: "20px", textAlign: "left" }}>
                <Sidebar />
                <Box
                    sx={{ flex: 1, minWidth: 0, opacity: visible ? 1 : 0, transition: "opacity 400ms ease-in-out" }}
                    onTransitionEnd={() => {
                        if (!visible) {
                            setDisplayLocation(location)
                            setDisplayOutlet(outlet)
                            setVisible(true)
                        }
                    }}
                >
                    {displayOutlet}
                </Box>
            </Box>
        </Container>
    )
}

export default DefaultLayout