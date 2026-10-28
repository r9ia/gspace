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
        <Container disableGutters maxWidth="lg" sx={{ pb: { xs: "calc(80px + env(safe-area-inset-bottom, 0px))", md: 0 } }}>
            <Header />
            <Box sx={{ display: { xs: "grid", md: "flex" }, gridTemplateColumns: "minmax(0, 1fr)", gap: 3, alignItems: "flex-start", padding: { xs: "16px 12px", md: "20px" }, textAlign: "left" }}>
                <Sidebar isHome={location.pathname === "/"} />
                <Box
                    component="main"
                    sx={{ order: { xs: 2, md: 0 }, overflowWrap: "anywhere", flex: 1, minWidth: 0, opacity: visible ? 1 : 0, transition: "opacity 200ms ease-in-out" }}
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
