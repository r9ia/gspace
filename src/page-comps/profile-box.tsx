import type { ReactNode } from "react"
import { Box } from "@mui/material"
import COLOURS from "../design/colours"

interface ProfileBoxProps {
    title: string
    variant?: "blue" | "orange"
    children: ReactNode
}

function ProfileBox({ title, variant = "blue", children }: ProfileBoxProps) {
    const headerBg = variant === "orange" ? COLOURS.sectionOrange : COLOURS.sectionBlue
    const headerColor = variant === "orange" ? COLOURS.redLabel : "white"

    return (
        <Box sx={{ border: `1px solid ${COLOURS.borderBlue}`, borderRadius: 1, marginBottom: 2, textAlign: "left", overflow: "hidden" }}>
            <Box sx={{ bgcolor: headerBg, color: headerColor, fontWeight: "bold", padding: "4px 10px" }}>
                {title}
            </Box>
            <Box sx={{ padding: "10px", bgcolor: "white" }}>
                {children}
            </Box>
        </Box>
    )
}

export default ProfileBox
