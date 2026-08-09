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
                        // ...getGlassTabSx("252, 119, 10"),
                        padding: 2, display: "flex", bgcolor: "rgba(196, 215, 255)",
                        //boxShadow: 7//'0px 10px 20px rgba(193, 83, 15, 0.3)'
                    }}>
                        {/*cover image*/}
                        <img src={experience.cover} width={130} height={130} />

                        {/*text*/}
                        <Box>
                            <Typography>
                                {experience.date}
                            </Typography>
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
                ))}
            </Stack>
        </>
    )
}

export default Experience
