import type { SxProps, Theme } from "@mui/material"
import { getGlassTabSx } from "./liquid-glass"

/**
 * Common chip styling matching the orange tag chips in the experience section.
 */
export const ORANGE_CHIP_SX: SxProps<Theme> = {
    ...getGlassTabSx("246, 206, 157"),
    backgroundImage:
        "repeating-linear-gradient(0deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02) 1px, transparent 5px, transparent 5px)",
    bgcolor: "#e39356",
    color: "#000000",
    borderRadius: 1,
    px: 1,
    fontSize: 12,
}

export default ORANGE_CHIP_SX

/** Subtle blue glass tags for the projects overview. */
export const BLUE_GLASS_CHIP_SX: SxProps<Theme> = {
    ...getGlassTabSx("107,149,207", [0.24, 0.1]),
    color: "#1a4f8f",
    border: "1px solid rgba(107,149,207,0.3)",
    boxShadow:
        "0 2px 8px rgba(107,149,207,0.12), inset 0 1px 1px rgba(255,255,255,0.75), inset 0 -1px 3px rgba(107,149,207,0.1)",
    borderRadius: 1,
    px: 1,
    fontSize: 12,
}

