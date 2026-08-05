import { useRoutes } from "react-router-dom"
import DefaultLayout from "./default-layout.tsx"
import LandingPage from "../pages/landing.tsx"
import ProjectsOverview from "../pages/projects-overview.tsx"
import NotFound from "../pages/notfound.tsx"
import ProjectPage from "../pages/projects-page.tsx"

// defining all the routes in the site
function RouteConfig() {
    return useRoutes([
        // every page except the not found page has the default layout
        {
            element: <DefaultLayout />,
            children: [
                { path: "/", element: <LandingPage /> },
                { path: "/projects", element: <ProjectsOverview /> },
                { path: "/projects/:projectTitle", element: <ProjectPage /> }
            ],
        },
        // not found page
        { path: "*", element: <NotFound /> },
    ])
}

export default RouteConfig