import { useParams, Navigate, Link as RouterLink } from "react-router-dom"
import { Box, Typography, Stack } from "@mui/material"
import { getProjectByTitle } from "../projectInfo/projectInfo.tsx"
import { Link } from "@mui/material"

const HEADER_FONT = '"Arial Rounded MT Bold", system-ui, sans-serif'

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
            <RouterLink to="/projects">
                return to projects
            </RouterLink>

            {/*cover image */}
            {currentProject.cover && (
                <img
                    src={currentProject.cover}
                    alt={currentProject.title}
                    style={{ width: "100%", maxHeight: 320, objectFit: "cover", borderRadius: 8 }}
                />
            )}

            {/*title*/}

            <Typography sx={{ fontFamily: HEADER_FONT, fontSize: 28, fontWeight: "bold", mt: 2 }}>
                {currentProject.title}
            </Typography>

            {/*date*/}

            <Typography sx={{ color: "text.secondary", mb: 1 }}>
                {currentProject.date}
            </Typography>

            {/*tags*/}

            <Typography sx={{ mb: 2 }}>
                {currentProject.tags}
            </Typography>

            {/*description*/}

            {currentProject.description && (
                <Typography component="p">
                    {currentProject.description}
                </Typography>
            )}

            {/*links*/}
            {currentProject.links && currentProject.links.length > 0 && (
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    {currentProject.links.map((link) => (
                        <Link
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                        >
                            {link.label}
                        </Link>
                    ))}
                </Stack>
            )}

        </Box>
    )
}

export default ProjectPage