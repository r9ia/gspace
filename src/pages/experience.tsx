import { Box, Divider, Stack, Typography } from "@mui/material"
import { EXPERIENCES } from "../Info/experienceInfo"
import { ORANGE_CHIP_SX } from "../design/chips"

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
                        fontSize: { xs: 22, md: 20 },
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
                    <Typography sx={{ fontSize: { xs: 18, md: 16 } }}>
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
                            fontWeight: "light",
                            fontSize: { xs: 17, md: 15 }
                        }} >
                            {experience.date}

                        </Typography>

                        <Divider />

                        {/* actual content*/}
                        <Box sx={{ display: "flex", flexWrap: "nowrap", pt: 1 }}>
                            {/*post icon*/}
                            <img src={"experiences.png"} width={40} height={40} />


                            {/*text*/}
                            <Box sx={{ pl: 1, flex: 1, minWidth: 0 }}>
                                <Typography sx={{
                                    fontSize: { xs: 22, md: 20 }, color: "#000000",
                                    fontWeight: "bold",
                                }}>
                                    {experience.title}
                                </Typography>

                                <Typography>
                                    {experience.company}
                                </Typography>

                                {/*stack tags*/}
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {experience.stack?.map((tech) => (
                                        <Box key={tech}>
                                            <Typography sx={ORANGE_CHIP_SX}>
                                                {tech}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                                <Typography sx={{ pt: 1.5, whiteSpace: 'pre-line' }}>
                                    {experience.description}
                                </Typography>

                            </Box>

                            {/*cover image*/}
                            <Box sx={{ ml: "auto", pl: 1, flexShrink: 0 }}>
                                <Box component="img" src={experience.cover} alt={experience.company} sx={{ width: { xs: 56, sm: 72, md: 130 }, height: "auto" }} />
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
