import { Box, Chip, Stack, Typography } from "@mui/material"
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
                {EXPERIENCES.map((experience) => (
                    //containing one experience tab
                    <Box key={experience.title} sx={{
                        padding: 2, display: "flex", flexDirection: "column",
                        bgcolor: "rgb(247, 242, 247)",
                        //border: "1px solid rgb(220, 154, 237)",
                    }}>
                        {/*glass header*/}
                        <Box sx={{
                            ...getGlassTabSx("220, 154, 237"),
                            bgcolor: "238, 181, 255",
                            marginTop: -2,
                            marginLeft: -2,
                            marginRight: -2,
                            marginBottom: 1.5,
                            borderRadius: 0,
                            p:1,
                            color:"white"
                        }} >
                            {experience.date}
                            </Box>

                        <Box sx={{ display: "flex" }}>
                            {/*cover image*/}
                            <img src={experience.cover} width={130} height={130} />

                            {/*text*/}
                            <Box>
                                <Typography sx={{
                                    margin: "0 0 4px", fontSize: 20, color: "#000000",
                                    fontWeight: "bold",
                                }}>{experience.title}</Typography>

                                {/*stack tags*/}
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, margin: 1 }}>
                                    {experience.stack.map((tech) => (
                                        <Chip key={tech} label={tech}
                                            sx={{
                                                ...getGlassTabSx("246, 206, 157"),
                                                color: "#c87d45", fontWeight: "bold"
                                            }} />
                                    ))}
                                </Box>


                                {experience.description && (
                                    <Typography sx={{}}>
                                        {experience.description}
                                    </Typography>
                                )}

                            </Box>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </>
    )
}

export default Experience