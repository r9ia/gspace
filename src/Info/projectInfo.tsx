//all projects have the following info about them
export interface ProjectInterface {
    title: string
    date: string
    tags: string
    description: string
    cover?: string //represneting what will be passed into the src tag
    links?: ProjectLink[] //array of links to access more info
}

export interface ProjectLink {
    label: string
    url: string
}

export const PROJECTS: ProjectInterface[] = [
    {
        title: "gspace.net",
        date: "August 2026",
        tags: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        cover: "/379.png",
        links: [{ label: "try on hithub", url: "link" }, { label: "try on devpost", url: "ajsha" }]
    },
    {
        title: "dread director",
        date: "July 2026",
        tags: "3D Unity, Python, Raspberry Pi 5",
        description: "this website, built with react + mui",
        cover: "/379.png",
    },
    {
        title: "Reparo",
        date: "March 2026",
        tags: "Computer Vision, Agentic AI",
        description: "this website, built with react + mui",
        cover: "/379.png",
    }
]

export function getProjectByTitle(title?: string): ProjectInterface | undefined {
    if (!title) return undefined
    return PROJECTS.find(
        p => p.title.toLowerCase() === decodeURIComponent(title).toLowerCase()
    )
}