import { Box, Stack, Typography } from "@mui/material"
import { getGlassTabSx } from "../design/liquid-glass"

interface Project {
    title: string
    description: string
    link?: string
    cover?: string
}

const PROJECTS: Project[] = [
    {
        title: "gspace.net",
        description: "this website, built with react + mui",
        link: "",
    },
    {
        title: "gspace.net",
        description: "this website, built with react + mui",
        link: "",
    },
    
]

function Projects() {
    return (
        <>
        <Typography sx={{
                ...getGlassTabSx("246, 206, 157"), borderRadius: 0,
                fontSize: 20, color: "#c87d45", fontWeight: "bold",
            }}>
                &nbsp;Project Gallery
            </Typography>
        <Stack spacing={2}>
            {PROJECTS.map((project) => (
                <Box key={project.title} sx={{ padding: 2 }}>
                    <h3 style={{ margin: "0 0 4px" }}>{project.title}</h3>
                    {project.description && <p style={{ margin: "0 0 4px" }}>{project.description}</p>}
                    {project.link && <a href={project.link} target="_blank" rel="noreferrer">{project.link}</a>}
                </Box>
            ))}
        </Stack>
        </>
    )
}

export default Projects
