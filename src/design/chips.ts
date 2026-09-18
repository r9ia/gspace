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
