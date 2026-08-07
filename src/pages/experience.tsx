import { Box, Stack, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { EXPERIENCES } from "../Info/experienceInfo"
import { getGlassTabSx } from "../design/liquid-glass"

function Experience() {
    return (
        <>
            <Typography sx={{
                borderRadius: 0,
                fontSize: 25, color: "#000000", fontWeight: "bold",
            }}>
                Experience
            </Typography>

            <br />

            <Stack sx={{}} spacing={2}>
                {EXPERIENCES.map((project) => (
                    //containing one project tab
                    <Box key={project.title} sx={{
                        // ...getGlassTabSx("252, 119, 10"),
                        padding: 2, display: "flex", bgcolor:"rgba(196, 215, 255)", 
                        //boxShadow: 7//'0px 10px 20px rgba(193, 83, 15, 0.3)'
                    }}>
                        {/*cover image*/}
                        <img src={project.cover} width={130} height={130} />

                        {/*text and stuff*/}

                        <Box>
                            <Typography>
                                {project.date}
                            </Typography>
                            <h3 style={{ margin: "0 0 4px" }}>{project.title}</h3>


                            {project.description && (
                                <Typography style={{ margin: "0 0 4px" }}>
                                    {project.description.length > 150
                                        ? `${project.description.slice(0, 150)}...`
                                        : project.description}
                                </Typography>
                            )}

                            {/*link to the individual project page which has the url:
                            /projects/*insert name of the project*/}
                            <RouterLink to={`/projects/${project.title}`} rel="noreferrer">
                                <Typography>
                                    {'>>>'} Continue Reading
                                </Typography>
                            </RouterLink>

                        </Box>

                    </Box>
                ))}
            </Stack>
        </>
    )
}

export default Experience
