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
        date: "Jan 2, 3037",
        tags: "Web Development",
        description: "this website, built with react + mui",
        cover: "/379.png",
        links:[{label: "try on hithub", url: "link"}, {label: "try on devpost", url:"ajsha"}]
    },
    {
        title: "dread director",
        date: "Jan 2, 3037",
        tags: "Web Development",
        description: "this website, built with react + mui",
        cover: "/379.png",
    },
]

export function getProjectByTitle(title?: string): ProjectInterface | undefined {
    if (!title) return undefined
    return PROJECTS.find(
        p => p.title.toLowerCase() === decodeURIComponent(title).toLowerCase()
    )
}