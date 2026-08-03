import { Box, Stack, Typography } from "@mui/material"

interface Project {
    title: string
    date: string
    tag: string
    description: string
    link?: string //representing the url param that the page will land on
    cover?: string //represneting what will be passed into the src tag
}

const PROJECTS: Project[] = [
    {
        title: "gspace.net",
        date: "Jan 2, 3037",
        tag: "Web Development",
        description: "this website, built with react + mui",
        link: "/projects/hiiii",
        cover: "/379.png"
    },
    {
        title: "gspace.net",
        date: "Jan 2, 3037",
        tag: "Web Development",
        description: "this website, built with react + mui",
        link: "hiii",
        cover: "/379.png"
    },
]

function Projects() {
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
                                tags: {project.tag}
                            </Typography>


                            {project.description && <p style={{ margin: "0 0 4px" }}>{project.description}</p>}
                            {project.link && <a href={project.link} rel="noreferrer">
                                {'>>>'} Continue Reading</a>}

                        </Box>

                    </Box>
                ))}
            </Stack>
        </>
    )
}

export default Projects
