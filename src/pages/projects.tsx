import Projects from "../page-comps/projects.tsx"
import ProfileBox from "../page-comps/profile-box.tsx"

function ProjectsPage() {
    return (
        <ProfileBox title="georgia's projects" variant="orange">
            <Projects />
        </ProfileBox>
    )
}

export default ProjectsPage
