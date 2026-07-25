import { useEffect, useState } from "react"
import { useLocation, useRoutes } from "react-router-dom"
import { Box } from "@mui/material"
import LandingPage from "../pages/landing.tsx"
import ProjectsPage from "../pages/projects.tsx"

function AnimatedRoutes() {
    const location = useLocation()
    const element = useRoutes(
        [
            { path: "/", element: <LandingPage /> },
            { path: "/projects", element: <ProjectsPage /> },
        ],
        location,
    )

    const [displayLocation, setDisplayLocation] = useState(location)
    const [displayElement, setDisplayElement] = useState(element)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        if (location.pathname !== displayLocation.pathname) {
            setVisible(false)
        }
    }, [location.pathname, displayLocation.pathname])

    return (
        <Box
            sx={{ opacity: visible ? 1 : 0, transition: "opacity 400ms ease-in-out" }}
            onTransitionEnd={() => {
                if (!visible) {
                    setDisplayLocation(location)
                    setDisplayElement(element)
                    setVisible(true)
                }
            }}
        >
            {displayElement}
        </Box>
    )
}

export default AnimatedRoutes
