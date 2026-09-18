import React, { useState, useEffect, useRef, useCallback } from "react"
import { Box, Stack, Typography, styled } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import anime from "animejs"
import { PROJECTS, type ProjectInterface } from "../Info/projectInfo"
import { getGlassTabSx } from "../design/liquid-glass"

// Dimensions for the 3D cover cards
const CARD_WIDTH = 250
const CARD_HEIGHT = 250
const STAGE_HEIGHT = 325

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

// Glassy navigation chevron buttons
const NavChevron = styled(Box)<{ side: "left" | "right" }>(({ side }) => ({
    position: "absolute",
    top: "38%",
    [side]: 12,
    width: 44,
    height: 44,
    borderRadius: "50%",
    zIndex: 120,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(196,215,255,0.45))",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.8)",
    boxShadow: "0 6px 16px rgba(13, 111, 199, 0.25), inset 0 1px 1px rgba(255,255,255,0.9)",
    color: "#0d6fc7",
    transition: "all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
    userSelect: "none",
    "&:hover": {
        transform: "scale(1.1)",
        background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(196,215,255,0.65))",
        boxShadow: "0 8px 22px rgba(13, 111, 199, 0.35), inset 0 1px 2px rgba(255,255,255,1)",
    },
    "&:active": {
        transform: "scale(0.95)",
    },
}))

