import { Button, Stack } from "@mui/material"

function Contact() {

    return (
        <Stack spacing={0.5} sx={{ alignItems: "flex-start" }}>
            <Button>send an email</Button>
            <Button>connect on linkedin</Button>
        </Stack>
    )

}

export default Contact
