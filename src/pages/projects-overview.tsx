import { Box, Stack, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { PROJECTS } from "../projectInfo/projectInfo"

function ProjectOverview() {
    return (
        <>
            <Typography sx={{
                borderRadius: 0,
                fontSize: 23, color: "#000000", fontWeight: "bold",
            }}>
                Project Blog
            </Typography>

            <Typography>
                [subscribe to this blog]
            </Typography>

            <br />

            <Stack sx={{}} spacing={2}>
                {PROJECTS.map((project) => (
                    //containing one project tab
                    <Box key={project.title} sx={{ padding: 2, bgcolor: "orange", display: "flex" }}>
                        {/*cover image*/}
                        <img src={project.cover} width={130} height={130} />

                        {/*text and stuff*/}

                        <Box>
                            <Typography>
                                {project.date}
                            </Typography>
                            <h3 style={{ margin: "0 0 4px" }}>{project.title}</h3>
                            <Typography>
                                tags: {project.tags}
                            </Typography>


                            {project.description && <p style={{ margin: "0 0 4px" }}>{project.description}</p>}

                            {/*link to the individual project page which has the url:
                            /projects/*insert name of the project*/}
                            <RouterLink to={`/projects/${project.title}`} rel="noreferrer">
                                {'>>>'} Continue Reading</RouterLink>

                        </Box>

                    </Box>
                ))}
            </Stack>
        </>
    )
}

export default ProjectOverview