// Project detail card shown below the 3D stage
function ActiveProjectDetails({ project }: { project: ProjectInterface }) {
    return (
        <Box
            sx={{
                color: "black",
                padding: { xs: 2.5, sm: 3 },
                borderRadius: 2,
                position: "relative",
                overflow: "hidden",
                minHeight: 180,
                display: "flex",
                flexDirection: "column",
                transition: "opacity 0.3s ease",
            }}
        >
            <Typography sx={{ fontSize: 13, color: "#1a4f8f", fontWeight: 600, mb: 0.5 }}>
                {project.date}
            </Typography>

            <Typography
                component="h3"
                sx={{
                    margin: "0 0 6px",
                    fontWeight: 800,
                    fontSize: { xs: 20, sm: 22 },
                    color: "#08060d",
                }}
            >
                {project.title}
            </Typography>

            <Typography
                sx={{
                    fontSize: 13,
                    color: "#2c3e50",
                    mb: 1,
                    fontWeight: 500,
                }}
            >
                <Box component="span" sx={{ fontWeight: 700, color: "#0d6fc7" }}></Box> {project.tags}
            </Typography>

            {project.description && (
                <Typography
                    sx={{
                        margin: "0 0 14px",
                        fontSize: 14,
                        lineHeight: 1.5,
                        color: "#222",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {project.description}
                </Typography>
            )}

            <Stack direction="row" spacing={2} sx={{ mt: "auto", pt: 1, alignItems: "center" }}>
                <RouterLink
                    to={`/projects/${encodeURIComponent(project.title)}`}
                    style={{ textDecoration: "none" }}
                >
                    <Typography
                        sx={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#0d6fc7",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.5,
                            transition: "transform 0.15s ease",
                            "&:hover": {
                                textDecoration: "underline",
                                transform: "translateX(3px)",
                            },
                        }}
                    >
                        {"\u00BB\u00BB\u00BB Continue Reading"}
                    </Typography>
                </RouterLink>

                {project.links?.map((link) => (
                    <Box
                        key={link.label}
                        component="a"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                            fontSize: 12,
                            color: "#1a4f8f",
                            textDecoration: "none",
                            padding: "3px 10px",
                            borderRadius: 999,
                            background: "rgba(255,255,255,0.6)",
                            border: "1px solid rgba(107,149,207,0.4)",
                            "&:hover": {
                                background: "rgba(255,255,255,0.9)",
                                textDecoration: "underline",
                            },
                        }}
                    >
                        {link.label}
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}

function ProjectOverview() {
    const [activeIndex, setActiveIndex] = useState(0)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])
    const stageRef = useRef<HTMLDivElement | null>(null)

    // Virtual continuous position: 0.0, 1.0, 2.0...
    const currentPos = useRef(0)
    const animInstance = useRef<anime.AnimeInstance | null>(null)

    // Drag / gesture tracking
    const isDragging = useRef(false)
    const dragStartX = useRef(0)
    const dragStartPos = useRef(0)
    const dragMoved = useRef(false)

    // Compute and apply continuous Cover Flow 3D transforms directly to DOM elements
    const updateTransforms = useCallback((pos: number) => {
        cardRefs.current.forEach((card, i) => {
            if (!card) return

            const dist = i - pos
            const absDist = Math.abs(dist)

            // Outside visual range -> hide for optimal performance
            if (absDist > 3.5) {
                card.style.display = "none"
                return
            }
            card.style.display = "block"

            let translateX = 0
            let translateZ = 0
            let rotateY = 0
            let brightness = 1
            let opacity = 1
            const zIndex = Math.round(100 - absDist * 10)

            if (absDist < 0.001) {
                // Front and center card
                translateX = 0
                translateZ = 0
                rotateY = 0
                brightness = 1
                opacity = 1
            } else if (dist < 0) {
                // Stack to the left
                const factor = Math.min(1, Math.max(0, -dist))
                rotateY = factor * 55
                translateX = -170 * factor + (dist + 1 * factor) * 75
                translateZ = -180 * factor
                brightness = 1 - factor * 0.35
                opacity = Math.max(0.2, 1 - (absDist - 1) * 0.3)
            } else {
                // Stack to the right
                const factor = Math.min(1, Math.max(0, dist))
                rotateY = -factor * 55
                translateX = 170 * factor + (dist - 1 * factor) * 75
                translateZ = -180 * factor
                brightness = 1 - factor * 0.35
                opacity = Math.max(0.2, 1 - (absDist - 1) * 0.3)
            }

            // Hardware-accelerated GPU transform
            card.style.transform = `translate3d(${translateX}px, 0px, ${translateZ}px) rotateY(${rotateY}deg)`
            card.style.zIndex = String(Math.max(1, zIndex))
            card.style.filter = `brightness(${Math.max(0.5, brightness)})`
            card.style.opacity = String(opacity)
            card.style.cursor = absDist < 0.4 ? "default" : "pointer"
        })
    }, [])

    // Smoothly animate to target index with Anime.js
    const animateTo = useCallback((targetIndex: number, duration = 600) => {
        const clampedIndex = Math.max(0, Math.min(PROJECTS.length - 1, targetIndex))
        
        if (animInstance.current) {
            animInstance.current.pause()
        }

        const animObj = { pos: currentPos.current }

        animInstance.current = anime({
            targets: animObj,
            pos: clampedIndex,
            duration: duration,
            easing: "easeOutCubic",
            update: () => {
                currentPos.current = animObj.pos
                updateTransforms(animObj.pos)
            },
            complete: () => {
                currentPos.current = clampedIndex
                updateTransforms(clampedIndex)
                setActiveIndex(clampedIndex)
            },
        })
    }, [updateTransforms])

    // Step next/previous
    const goNext = useCallback(() => {
        if (activeIndex < PROJECTS.length - 1) {
            animateTo(activeIndex + 1)
        } else {
            animateTo(0) // loop back
        }
    }, [activeIndex, animateTo])

    const goPrev = useCallback(() => {
        if (activeIndex > 0) {
            animateTo(activeIndex - 1)
        } else {
            animateTo(PROJECTS.length - 1) // loop back
        }
    }, [activeIndex, animateTo])

    // Initial positioning
    useEffect(() => {
        updateTransforms(0)
    }, [updateTransforms])

    // Keyboard navigation (Left/Right arrow keys)
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "ArrowLeft") {
                goPrev()
            } else if (e.key === "ArrowRight") {
                goNext()
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [goNext, goPrev])

    // Mouse drag / Touch gesture handlers
    const handlePointerDown = (clientX: number) => {
        if (animInstance.current) animInstance.current.pause()
        isDragging.current = true
        dragMoved.current = false
        dragStartX.current = clientX
        dragStartPos.current = currentPos.current
    }

    const handlePointerMove = (clientX: number) => {
        if (!isDragging.current) return
        const deltaX = clientX - dragStartX.current
        if (Math.abs(deltaX) > 5) {
            dragMoved.current = true
        }
        // Sensitivity: 220px drag = 1 card jump
        const newPos = dragStartPos.current - deltaX / 220
        const clampedPos = Math.max(-0.4, Math.min(PROJECTS.length - 0.6, newPos))
        currentPos.current = clampedPos
        updateTransforms(clampedPos)
    }

    const handlePointerUp = () => {
        if (!isDragging.current) return
        isDragging.current = false
        // Snap to closest card
        const target = Math.round(currentPos.current)
        const clampedTarget = Math.max(0, Math.min(PROJECTS.length - 1, target))
        animateTo(clampedTarget, 450)
    }

    const handleCardClick = (i: number) => {
        if (dragMoved.current) return
        if (i !== activeIndex) {
            animateTo(i)
        }
    }

    const currentProject = PROJECTS[activeIndex]

    return (
        <Box sx={{ width: "100%", maxWidth: 960, mx: "auto", userSelect: "none" }}>
            {/* Header */}
            <Box sx={{ borderRadius: 2 }}>
                {/* Header row */}
                <Box sx={{
                    backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02) 1px, transparent 5px, transparent 5px)",
                    px: 1,
                    bgcolor: "#cfdaf0"
                }}>
                    <Typography sx={{
                        fontSize: 20,
                        color: "#000000",
                        fontWeight: 550
                    }}>
                        Projects
                    </Typography>
                </Box>

                {/* Sub row */}
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 1,
                    bgcolor: "#eceef2",
                    borderTop: "1.5px solid #f4f5f7",
                }}>
                    <Typography sx={{ fontSize: 16 }}>
                        Drag, Scroll or Use Arrows.
                    </Typography>
                </Box>
            </Box>
            <br />

            {/* 3D Cover Flow Stage */}
            <Box
                ref={stageRef}
                onMouseDown={(e) => handlePointerDown(e.clientX)}
                onMouseMove={(e) => handlePointerMove(e.clientX)}
                onMouseUp={handlePointerUp}
                onMouseLeave={handlePointerUp}
                onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
                onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
                onTouchEnd={handlePointerUp}
                sx={{
                    position: "relative",
                    height: STAGE_HEIGHT,
                    perspective: "1000px",
                    perspectiveOrigin: "50% 45%",
                    overflow: "hidden",
                    borderRadius: 3,
                    cursor: "grab",
                    "&:active": { cursor: "grabbing" },
                    background: "radial-gradient(ellipse at 50% 55%, rgba(196, 215, 255, 0.45) 0%, rgba(255, 255, 255, 0.1) 70%)",
                    border: "1px solid rgba(255, 255, 255, 0.6)",
                    boxShadow: "inset 0 1px 2px rgba(255,255,255,0.8), 0 8px 30px rgba(107,149,207,0.15)",
                }}
            >
                {/* Glossy floor reflection line */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 95,
                        left: "10%",
                        right: "10%",
                        height: "1px",
                        background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.85) 50%, transparent 100%)",
                        boxShadow: "0 0 12px rgba(255,255,255,0.9)",
                        pointerEvents: "none",
                        zIndex: 2,
                    }}
                />

                {/* Left Navigation Chevron */}
                {PROJECTS.length > 1 && (
                    <NavChevron
                        side="left"
                        onClick={(e: React.MouseEvent) => {
                            e.stopPropagation()
                            goPrev()
                        }}
                        aria-label="Previous project"
                    >
                        <ChevronLeftIcon sx={{ fontSize: 30 }} />
                    </NavChevron>
                )}

                {/* Cover Flow 3D Cards */}
                {PROJECTS.map((project, i) => (
                    <Box
                        key={project.title}
                        ref={(el) => {
                            cardRefs.current[i] = el as HTMLDivElement | null
                        }}
                        onClick={() => handleCardClick(i)}
                        sx={{
                            position: "absolute",
                            left: "50%",
                            top: 24,
                            width: CARD_WIDTH,
                            height: CARD_HEIGHT,
                            marginLeft: `-${CARD_WIDTH / 2}px`,
                            transformStyle: "preserve-3d",
                            willChange: "transform, filter, opacity",
                            // Classic iTunes reflection
                            WebkitBoxReflect: "below 6px linear-gradient(transparent 55%, rgba(255,255,255,0.35))",
                        }}
                    >
                        {/* Glass card container with Frutiger Aero liquid glass styling */}
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "14px",
                                overflow: "hidden",
                                position: "relative",
                                background: "linear-gradient(145deg, rgba(255,255,255,0.65), rgba(196,215,255,0.4))",
                                border: "1.5px solid rgba(255, 255, 255, 0.75)",
                                boxShadow: "0 14px 30px rgba(13, 111, 199, 0.28), inset 0 1px 2px rgba(255,255,255,0.9)",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {/* Project Cover Image */}
                            <Box
                                component="img"
                                src={project.cover}
                                alt={project.title}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    userSelect: "none",
                                    pointerEvents: "none",
                                }}
                            />

                            {/* Specular gloss top highlight */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: "46%",
                                    background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)",
                                    borderRadius: "14px 14px 50% 50% / 14px 14px 100% 100%",
                                    pointerEvents: "none",
                                    zIndex: 3,
                                }}
                            />

                            {/* Bottom glassy card badge showing title */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: "8px 12px",
                                    background: "linear-gradient(180deg, rgba(0,0,0, 0) 0%, rgba(162, 144, 224, 0.7) 100%)",
                                    color: "white",
                                    zIndex: 4,
                                    pointerEvents: "none",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: "bold",
                                        textShadow: "0 1px 3px rgba(0,0,0,0.7)",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    {project.title}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}

                {/* Right Navigation Chevron */}
                {PROJECTS.length > 1 && (
                    <NavChevron
                        side="right"
                        onClick={(e: React.MouseEvent) => {
                            e.stopPropagation()
                            goNext()
                        }}
                        aria-label="Next project"
                    >
                        <ChevronRightIcon sx={{ fontSize: 30 }} />
                    </NavChevron>
                )}
            </Box>

            {/* Direct-access glassy pill button row */}
            <Stack
                direction="row"
                spacing={1}
                sx={{
                    width: "100%",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    my: 2.5,
                }}
            >
                {PROJECTS.map((p, i) => (
                    <GlassPillButton
                        key={p.title}
                        active={i === activeIndex}
                        onClick={() => animateTo(i)}
                    >
                        {p.title}
                    </GlassPillButton>
                ))}
            </Stack>

            {/* Active Project Details Card */}
            {currentProject && (
                <ActiveProjectDetails project={currentProject} />
            )}
        </Box>
    )
}

export default ProjectOverview