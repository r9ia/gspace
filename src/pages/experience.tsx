import { Box, Chip, Divider, Stack, Typography } from "@mui/material"
import { EXPERIENCES } from "../Info/experienceInfo"
import { getGlassTabSx } from "../design/liquid-glass"
import { red } from "@mui/material/colors"

function Experience() {
    return (
        <>
            <Box sx={{ borderRadius: 2 }}>
                {/* Header row */}
                <Box sx={{
                    backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02) 1px, transparent 5px, transparent 5px)",
                    px: 1,
                    bgcolor: "#cfdaf0"
                }}>
                    <Typography sx={{
                        fontSize: 22,
                        color: "#000000",
                        fontWeight: 550
                    }}>
                        Experience
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
                        Displaying: {EXPERIENCES.length} cards
                    </Typography>
                </Box>
            </Box>
            <br />


            <Stack sx={{}} spacing={2}>
                {EXPERIENCES.map((experience) => (

                    //containing one experience tab
                    <Box key={experience.title} sx={{
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 1,
                        p: 1,
                        pt: 0
                    }}>
                        {/*date header*/}
                        <Typography sx={{
                            color: "#6b6868",
                            fontWeight:"light",
                            fontSize:15
                        }} >
                            {experience.date}

                        </Typography>

                        <Divider />

                        {/* actual content*/}
                        <Box sx={{ display: "flex", pt: 1 }}>
                            {/*post icon*/}
                            <img src={experience.cover} width={40} height={40} />


                            {/*text*/}
                            <Box sx={{ pl: 1 }}>
                                <Typography sx={{
                                    fontSize: 20, color: "#000000",
                                    fontWeight: "bold",
                                }}>
                                    {experience.title}
                                </Typography>

                                <Typography>
                                    {experience.company}
                                </Typography>

                                {/*stack tags*/}
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1}}>
                                    {experience.stack.map((tech) => (
                                        <Box>
                                            <Typography sx={{
                                                 ...getGlassTabSx("246, 206, 157"),
                                                backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02) 1px, transparent 5px, transparent 5px)",
                                                bgcolor: "#e39356",
                                                color: "#000000",
                                                borderRadius:1,
                                                px:1,
                                                fontSize:12
                                                }}>
                                                {tech}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>


                                {experience.description && (
                                    <Typography sx={{}}>
                                        {experience.description}
                                    </Typography>
                                )}

                            </Box>

                            {/*cover image*/}
                            <Box sx={{ml: "auto"}}>
                                <img src={experience.cover} width={130} height={130} />
                            </Box>
                            
                        </Box>
                        <br />
                    </Box>
                ))}
            </Stack>
        </>
    )
}

export default Experience