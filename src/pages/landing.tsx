import About from "../page-comps/about.tsx"
import Music from "../page-comps/music.tsx"
import ProfileBox from "../page-comps/profile-box.tsx"

function LandingPage() {
    return (
        <>
            <ProfileBox title="georgia's Blurbs" variant="orange">
                <About />
            </ProfileBox>
        
                <Music />
            
        </>
    )
}

export default LandingPage
