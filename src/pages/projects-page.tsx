import { useParams, Navigate, Link as RouterLink } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import { getProjectByTitle } from "../Info/projectInfo.tsx"
import { BLUE_GLASS_CHIP_SX } from "../design/chips"


// single view of a project
function ProjectPage() {
    // getting info from the params
    const params = useParams()

    // using the project title to get the project info
    const currentProject = getProjectByTitle(params.projectTitle)

    // guard against unknown/mistyped project titles
    // navigate user to 404 page
    if (!currentProject) {
        return <Navigate to="/*" replace />
    }

    return (
        <Box key={currentProject.title}>
            <RouterLink to="/projects" style={{ textDecoration: "none" }}>
                <Typography sx={{
                    fontSize: { xs: 16, md: 14 },
                    fontWeight: 700,
                    color: "#39629b",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.5,
                    transition: "transform 0.15s ease",
                    '&:hover': {
                        textDecoration: "underline",
                        transform: "translateX(3px)",
                    },
                }} >
                    {'\u00AB\u00AB\u00AB Return To Projects'}
                </Typography>
            </RouterLink>
            <br />
            <br />

            {/*cover image */}
            {currentProject.cover && (
                <Box component="img" src={currentProject.cover} alt={currentProject.title} sx={{

                    maxHeight: { xs: 400, md: 167 },
                    maxWidth: { xs: "100%", md: 250 }, objectFit: "contain",
                }} />

            )}

            {/*title*/}

            <Typography sx={{ fontSize: { xs: 30, md: 28 }, fontWeight: "bold", mt: 2 }}>
                {currentProject.title}
            </Typography>

            {/*date*/}

            <Typography sx={{ color: "text.secondary", mb: 1 }}>
                {currentProject.date}
            </Typography>

            {/*tags*/}
            {currentProject.tags && (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1.5 }}>
                    {currentProject.tags.split(",").map((tag) => (
                        <Box key={tag.trim()}>
                            <Typography sx={BLUE_GLASS_CHIP_SX}>
                                {tag.trim()}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            )}

            {/*description*/}

            {currentProject.description && (
                <Typography component="p">
                    {currentProject.description}
                </Typography>
            )}
            <br />
            {/*links*/}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {currentProject.links?.map((link) => (
                    <Box
                        key={link.label}
                        component="a"
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                            fontSize: { xs: 16, md: 14 },
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
            </Box>

        </Box>
    )
}

export default ProjectPage
