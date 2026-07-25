import { Box, Stack } from "@mui/material"
import COLOURS from "../design/colours"

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
]

function Projects() {
    return (
        <Stack spacing={2}>
            {PROJECTS.map((project) => (
                <Box key={project.title} sx={{ border: `1px solid ${COLOURS.borderBlue}`, borderRadius: 1, padding: 2 }}>
                    <h3 style={{ margin: "0 0 4px" }}>{project.title}</h3>
                    {project.description && <p style={{ margin: "0 0 4px" }}>{project.description}</p>}
                    {project.link && <a href={project.link} target="_blank" rel="noreferrer">{project.link}</a>}
                </Box>
            ))}
        </Stack>
    )
}

export default Projects
