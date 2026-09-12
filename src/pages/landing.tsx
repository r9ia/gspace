import About from "../page-comps/about.tsx"
import Status from "../page-comps/status.tsx"
import { Stack } from "@mui/material"

function LandingPage() {
    return (
        <>
            <Stack spacing={3}>
                
                <About />
            </Stack>

        </>
    )
}

export default LandingPage
