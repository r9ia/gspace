import { useState } from "react"
import { Box, Stack, Typography, styled } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { PROJECTS } from "../Info/projectInfo"
import { getGlassTabSx } from "../design/liquid-glass"

//constant heights
const CARD_HEIGHT = 400 
const IMAGE_SIZE = { xs: 120, sm: 150 } // fits within CARD_HEIGHT minus padding



// Pill-style glass button for direct project access
const GlassPillButton = styled(Box)<{ active?: boolean }>(({ active }) => ({
    padding: "6px 14px",
    borderRadius: 999,
    fontSize: 13,
    cursor: "pointer",
    whiteSpace: "nowrap",
    userSelect: "none",
    color: active ? "white" : "#1a4f8f",
    background: active
        ? "linear-gradient(180deg, #8fd3f9 0%, #3f9fe0 45%, #0d6fc7 100%)"
        : "rgba(255,255,255,0.5)",
    border: active ? "1px solid #0a4f8f" : "1px solid rgba(107,149,207,0.4)",
    boxShadow: active
        ? "inset 0 1px 1px rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.2)"
        : "none",
    transition: "all 0.2s ease",
    "&:hover": {
        background: active
            ? "linear-gradient(180deg, #a3ddfb 0%, #52aeeb 45%, #1a7fd6 100%)"
            : "rgba(255,255,255,0.8)",
    },
}))

// The full center card
const CoverflowCurrent = styled(Box)(() => ({
    position: "absolute",
    top: 0,
    left: "9%",
    width: "82%",
    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
    zIndex: 5,
}))

// Thinner glassy edge with a chevron centered inside — doubles as the nav button
const CoverflowEdge = styled(Box)<{ side: "left" | "right" }>(({ side }) => ({
    position: "absolute",
    top: 8,
    bottom: 8,
    width: "11%",
    [side]: "2%",
    borderRadius: 8,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, rgba(255,255,255,0.45), rgba(107,149,207,0.35))",
    border: "1px solid rgba(255,255,255,0.5)",
    boxShadow: "inset 0 1px 2px rgba(255,255,255,0.6), 0 2px 8px rgba(0,0,0,0.15)",
    opacity: 0.55,
    transform: side === "left"
        ? "perspective(800px) rotateY(35deg) scale(0.9)"
        : "perspective(800px) rotateY(-35deg) scale(0.9)",
    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
    zIndex: 2,
    "&:hover": {
        opacity: 0.85,
    },
    "& svg": {
        fontSize: 28,
        color: "#0d6fc7",
        filter: "drop-shadow(0 1px 1px rgba(255,255,255,0.6))",
    },
}))

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
    return (
        <Box sx={{
            ...getGlassTabSx("196, 215, 255"),
            color: "black",
            padding: 3,
            display: "flex",
            flexDirection: "column",   // image stacks above text now
            bgcolor: "rgba(196, 215, 255)",
            borderRadius: 2,
            height: CARD_HEIGHT,
            position: "relative",
            overflow: "hidden",
            "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "40%",
                background: "linear-gradient(180deg, rgba(255,255,255,0.5), rgba(255,255,255,0))",
                pointerEvents: "none",
            },
        }}>
            {/*cover image*/}
            <Box
                component="img"
                src={project.cover}
                sx={{
                    position: "relative",
                    zIndex: 1,
                    flexShrink: 0,
                    alignSelf: "center",   // keeps image centered horizontally instead of stretching full width
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    objectFit: "cover",
                    borderRadius: 1,
                }}
            />

            {/*text and stuff*/}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    minWidth: 0,
                    minHeight: 0,
                    overflow: "hidden",
                    mt: 2,   // ← was ml: 2, now spacing goes above instead of to the left
                }}
            >
                <Typography>
                    {project.date}
                </Typography>

                <Typography
                    component="h3"
                    sx={{
                        margin: "0 0 4px",
                        fontWeight: "bold",
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {project.title}
                </Typography>

                <Typography
                    sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    tags: {project.tags}
                </Typography>

                {project.description && (
                    <Typography
                        sx={{
                            margin: "0 0 4px",
                            display: "-webkit-box",
                            WebkitLineClamp: { xs: 2, sm: 2 },  // ← shrunk since vertical space is now tighter
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {project.description}
                    </Typography>
                )}

                <RouterLink
                    to={`/projects/${project.title}`}
                    rel="noreferrer"
                    style={{ marginTop: "auto", flexShrink: 0 }}
                >
                    <Typography>
                        {'>>>'} Continue Reading
                    </Typography>
                </RouterLink>
            </Box>
        </Box>
    )
}

function ProjectOverview() {
    const [index, setIndex] = useState(0)

    function goTo(newIndex: number) {
        setIndex((newIndex + PROJECTS.length) % PROJECTS.length)
    }

    function goNext() {
        goTo(index + 1)
    }

    function goPrev() {
        goTo(index - 1)
    }

    const currentProject = PROJECTS[index]

    return (
        <>
            <Typography sx={{
                borderRadius: 0,
                fontSize: 25, color: "#000000", fontWeight: "bold",
            }}>
                Project Gallery
            </Typography>

            <br />

            {/* Coverflow gallery: thin tilted glassy edges (with built-in nav arrows) peeking around center card */}
            <Box
                sx={{
                    position: "relative",
                    height: CARD_HEIGHT,   // matches ProjectCard's height
                    perspective: "1200px",
                    overflow: "hidden",
                }}
            >
                {PROJECTS.length > 1 && (
                    <CoverflowEdge side="left" onClick={goPrev}>
                        <ChevronLeftIcon />
                    </CoverflowEdge>
                )}

                <CoverflowCurrent key={currentProject.title}>
                    <ProjectCard project={currentProject} />
                </CoverflowCurrent>

                {PROJECTS.length > 1 && (
                    <CoverflowEdge side="right" onClick={goNext}>
                        <ChevronRightIcon />
                    </CoverflowEdge>
                )}
            </Box>

            <br />

            {/* direct-access project button row */}
            <Stack
                direction="row"
                spacing={1}
                sx={{ width: "100%", justifyContent: "center", flexWrap: "wrap", pb: 1, mb: 2 }}
            >
                {PROJECTS.map((p, i) => (
                    <GlassPillButton
                        key={p.title}
                        active={i === index}
                        onClick={() => goTo(i)}
                    >
                        {p.title}
                    </GlassPillButton>
                ))}
            </Stack>
        </>
    )
}

export default ProjectOverview